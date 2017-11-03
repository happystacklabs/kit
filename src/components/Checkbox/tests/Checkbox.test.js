import React from 'react';
import Checkbox from ".."
import {shallow, mount} from 'enzyme';

describe('Checkbox', () => {
  it('set all props', () => {
    const checkbox = shallow(
      <Checkbox
        name='Foo'
        checked
      />
    ).find('input');
    expect(checkbox.prop('name')).toBe('Foo');
    expect(checkbox.prop('checked')).toBe(true);
  });

  describe('onClick()', () => {
    it('is called when the checkbox is clicked', () => {
      const spy = jest.fn();
      const checkbox = mount(<Checkbox onChange={spy} name='foo'/>);
      checkbox.find('input').instance().checked = true;
      checkbox.find('input').simulate('change');
      expect(spy).toHaveBeenCalledWith({"name": "foo", "value": true});
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
});
