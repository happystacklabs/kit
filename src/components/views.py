from django.shortcuts import render
from django.shortcuts import redirect, render
from django.shortcuts import get_object_or_404
import datetime
import pytz
from django.contrib import messages
from django.conf import settings
from django.utils.translation import ugettext_lazy as _
from django.http import HttpResponseRedirect
from django.http import HttpResponse
from django.contrib.auth.decorators import login_required
from contests.models import Contest
from accounts.models import UserProfile
from payments.models import Payment
from django.core.urlresolvers import reverse
from django.views.decorators.http import require_POST
from django.views.decorators.csrf import csrf_exempt
import json
import stripe
from core.helpers import decode_id
from django.contrib.auth import get_user_model
from django.core.mail import send_mail
from coupons.forms import CouponForm
from payments.taxes import TAX_TABLE


stripe.api_key = settings.STRIPE_KEY
endpoint_secret_renew = settings.STRIPE_ENDPOINT_SECRET_RENEW
endpoint_secret_cancel = settings.STRIPE_ENDPOINT_SECRET_CANCEL
stripe_publish_key = settings.STRIPE_PUBLISH_KEY

ONE_TIME_CHARGE = 399

import logging
log = logging.getLogger(__name__)


def calculate_taxes(province, subtotal):
	""" Helper to calculate taxes, return a tuple"""
	tps_amount = TAX_TABLE[province].TPS * subtotal
	tvh_amount = TAX_TABLE[province].TVH * subtotal
	tvq_amount = TAX_TABLE[province].TVQ * subtotal
	total_taxes = tps_amount + tvh_amount + tvq_amount
	return (tps_amount, tvh_amount, tvq_amount, total_taxes)

def process_stripe_event(request, endpoint_secret):
	payload = request.body.decode('utf-8')
	sig_header = request.META['HTTP_STRIPE_SIGNATURE']
	event = None

	try:
		event = stripe.Webhook.construct_event(
			payload, sig_header, endpoint_secret
			)
	except ValueError as e:
		# Invalid payload
		log.error(e)
		log.error("invalid payload")
		return HttpResponse(status=400)
	except stripe.error.SignatureVerificationError as e:
		# Invalid signature
		log.error(e)
		log.error("invalid signature")
		return HttpResponse(status=400)
	return event

# Create your views here.
@login_required
def choose_plan(request):
	return render(request, 'choose_plan.html', {})

@login_required
def cancel_subscription(request):
	subscription_id = request.user.profile.subscription_id
	subscription = stripe.Subscription.retrieve(subscription_id)
	subscription.delete(at_period_end=True)
	# Send cancel email
	send_mail(
		_('Sorry to see you go :('),
		_('Hi,\n\n Your subscription will be canceled at the end of the current billing cycle.\n\n Thank you,\n The Pangolex team'),
		'Pangolex <admin@pangolex.com>',
		[request.user.email]
	)
	messages.success(request, _('Your subscription will be canceled at the end of the current billing cycle.'))
	return redirect(reverse('billing_settings'))

@require_POST
@csrf_exempt
def cancel_subscription_webhook(request):
	event = process_stripe_event(request, endpoint_secret_cancel)
	log.debug(event)
	# find user
	customer_id = event['data']['object']['customer']
	userProfile = get_object_or_404(UserProfile, customer_id=customer_id)
	# update user valid until
	userProfile.active_until = datetime.datetime.fromtimestamp(event['data']['object']['current_period_end'], tz=pytz.utc)
	# update user subscription status
	userProfile.status = 'inactive'
	userProfile.subscription_id = ''
	userProfile.plan_name = ''
	userProfile.active_until = None
	userProfile.save()
	return HttpResponse(status=200)

@require_POST
@csrf_exempt
def renew_subscription_webhook(request):
	event = process_stripe_event(request, endpoint_secret_renew)
	if event['data']['object']['canceled_at'] == None:
		# find user
		customer_id = event['data']['object']['customer']
		userProfile = get_object_or_404(UserProfile, customer_id=customer_id)
		# update user valid until
		userProfile.active_until = datetime.datetime.fromtimestamp(event['data']['object']['current_period_end'], tz=pytz.utc)
		# update user status
		userProfile.status = 'active'
		userProfile.save()
		# create associated payment
		payment = Payment()
		payment.user = userProfile.user
		payment.payment_type = "SUB"
		payment.stripe_transaction_id = event['id']
		payment.amount = event['data']['object']['plan']['amount'] / 100
		payment.save()
	else:
		log.error("ho nooo")
	return HttpResponse(status=200)

@login_required
def activate_contest(request, contest_id):
	if request.user.profile.status == 'active':
		messages.error(request, _('Your subscription is already ongoing.'))
		return redirect(reverse('all_contests'))

	contest = get_object_or_404(Contest, pk=decode_id(contest_id))

	if request.user.profile.credits > 0:
		contest.status = 'NC'
		contest.save()
		request.user.profile.credits = request.user.profile.credits - 1
		request.user.profile.save()
		#redirect with success message
		messages.success(request, _('Awesome, you have successfully paid this giveaway!'))
		return redirect(contest)
	else:
		messages.error(request, _('You ran out of credits, choose a plan.'))
		return redirect(choose_plan)

