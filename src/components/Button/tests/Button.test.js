import React from 'react';
import { shallow } from 'enzyme';
import Button from '../Button';


describe('Button', () => {
  describe('children', () => {
    it('show the text', () => {
      const button = shallow(<Button>Foo</Button>).find('button');
      expect(button.text()).toBe('Foo');
    });
  });

  describe('onClick()', () => {
    it('is called when the button is clicked', () => {
      const spy = jest.fn();
      shallow(<Button onClick={spy}>Test</Button>).simulate('click');
      expect(spy).toHaveBeenCalled();
    });
  });

  describe('disabled', () => {
    it('sets the disabled attribute when given by props', () => {
      const button = shallow(<Button disabled>Foo</Button>);
      expect(button.find('button').prop('disabled')).toBe(true);
    });
  });

  describe('size', () => {
    it('show regular by default', () => {
      const text = shallow(<Button size="regular">foo</Button>);
      expect(text.hasClass('kit-Button__button--regular')).toBe(true);
    });

    it('show slim when given by props', () => {
      const text = shallow(<Button size="slim">foo</Button>);
      expect(text.hasClass('kit-Button__button--slim')).toBe(true);
    });

    it('show large when given by props', () => {
      const text = shallow(<Button size="large">foo</Button>);
      expect(text.hasClass('kit-Button__button--large')).toBe(true);
    });
  });

  describe('square', () => {
    it('show square when given by props', () => {
      const text = shallow(<Button square />);
      expect(text.hasClass('kit-Button__button--square')).toBe(true);
    });
  });

  describe('color', () => {
    it('is positive when given by props', () => {
      const button = shallow(<Button color="positive" />);
      expect(button.find('button').hasClass('kit-Button__button--positive')).toBe(true);
    });

    it('is negative when given by props', () => {
      const button = shallow(<Button color="negative" />);
      expect(button.find('button').hasClass('kit-Button__button--negative')).toBe(true);
    });

    it('is purple when given by props', () => {
      const button = shallow(<Button color="purple" />);
      expect(button.find('button').hasClass('kit-Button__button--purple')).toBe(true);
    });
  });

  describe('fullWidth', () => {
    it('add fullWidth css selector when given by props', () => {
      const button = shallow(<Button fullWidth />);
      expect(button.find('button').hasClass('kit-Button__button--fullWidth')).toBe(true);
    });
  });

  describe('plain', () => {
    it('add buttonPlain css selector when given by props', () => {
      const button = shallow(<Button plain />);
      expect(button.find('button').hasClass('kit-Button__button--plain')).toBe(true);
    });
  });

  describe('outline', () => {
    it('add buttonOutline css selector when given by props', () => {
      const button = shallow(<Button outline />);
      expect(button.find('button').hasClass('kit-Button__button--outline')).toBe(true);
    });
  });
  describe('loading', () => {
    it('render spinner when given by props', () => {
      const button = shallow(<Button loading />);
      expect(button.find('div').first().hasClass('kit-Button__button--loading')).toBe(true);
    });

    it('disable the button', () => {
      const button = shallow(<Button loading />);
      expect(button.find('button').prop('disabled')).toBe(true);
    });
  });
});
