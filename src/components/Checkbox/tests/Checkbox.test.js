import React from 'react';
import Checkbox from ".."
import {shallow, mount} from 'enzyme';

describe('Checkbox', () => {
  it('set all props', () => {
    const checkbox = shallow(
      <Checkbox
        name='Foo'
        value='Bar'
        id='Bar'
        checked
      />
    ).find('input');
    expect(checkbox.prop('name')).toBe('Foo');
    expect(checkbox.prop('value')).toBe('Bar');
    expect(checkbox.prop('id')).toBe('Bar');
    expect(checkbox.prop('checked')).toBe(true);
  });

  describe('onClick()', () => {
    it('is called when the checkbox is clicked', () => {
      const spy = jest.fn();
      const checkbox = mount(<Checkbox onChange={spy} name='foo' id='foo'/>);
      checkbox.find('input').instance().checked = true;
      checkbox.find('input').simulate('change');
      expect(spy).toHaveBeenCalledWith({"id": "foo", "value": true});
    });
  });

  describe('disabled', () => {
    it('disable the checkbox when given by props', () => {
      const checkbox = shallow(<Checkbox
        name='Foo'
        disabled
      />).find('input');
      expect(checkbox.prop('disabled')).toBe(true);
    });
  });

  describe('error', () => {
    it('add error style', () => {
      const checkbox = shallow(<Checkbox
        name='Foo'
        error
      />).find('div').at(1);
      expect(checkbox.hasClass('error')).toBe(true);
    });
  });

  describe('label', () => {
    it('add a label when given by props', () => {
      const checkbox = mount(<Checkbox
        name='Foo'
        label='Bar'
      />);
      expect(checkbox.find('label').first().text()).toBe('Bar');
    });
  });

  describe('helpText', () => {
    it('add a helpText when given by props', () => {
      const checkbox = mount(<Checkbox
        name='Foo'
        helpText='Bar'
      />);
      expect(checkbox.find('span').first().text()).toBe('Bar');
    });
  });

  describe('radio', () => {
    it('change the input type to radio', () => {
      const checkbox = mount(<Checkbox
        name='Foo'
        type='radio'
      />);
      expect(checkbox.find('input').first().props().type).toBe('radio');
    });

    it('render checkbox by default instead of radio', () => {
      const checkbox = mount(<Checkbox
        name='Foo'
        type='radio'
      />);
      expect(checkbox.prop('type')).toBe('radio');
    });

    it('add the radio style selector', () => {
      const checkbox = shallow(<Checkbox
        name='Foo'
        type='radio'
      />).find('div').at(1);
      expect(checkbox.hasClass('radioInput')).toBe(true);
    });
  });
});