@login_required
def pay_plan(request, plan):
	#check if the user already have an active subscription
	if request.user.profile.status == 'active':
		messages.error(request, _('Your subscription is already ongoing.'))
		return redirect(reverse('all_contests'))

	if request.method == 'POST':
		# Get the credit card details submitted by the form
		token = request.POST['stripeToken']
		user = request.user
		#check if the user already have a customer stripe profile attached
		if not user.profile.customer_id:
			try:
				# Create a Customer
				customer = stripe.Customer.create(
					source=token,
					email=user.email,
				)
				user.profile.customer_id = customer.id
				user.profile.save()
			except stripe.error.CardError as e:
				messages.error(request, _('A error happened: ') + e)
				return redirect(choose_plan)
		# Determine taxes
		taxes = 0
		tax_rate = 0
		country = request.POST['country']
		province = ''
		if country == 'CA':
			province = request.POST['province']
			TPS = TAX_TABLE[province]['TPS']
			TVH = TAX_TABLE[province]['TVH']
			TVQ = TAX_TABLE[province]['TVQ']
			tax_rate = (TPS + TVH + TVQ)
		# Check what type of plan
		if plan == 'monthly-plan':
			# subscribe customer
			try:
				subscription = stripe.Subscription.create(
					customer=user.profile.customer_id,
					plan="BusinessPlan",
					tax_percent=tax_rate * 100,
					metadata={
						'tax_rate': tax_rate,
						'country': country,
						'province': province,
					},
				)
			except Exception as e:
				messages.error(request, _('A error happened: ') + e)
				return redirect(choose_plan)
			# update user profile (active, expire at)
			user.profile.subscription_id =  subscription.id
			user.profile.active_until = datetime.datetime.fromtimestamp(subscription.current_period_end, tz=pytz.utc)
			user.profile.plan_name = subscription.plan.name
			user.profile.status = "active"
			user.profile.save()
			# create a transaction
			payment = Payment()
			payment.user = user
			payment.payment_type = "SUB"
			payment.stripe_transaction_id = subscription.id
			payment.amount = subscription.plan.amount/100
			payment.country = country
			payment.province = province
			payment.taxes = subscription.plan.amount/100 * tax_rate

			payment.save()
			# change all contest status with NA to NC
			try:
				contests = Contest.objects.filter(status='NA', owner=user.pk).all()
				for contest in contests:
					contest.status = 'NC'
					contest.save()
			except:
				pass

			# Send cancel email
			send_mail(
				_('Your Pangolex subscription'),
				_('Awesome!\n\n You have successfully paid your one month subscription! It will auto renew at the end of the billing cycle.\n\n Thank you,\n The Pangolex team'),
				'Pangolex <admin@pangolex.com>',
				[request.user.email]
			)

			# redirect with success message
			messages.success(request, _('Awesome, you have successfully paid your subscription!'))
			return HttpResponseRedirect(reverse('all_contests'))

		elif plan == 'one-time':
			# get contest
			try:
				contest = Contest.objects.filter(status='NA', owner=user.pk)[:1].get()
			except:
				contest = ""

			# make a charge
			try:
				# ADD TAXES
				charge = stripe.Charge.create(
					amount=ONE_TIME_CHARGE + int(tax_rate * ONE_TIME_CHARGE), # Amount in cents
					currency="usd",
					customer=user.profile.customer_id,
					metadata={
						'tax_rate': tax_rate,
						'country': country,
						'province': province,
					},
				)
			except stripe.error.CardError as e:
				messages.error(request, _('A error happened: ') + e)
				return redirect(choose_plan)

			# create a transaction
			payment = Payment()
			payment.user = user
			payment.payment_type = 'ONE'
			payment.stripe_transaction_id = charge.id
			payment.amount = ONE_TIME_CHARGE/100
			payment.country = country
			payment.province = province
			payment.taxes = (ONE_TIME_CHARGE/100) * tax_rate
			payment.save()

			# change contest status
			if contest == "":
				#no contest to activate, so give credit to account
				user.profile.credits = user.profile.credits + 1
				user.profile.save()
				messages.success(request, _('Awesome, your account have been credited one giveaway!'))
				return HttpResponseRedirect(reverse('all_contests'))
			else:
				contest.status = 'NC'
				contest.save()

			# Send cancel email
			send_mail(
				_('Thank you for adding credits on Pangolex'),
				_('Hi,\n\n You have successfully added credits for one giveaway on Pangolex.\n\n Thank you,\n The Pangolex team'),
				'Pangolex <admin@pangolex.com>',
				[request.user.email]
			)

			#redirect with success message
			messages.success(request, _('Awesome, you have successfully paid this giveaway!'))
			return redirect(contest)

	couponForm = CouponForm()
	tax_table = json.dumps(TAX_TABLE)

	# Send the appropriate periodpicker
	if plan == 'monthly-plan':
		subtotal = 19.99
	elif plan == 'one-time':
		subtotal = 2.99

	return render(request, 'pay_plan.html', {'plan': plan, 'couponForm': couponForm, 'tax_table': tax_table, 'subtotal': subtotal, 'stripe_publish_key': stripe_publish_key })
