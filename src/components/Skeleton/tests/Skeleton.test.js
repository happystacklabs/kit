import React from 'react';
import Skeleton from ".."
import {shallow} from 'enzyme';


describe('Skeleton', () => {
  describe('lines', () => {
    it('render 3 lines by default', () => {
      const skeleton = shallow(
        <Skeleton />
      );
      expect(skeleton.find('div').at(1).hasClass('kit-Skeleton__line')).toBe(true);
      expect(skeleton.find('div').at(2).hasClass('kit-Skeleton__line')).toBe(true);
      expect(skeleton.find('div').at(3).hasClass('kit-Skeleton__line')).toBe(true);
    });

    it('add the number of lines given by props', () => {
      const skeleton = shallow(
        <Skeleton lines={5} />
      );
      expect(skeleton.find('div').at(5).hasClass('kit-Skeleton__line')).toBe(true);
    });
  });

  describe('display', () => {
    it('change the lines for a display div', () => {
      const skeleton = shallow(
        <Skeleton display />
      );
      expect(skeleton.find('div').at(1).hasClass('kit-Skeleton__display')).toBe(true);
    });
  });
});
