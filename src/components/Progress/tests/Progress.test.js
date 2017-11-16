import React from 'react';
import Progress from ".."
import {shallow, mount} from 'enzyme';


describe('Progress', () => {
  it('render the progress bar', () => {
      const progress = shallow(
        <Progress/>
      );
      expect(progress.find('div').first().hasClass('progressBar')).toBe(true);
  });

  describe('vertical', () => {
    it('flip the orientation of the progress bar', () => {

    });
  });

  describe('size', () => {
    it('render the medium size by default', () => {

    });

    it('render the small size when given by props', () => {

    });

    it('render the large size when given by props', () => {

    });
  });

  describe('progress', () => {
    it('add a style with the appropriate width passed by props', () => {
        const progress = shallow(
          <Progress progress={50}/>
        );
        expect(progress.find('div').first().style).to.have.property('opacity', '1');
    });
  });
});
