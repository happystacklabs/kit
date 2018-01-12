import React from 'react';
import { shallow } from 'enzyme';
import Thumbnail from '../Thumbnail';


describe('Thumbnail', () => {
  describe('source', () => {
    it('passed the source given by props as the image ref', () => {
      const thumbnail = shallow((
        <Thumbnail alt="Foo" source="http://via.placeholder.com/350x350" />
      ));
      expect(thumbnail.find('img').prop('src')).toBe('http://via.placeholder.com/350x350');
    });

    it('change the img for a div when empty', () => {
      const thumbnail = shallow(<Thumbnail alt="Foo" />);
      expect(thumbnail.find('div').first().hasClass('kit-thumbnail__placeholder')).toBe(true);
    });
  });

  describe('size', () => {
    it('show medium by default', () => {
      const thumbnail = shallow(<Thumbnail alt="Foo" />);
      expect(thumbnail.find('span').first().hasClass('kit-thumbnail--medium')).toBe(true);
    });

    it('add small class when given by prop', () => {
      const thumbnail = shallow(<Thumbnail size="small" alt="Foo" />);
      expect(thumbnail.find('span').first().hasClass('kit-thumbnail--small')).toBe(true);
    });

    it('add large class when given by prop', () => {
      const thumbnail = shallow(<Thumbnail size="large" alt="Foo" />);
      expect(thumbnail.find('span').first().hasClass('kit-thumbnail--large')).toBe(true);
    });
  });

  describe('alt', () => {
    it('should display an alt text in the image when given by props', () => {
      const thumbnail = shallow(<Thumbnail alt="Foo" source="Bar" />);
      expect(thumbnail.find('img').prop('alt')).toBe('Foo');
    });
  });
});
