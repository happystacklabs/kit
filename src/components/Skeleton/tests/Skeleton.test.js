import React from 'react';
import Skeleton from ".."
import {shallow, mount} from 'enzyme';


describe('Skeleton', () => {
  describe('lines', () => {
    it('render 3 lines by default', () => {
      const skeleton = shallow(
        <Skeleton/>
      );
      expect(skeleton.find('div').at(1).hasClass('skeletonLine')).toBe(true);
      expect(skeleton.find('div').at(2).hasClass('skeletonLine')).toBe(true);
      expect(skeleton.find('div').at(3).hasClass('skeletonLine')).toBe(true);
    });

    it('add the number of lines given by props', () => {
      const skeleton = shallow(
        <Skeleton lines={5}/>
      );
      expect(skeleton.find('div').at(5).hasClass('skeletonLine')).toBe(true);
    });
  });

  describe('display', () => {
    it('change the lines for a display div', () => {
      const skeleton = shallow(
        <Skeleton display/>
      );
      expect(skeleton.find('div').at(1).hasClass('skeletonDisplay')).toBe(true);
    });
  });
});
