import React from 'react';
import {shallow, mount} from 'enzyme';
import TextInput from '..';
import Button from '..';


describe('TextInput', () => {
  it('set all props', () => {
    const textInput = shallow(
      <TextInput
        name='Foo'
        value='Bar'
        placeholder='Baz'
        readOnly
        disabled
        maxLength={2}
      />
    ).find('input');
    expect(textInput.prop('name')).toBe('Foo');
    expect(textInput.prop('value')).toBe('Bar');
    expect(textInput.prop('placeholder')).toBe('Baz');
    expect(textInput.prop('readOnly')).toBe(true);
    expect(textInput.prop('disabled')).toBe(true);
    expect(textInput.prop('maxLength')).toBe(2);
  });

  describe('onChange()', () => {
    it('is called with the new value', () => {
      const spy = jest.fn();
      const wrapper = mount(<TextInput name="foo" onChange={spy} />);
      const input = wrapper.find('input');
      input.simulate('change', { target: { name: 'foo', value: 'Changed' } });
      expect(spy).toHaveBeenCalled();
    });
  });

  describe('maxLenght', () => {
    it('stop the value at max length', () => {
      // TODO: Make a test for the max length
    });

    it('add shake on max lenght', () => {
      const input = shallow(
        <TextInput name="Foo" value="Foo Bar" maxLength={2}/>
      );
      expect(input.find('input').hasClass('kit-TextInput__input--shake')).toBe(true);
    });
  });

  describe('shake', () => {
    it('add shake style tag', () => {
      const input = shallow(
        <TextInput name="Foo" shake/>
      );
      expect(input.find('input').hasClass('kit-TextInput__input--shake')).toBe(true);
    });
  });

  describe('error', () => {
    it('add error style tag', () => {
      const input = shallow(
        <TextInput name="Foo" error="Foo"/>
      );
      expect(input.find('input').hasClass('kit-TextInput__input--error')).toBe(true);
    });

    it('show an error message', () => {
      const input = mount(
        <TextInput name="Foo" error="Foo"/>
      );
      expect(input.find('span').first().text()).toBe('Foo');
    });
  });

  describe('type', () => {
    it('give an email field when given in props', () => {
      const input = mount(
        <TextInput name="Foo" type="email"/>
      );
      expect(input.find('input').first().props().type).toBe('email');
    });

    it('give a number field when given in props', () => {
      const input = mount(
        <TextInput name="Foo" type="number"/>
      );
      expect(input.find('input').first().props().type).toBe('number');
    });

    it('give a password field when given in props', () => {
      const input = mount(
        <TextInput name="Foo" type="password"/>
      );
      expect(input.find('input').first().props().type).toBe('password');
    });

    it('give a search field when given in props', () => {
      const input = mount(
        <TextInput name="Foo" type="search"/>
      );
      expect(input.find('input').first().props().type).toBe('search');
    });

    it('give a url field when given in props', () => {
      const input = mount(
        <TextInput name="Foo" type="url"/>
      );
      expect(input.find('input').first().props().type).toBe('url');
    });
  });

  describe('helpText', () => {
    it('add a helpText when given by props', () => {
      const input = mount(
        <TextInput name="Foo" helpText="Foo"/>
      );
      expect(input.find('span').first().text()).toBe('Foo');
    });
  });

  describe('label', () => {
    it('add a label when given by props', () => {
      const input = mount(
        <TextInput name="Foo" label="Foo"/>
      );
      expect(input.find('label').first().text()).toBe('Foo');
    });
  });

  describe('action', () => {
    it('render an action link when given by props', () => {
      const action = { title: 'Bar' };
      const input = mount(
        <TextInput name='Foo' action={action}/>
      );
      expect(input.containsMatchingElement(Button)).toBe(true);
      expect(input.find(Button).text()).toBe('Bar');
    });

    it('call onAction() when cliked', () => {
      const spy = jest.fn();
      const action = { title: 'Bar', onAction:spy };
      const input = mount(
        <TextInput name="Foo" action={action}/>
      );
      input.find('button').simulate('click');
      expect(spy).toHaveBeenCalled();
    });
  });
});
