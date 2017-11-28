import React from 'react';
import {shallow, mount} from 'enzyme';
import Tooltip from ".."


describe('Tooltip', () => {
  describe('children', () => {
    it('show the children', () => {
      const tooltip = shallow(
        <Tooltip>Foo</Tooltip>
      );
      expect(tooltip.find('span').first().text()).toBe('Foo');
    });
  });

  describe('content', () => {
    it('set the content of the tooltip when given by props', () => {
      const tooltip = mount(
        <Tooltip content='Foo'></Tooltip>
      );
      expect(tooltip.find('.kit-Tooltip__box').first().text()).toBe('Foo');
    });
  });

  describe('active', () => {
    it('add the active style', () => {
      const tooltip = mount(
        <Tooltip active></Tooltip>
      );
      expect(tooltip.find('div').first().hasClass('kit-Tooltip--active')).toBe(true);
    });
  });

  describe('onMouseEnter()', () => {
    it('add the active style class', () => {
      const tooltip = mount(
        <Tooltip>Foo</Tooltip>
      );
      tooltip.find('span').first().simulate('mouseEnter');
      expect(tooltip.find('div').first().hasClass('kit-Tooltip--active')).toBe(true);
    });
  });

  describe('onMouseLeave()', () => {
    it('add the active style class', () => {
      const tooltip = mount(
        <Tooltip>Foo</Tooltip>
      );
      tooltip.find('span').first().simulate('mouseEnter');
      expect(tooltip.find('div').first().hasClass('kit-Tooltip--active')).toBe(true);
      tooltip.find('span').first().simulate('mouseLeave');
      expect(tooltip.find('div').first().hasClass('kit-Tooltip--active')).toBe(false);
    });
  });

  describe('position', () => {
    it('add the bottom position style by default', () => {
      const tooltip = shallow(
        <Tooltip></Tooltip>
      );
      expect(tooltip.find('div').first().hasClass('kit-Tooltip__tooltip--bottom')).toBe(true);
    });

    it('add the top position style when given by props', () => {
      const tooltip = shallow(
        <Tooltip position='top'></Tooltip>
      );
      expect(tooltip.find('div').first().hasClass('kit-Tooltip__tooltip--top')).toBe(true);
    });

    it('add the left position style when given by props', () => {
      const tooltip = shallow(
        <Tooltip position='left'></Tooltip>
      );
      expect(tooltip.find('div').first().hasClass('kit-Tooltip__tooltip--left')).toBe(true);
    });

    it('add the right position style when given by props', () => {
      const tooltip = shallow(
        <Tooltip position='right'></Tooltip>
      );
      expect(tooltip.find('div').first().hasClass('kit-Tooltip__tooltip--right')).toBe(true);
    });
  });

  describe('light', () => {
    it('show the light class when given by props', () => {
      const tooltip = shallow(
        <Tooltip light></Tooltip>
      );
      expect(tooltip.find('div').first().hasClass('kit-Tooltip__tooltip--light')).toBe(true);
    });
  });
});
