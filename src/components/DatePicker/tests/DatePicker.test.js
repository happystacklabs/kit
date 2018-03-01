import React from 'react';
import { shallow, mount } from 'enzyme';
import DatePicker from '../DatePicker';


describe('DatePicker', () => {
  it('set all props', () => {
    const datepicker = mount((
      <DatePicker
        range
        id="foo"
        outside
        value="2018-3-12"
      />
    ));
    expect(datepicker.props().range).toBe(true);
    expect(datepicker.props().id).toBe('foo');
    expect(datepicker.props().outside).toBe(true);
    expect(datepicker.props().value).toBe('2018-3-12');
  });

  describe('defaut', () => {
    it('show one input by default', () => {
      const datepicker = mount(<DatePicker />);
      expect(datepicker.find('input').first().length).toBe(1);
    });

    it('add the value to the input passed by props', () => {
      const datepicker = mount(<DatePicker value="2018-3-12" />);
      expect(datepicker.find('input').first().props().value).toBe('2018-3-12');
    });

    describe('onChange()', () => {
      it('is called when input is changed', () => {
        const spy = jest.fn();
        const datepicker = mount(<DatePicker onChange={spy} id="foo" />);
        datepicker.find('input').first().simulate('change');
        expect(spy).toHaveBeenCalledWith({ id: 'foo', type: 'date', value: undefined });
      });
    });
  });

  describe('range', () => {
    it('show two input when passed by props', () => {
      const datepicker = mount(<DatePicker range />);
      expect(datepicker.find('input').first().length).toBe(1);
      expect(datepicker.find('input').at(1).length).toBe(1);
    });

    it('add the from to the input and state passed by props', () => {
      const datepicker = mount(<DatePicker range from="2018-3-12" />);
      expect(datepicker.find('input').first().props().value).toBe('2018-3-12');
      expect(datepicker.state().from).toBe('2018-3-12');
    });

    it('add the to to the input passed by props', () => {
      const datepicker = mount(<DatePicker range to="2018-3-12" />);
      expect(datepicker.find('input').at(1).props().value).toBe('2018-3-12');
    });

    describe('onChange()', () => {
      it('from is called when input is changed', () => {
        const spy = jest.fn();
        const datepicker = mount(<DatePicker range onChange={spy} id="foo" />);
        datepicker.find('input').first().simulate('change');
        expect(spy).toHaveBeenCalledWith({ id: 'foo', type: 'from', value: undefined });
      });

      it('to is called when input is changed', () => {
        const spy = jest.fn();
        const datepicker = mount(<DatePicker range onChange={spy} id="foo" />);
        datepicker.find('input').at(1).simulate('change');
        expect(spy).toHaveBeenCalledWith({ id: 'foo', type: 'to', value: undefined });
      });
    });
  });
});
