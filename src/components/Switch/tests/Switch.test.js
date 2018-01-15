import React from 'react';
import { shallow } from 'enzyme';
import Switch from '../Switch';


describe('Switch', () => {
  it('render the toggle div', () => {
    const switchInput = shallow(<Switch />);
    expect(switchInput.find('div').at(1).hasClass('kit-switch__toggle')).toBe(true);
  });


  describe('on', () => {
    it('add the on css selector when on is given by props', () => {
      const switchInput = shallow(<Switch on />);
      expect(switchInput.find('div').at(0).hasClass('kit-switch--on')).toBe(true);
    });
  });

  describe('onClick()', () => {
    it('is called when the switch is clicked', () => {
      const spy = jest.fn();
      shallow(<Switch onClick={spy} />).find('div').at(0).simulate('click');
      expect(spy).toHaveBeenCalled();
    });
  });

  describe('round', () => {
    it('add the round css selector when is given by props', () => {
      const switchInput = shallow(<Switch round />);
      expect(switchInput.find('div').at(0).hasClass('kit-switch--round')).toBe(true);
    });
  });

  describe('color', () => {
    it('is positive when given by props', () => {
      const switchInput = shallow(<Switch color="positive" />);
      expect(switchInput.find('div').at(0).hasClass('kit-switch--positive')).toBe(true);
    });

    it('is negative when given by props', () => {
      const switchInput = shallow(<Switch color="negative" />);
      expect(switchInput.find('div').at(0).hasClass('kit-switch--negative')).toBe(true);
    });

    it('is main color when given by props', () => {
      const switchInput = shallow(<Switch color="main" />);
      expect(switchInput.find('div').at(0).hasClass('kit-switch--main')).toBe(true);
    });
  });

  describe('size', () => {
    it('show small when given by props', () => {
      const switchInput = shallow(<Switch size="small" />);
      expect(switchInput.find('div').at(0).hasClass('kit-switch--small')).toBe(true);
    });

    it('show medium when given by props', () => {
      const switchInput = shallow(<Switch size="medium" />);
      expect(switchInput.find('div').at(0).hasClass('kit-switch--medium')).toBe(true);
    });

    it('show large when given by props', () => {
      const switchInput = shallow(<Switch size="large" />);
      expect(switchInput.find('div').at(0).hasClass('kit-switch--large')).toBe(true);
    });
  });
});
