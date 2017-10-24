import React from 'react';
import {shallow, mount} from 'enzyme';
import TextInput from ".."


describe('TextInput', () => {
  it('set all props', () => {
    const textInput = shallow(
      <TextInput
        name="Foo"
        value="Bar"
        placeholder="Baz"
        readOnly
        disabled
        maxLength="2"
      />
    ).find('input');
    expect(textInput.prop('name')).toBe('Foo');
    expect(textInput.prop('value')).toBe('Bar');
    expect(textInput.prop('placeholder')).toBe('Baz');
    expect(textInput.prop('readOnly')).toBe(true);
    expect(textInput.prop('disabled')).toBe(true);
    expect(textInput.prop('maxLength')).toBe('2');
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
        <TextInput name="Foo" value="Foo Bar" maxLength="2"/>
      );
      expect(input.find('input').hasClass('shake')).toBe(true);
    });
  });

  describe('shake', () => {
    it('add shake style tag', () => {
      const input = shallow(
        <TextInput name="Foo" shake/>
      );
      expect(input.find('input').hasClass('shake')).toBe(true);
    });
  });

  describe('error', () => {
    it('add error style tag', () => {
      const input = shallow(
        <TextInput name="Foo" error="Foo"/>
      );
      expect(input.find('input').hasClass('error')).toBe(true);
    });

    it('show an error message', () => {
      const input = shallow(
        <TextInput name="Foo" error="Foo"/>
      );
      expect(input.find('span').text()).toBe('Foo');
    });
  });

});
