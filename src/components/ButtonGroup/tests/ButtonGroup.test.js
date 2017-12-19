import React from 'react';
import ButtonGroup from ".."
import Button from "../../Button"
import {shallow, mount} from 'enzyme';


describe('ButtonGroup', () => {
  describe('children', () => {
    it('render all childrens', () => {
      const buttonGroup = mount(
        <ButtonGroup>
        <Button>Foo</Button>
        <Button>Bar</Button>
        </ButtonGroup>
      );
      expect(buttonGroup.find('button').first().text()).toBe('Foo');
      expect(buttonGroup.find('button').at(1).text()).toBe('Bar');
    });
  });

  describe('segmented', () => {
    it('add the segmented class when given by props', () => {
      const buttonGroup = mount(
        <ButtonGroup segmented />
      );
      expect(buttonGroup.find('div').hasClass('kit-ButtonGroup__buttonGroup--segmented')).toBe(true);
    });
  });
});
