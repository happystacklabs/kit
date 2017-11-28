import React from 'react';
import Progress from ".."
import {shallow, mount} from 'enzyme';


describe('Progress', () => {
  it('render the progress bar', () => {
      const progress = shallow(
        <Progress/>
      );
      expect(progress.find('div').first().hasClass('kit-Progress__progressBar')).toBe(true);
  });

  describe('size', () => {
    it('render the medium size by default', () => {
      const progress = shallow(
        <Progress/>
      );
      expect(progress.find('div').first().hasClass('kit-Progress--medium')).toBe(true);
    });

    it('render the small size when given by props', () => {
      const progress = shallow(
        <Progress size='small'/>
      );
      expect(progress.find('div').first().hasClass('kit-Progress--small')).toBe(true);
    });

    it('render the large size when given by props', () => {
      const progress = shallow(
        <Progress size='large'/>
      );
      expect(progress.find('div').first().hasClass('kit-Progress--large')).toBe(true);
    });
  });

  describe('progress', () => {
    it('add a style with the appropriate width passed by props', () => {
        const progress = shallow(
          <Progress progress={50}/>
        );
        expect(progress.find('div').at(1).prop('style')).toEqual({"width": "50%"});
    });

    it('limit the boundary between 0 and 100', () => {
      const progress = shallow(
        <Progress progress={200}/>
      );
      expect(progress.find('div').at(1).prop('style')).toEqual({"width": "100%"});
    });
  });
});
