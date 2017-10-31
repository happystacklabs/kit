import React from 'react';
import Checkbox from ".."

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
      shallow(<Checkbox onClick={spy} name='foo'/>).find('input').at(0).simulate('click');
      expect(spy).toHaveBeenCalled();
    });
  });
});
