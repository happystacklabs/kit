import React from 'react';
import { shallow, mount } from 'enzyme';
import Tooltip from '../Tooltip';


describe('Tooltip', () => {
  describe('children', () => {
    it('show the children', () => {
      const tooltip = shallow(<Tooltip>Foo</Tooltip>);
      expect(tooltip.find('span').first().text()).toBe('Foo');
    });
  });

  describe('content', () => {
    it('set the content of the tooltip when given by props', () => {
      const tooltip = mount(<Tooltip content="Foo" />);
      expect(tooltip.find('.kit-tooltip__box').first().text()).toBe('Foo');
    });
  });

  describe('active', () => {
    it('add the active style', () => {
      const tooltip = mount(<Tooltip active />);
      expect(tooltip.find('div').first().hasClass('kit-tooltip--active')).toBe(true);
    });
  });

  describe('onMouseEnter()', () => {
    it('add the active style class', () => {
      const tooltip = mount(<Tooltip>Foo</Tooltip>);
      tooltip.find('span').first().simulate('mouseEnter');
      expect(tooltip.find('div').first().hasClass('kit-tooltip--active')).toBe(true);
    });
  });

  describe('onMouseLeave()', () => {
    it('add the active style class', () => {
      const tooltip = mount(<Tooltip>Foo</Tooltip>);
      tooltip.find('span').first().simulate('mouseEnter');
      expect(tooltip.find('div').first().hasClass('kit-tooltip--active')).toBe(true);
      tooltip.find('span').first().simulate('mouseLeave');
      expect(tooltip.find('div').first().hasClass('kit-tooltip--active')).toBe(false);
    });
  });

  describe('position', () => {
    it('add the bottom position style by default', () => {
      const tooltip = shallow(<Tooltip />);
      expect(tooltip.find('div').first().hasClass('kit-tooltip--bottom')).toBe(true);
    });

    it('add the top position style when given by props', () => {
      const tooltip = shallow(<Tooltip position="top" />);
      expect(tooltip.find('div').first().hasClass('kit-tooltip--top')).toBe(true);
    });

    it('add the left position style when given by props', () => {
      const tooltip = shallow(<Tooltip position="left" />);
      expect(tooltip.find('div').first().hasClass('kit-tooltip--left')).toBe(true);
    });

    it('add the right position style when given by props', () => {
      const tooltip = shallow(<Tooltip position="right" />);
      expect(tooltip.find('div').first().hasClass('kit-tooltip--right')).toBe(true);
    });
  });

  describe('light', () => {
    it('show the light class when given by props', () => {
      const tooltip = shallow(<Tooltip light />);
      expect(tooltip.find('div').first().hasClass('kit-tooltip--light')).toBe(true);
    });
  });
});
