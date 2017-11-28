import React from 'react';
import {shallow, mount} from 'enzyme';
import Select from ".."


describe('Select', () => {
  it('set all props', () => {
    const selectInput = shallow(
      <Select
        name='Foo'
        value='Bar'
        options={[]}
        disabled
      />
    ).find('select');
    expect(selectInput.prop('name')).toBe('Foo');
    expect(selectInput.prop('value')).toBe('Bar');
    expect(selectInput.prop('disabled')).toBe(true);
  });

  describe('options', () => {
    it('take an array of options into options object', () => {
      const options = [
        {label: 'Foo', value: 'Foo'},
        {label: 'Bar', value: 'Bar'},
      ];
      const selectInput = shallow(
        <Select
          name='Foo'
          value=''
          options={options}
        />
      );
      options.forEach((option, index) => {
        const optionElement = selectInput.find('option').at(index);
        expect(optionElement.key()).toBe(option['value']);
        expect(optionElement.prop('value')).toBe(option['value']);
        expect(optionElement.text()).toBe(option['label']);
      });

    });
  });

  describe('onChange()', () => {
    it('is called with the new value', () => {
      const spy = jest.fn();
      const wrapper = mount(
        <Select
          name='foo'
          value=''
          options={[]}
          onChange={spy}
        />
      );
      const selectInput = wrapper.find('select');
      selectInput.instance().value = 'two';
      selectInput.simulate('change');
      expect(spy).toHaveBeenCalled();
    });
  });

  describe('placeholder', () => {
    it('add a placeholder when given by props', () => {
      const selectInput = shallow(
        <Select
          name='Foo'
          value=''
          placeholder='Select'
          options={[]}
        />
      ).find('select');
      const placeholderOption = selectInput.find('option').first();
      expect(selectInput.prop('value')).toBe('');
      expect(placeholderOption.prop('disabled')).toBe(true);
      expect(placeholderOption.prop('hidden')).toBe(true);
    });
  });

  describe('error', () => {
    it('add error style tag', () => {
      const selectInput = shallow(
        <Select
          name='Foo'
          value=''
          options={[]}
          error
        />
      ).find('select');
      expect(selectInput.hasClass('kit-Select__input--error')).toBe(true);
    });
  });

  describe('helpText', () => {
    it('add a helpText when given by props', () => {
      const selectInput = mount(
        <Select
          name='Foo'
          value=''
          options={[]}
          helpText='Foo'
        />
      ).find('div');
      expect(selectInput.find('span').first().text()).toBe('Foo');
    });
  });

  describe('label', () => {
    it('add a label when given by props', () => {
      const selectInput = mount(
        <Select
          name='Foo'
          value=''
          options={[]}
          label='Foo'
        />
      ).find('div');
      expect(selectInput.find('label').first().text()).toBe('Foo');
    });
  });
});
