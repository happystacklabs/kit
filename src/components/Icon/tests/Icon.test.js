import React from 'react';
import { mount } from 'enzyme';
import Icon from '../Icon';


describe('Icon', () => {
  it('render the svg tag', () => {
    const icon = mount(<Icon name="coffee" />);
    expect(icon.find('svg').hasClass('svg-inline--fa')).toBe(true);
  });

  describe('name', () => {
    it('show the icon when given its name by props', () => {
      const icon = mount(<Icon name="coffee" />);
      expect(icon.find('svg').hasClass('fa-coffee')).toBe(true);
    });
  });

  describe('color', () => {
    it('should be ink by default', () => {
      const icon = mount(<Icon name="eye" />);
      expect(icon.find('svg').hasClass('kit-icon--ink')).toBe(true);
    });

    it('is inkLight when given by props', () => {
      const icon = mount(<Icon name="eye" color="ink-light" />);
      expect(icon.find('svg').hasClass('kit-icon--ink-light')).toBe(true);
    });

    it('is positive when given by props', () => {
      const icon = mount(<Icon name="eye" color="positive" />);
      expect(icon.find('svg').hasClass('kit-icon--positive')).toBe(true);
    });

    it('is negative when given by props', () => {
      const icon = mount(<Icon name="eye" color="negative" />);
      expect(icon.find('svg').hasClass('kit-icon--negative')).toBe(true);
    });

    it('is main when given by props', () => {
      const icon = mount(<Icon name="eye" color="main" />);
      expect(icon.find('svg').hasClass('kit-icon--main')).toBe(true);
    });
  });
});
