import React from 'react';
import Switch from ".."


describe('Switch', () => {
  it('render the toggle div', () => {
    const switchInput = shallow(
      <Switch/>
    );
    expect(switchInput.find('div').first().hasClass('switch')).toBe(true);
  });


  describe('on', () => {
    it('add the on css selector when on is given by props', () => {
      const switchInput = shallow(
        <Switch on/>
      );
      expect(switchInput.find('div').first().hasClass('switchOn')).toBe(true);
    });
  });

  describe('onClick()', () => {
    it('is called when the switch is clicked', () => {
      const spy = jest.fn();
      shallow(<Switch onClick={spy}/>).simulate('click');
      expect(spy).toHaveBeenCalled();
    });
  });
});
