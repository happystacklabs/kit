const choiceListViewerOptions = [
  {
    name: 'name',
    value: 'paymentChoice',
    type: 'string',
    description: 'Name of the choice list',
  },
  {
    name: 'title',
    value: 'How do you want to pay?',
    type: 'string',
    description: 'Legend of the fieldset',
  },
  {
    name: 'choices',
    value: [
      {label: 'Alipay', value: 'alipay', helpText: 'Reccomended'},
      {label: 'Wechat', value: 'wechat'},
      {label: 'Paypal', value: 'paypal'},
    ],
    type: 'array',
    description: 'Choices of the list',
  },
  {
    name: 'multiple',
    value: false,
    type: 'bool',
    description: 'Allow to select multiple choices',
  },
  {
    name: 'disabled',
    value: false,
    type: 'bool',
    description: 'Disabled the choice list',
  },
  {
    name: 'selected',
    value: ['alipay'],
    type: 'array',
    description: 'Selected choices',
  },
  {
    value: 'selected',
    name: 'onChange',
    type: 'function',
    description: 'Called when onChange',
  },
];

export default choiceListViewerOptions;
