import React from 'react';
import Avatar from ".."
import {shallow, mount} from 'enzyme';


describe('Avatar', () => {
  describe('source', () => {
    it('passed the source given by props as the image ref', () => {
      const avatar = shallow(
        <Avatar source='http://via.placeholder.com/350x350'/>
      );
      expect(avatar.find('img').prop('src')).toBe('http://via.placeholder.com/350x350');
    });

    it('change the img for a div when empty', () => {
      const avatar = shallow(
        <Avatar/>
      );
      expect(avatar.find('div').first().hasClass('kit-Avatar__placeholder')).toBe(true);
    });
  });

  describe('size', () => {
    it('show medium by default', () => {
      const avatar = shallow(
        <Avatar/>
      );
      expect(avatar.find('span').first().hasClass('kit-Avatar__avatar--medium')).toBe(true);
    });

    it('add small class when given by prop', () => {
      const avatar = shallow(
        <Avatar size='small'/>
      );
      expect(avatar.find('span').first().hasClass('kit-Avatar__avatar--small')).toBe(true);
    });

    it('add large class when given by prop', () => {
      const avatar = shallow(
        <Avatar size='large'/>
      );
      expect(avatar.find('span').first().hasClass('kit-Avatar__avatar--large')).toBe(true);
    });
  });

  describe('initial', () => {
    it('add the initial when given by props', () => {
      const avatar = mount(
        <Avatar initial='FB'/>
      );
      expect(avatar.find('div').first().text()).toBe('FB');
    });

    it('transform the initial to uppercase', () => {
      const avatar = mount(
        <Avatar initial='Fb'/>
      );
      expect(avatar.find('div').first().text()).toBe('FB');
    });

    it('stop after two characters', () => {
      const avatar = mount(
        <Avatar initial='Foooo'/>
      );
      expect(avatar.find('div').first().text()).toBe('FO');
    });
  });
});
