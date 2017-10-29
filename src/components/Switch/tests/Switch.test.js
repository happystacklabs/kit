import React from 'react';
import Switch from ".."


describe('Switch', () => {
  it('render the toggle div', () => {
    const switchInput = shallow(
      <Switch/>
    );
    expect(switchInput.find('div').at(1).hasClass('switch')).toBe(true);
  });


  describe('on', () => {
    it('add the on css selector when on is given by props', () => {
      const switchInput = shallow(
        <Switch on/>
      );
      expect(switchInput.find('div').at(1).hasClass('switchOn')).toBe(true);
    });
  });

  describe('onClick()', () => {
    it('is called when the switch is clicked', () => {
      const spy = jest.fn();
      shallow(<Switch onClick={spy}/>).find('div').at(1).simulate('click');
      expect(spy).toHaveBeenCalled();
    });
  });

  describe('round', () => {
    it('add the round css selector when is given by props', () => {
      const switchInput = shallow(
        <Switch round/>
      );
      expect(switchInput.find('div').at(1).hasClass('switchRound')).toBe(true);
    });
  });

  describe('color', () => {
    it('is positive when given by props', () => {
      const switchInput = shallow(
        <Switch color='positive'/>
      );
      expect(switchInput.find('div').first().hasClass('switchColorPositive')).toBe(true);
    });

    it('is negative when given by props', () => {
      const switchInput = shallow(
        <Switch color='negative'/>
      );
      expect(switchInput.find('div').first().hasClass('switchColorNegative')).toBe(true);
    });

    it('is purple when given by props', () => {
      const switchInput = shallow(
        <Switch color='purple'/>
      );
      expect(switchInput.find('div').first().hasClass('switchColorPurple')).toBe(true);
    });
  });

  describe('size', () => {
    it('show slim when given by props', () => {
      const switchInput = shallow(
        <Switch size='slim'/>
      );
      expect(switchInput.find('div').first().hasClass('switchSizeSlim')).toBe(true);
    });

    it('show regular when given by props', () => {
      const switchInput = shallow(
        <Switch size='regular'/>
      );
      expect(switchInput.find('div').first().hasClass('switchSizeRegular')).toBe(true);
    });

    it('show large when given by props', () => {
      const switchInput = shallow(
        <Switch size='large'/>
      );
      expect(switchInput.find('div').first().hasClass('switchSizeLarge')).toBe(true);
    });
  });
});
