import React from 'react';
import { shallow } from 'enzyme';
import Skeleton from '../Skeleton';


describe('Skeleton', () => {
  describe('lines', () => {
    it('render 3 lines by default', () => {
      const skeleton = shallow(<Skeleton />);
      expect(skeleton.find('div').at(1).hasClass('kit-skeleton__line')).toBe(true);
      expect(skeleton.find('div').at(2).hasClass('kit-skeleton__line')).toBe(true);
      expect(skeleton.find('div').at(3).hasClass('kit-skeleton__line')).toBe(true);
    });

    it('add the number of lines given by props', () => {
      const skeleton = shallow(<Skeleton lines={5} />);
      expect(skeleton.find('div').at(5).hasClass('kit-skeleton__line')).toBe(true);
    });
  });

  describe('display', () => {
    it('change the lines for a display div', () => {
      const skeleton = shallow(<Skeleton display />);
      expect(skeleton.find('div').at(1).hasClass('kit-skeleton__display')).toBe(true);
    });
  });
});
