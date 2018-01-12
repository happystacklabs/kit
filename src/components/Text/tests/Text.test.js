import React from 'react';
import { shallow } from 'enzyme';
import Text from '../Text';


describe('Text', () => {
  describe('children', () => {
    it('show in text', () => {
      const text = shallow(<Text>foo</Text>);
      expect(text.text()).toBe('foo');
    });

    it('can be optional', () => {
      const text = shallow(<Text />);
      expect(text.text()).toBe('');
    });
  });

  describe('element', () => {
    it('show span by default', () => {
      const text = shallow(<Text>foo</Text>);
      expect(text.type()).toBe('span');
    });

    it('show p when given by props', () => {
      const text = shallow(<Text element="p">foo</Text>);
      expect(text.type()).toBe('p');
    });

    it('show h1 when given by props', () => {
      const text = shallow(<Text element="h1">foo</Text>);
      expect(text.type()).toBe('h1');
    });

    it('show h2 when given by props', () => {
      const text = shallow(<Text element="h2">foo</Text>);
      expect(text.type()).toBe('h2');
    });

    it('show h3 when given by props', () => {
      const text = shallow(<Text element="h3">foo</Text>);
      expect(text.type()).toBe('h3');
    });

    it('show h4 when given by props', () => {
      const text = shallow(<Text element="h4">foo</Text>);
      expect(text.type()).toBe('h4');
    });

    it('show h5 when given by props', () => {
      const text = shallow(<Text element="h5">foo</Text>);
      expect(text.type()).toBe('h5');
    });

    it('show h6 when given by props', () => {
      const text = shallow(<Text element="h6">foo</Text>);
      expect(text.type()).toBe('h6');
    });
  });

  describe('size', () => {
    it('show body by default', () => {
      const text = shallow(<Text>foo</Text>);
      expect(text.hasClass('kit-text--body')).toBe(true);
    });

    it('show display-xlarge when given by props', () => {
      const text = shallow(<Text size="display-xlarge">foo</Text>);
      expect(text.hasClass('kit-text--display-xlarge')).toBe(true);
    });

    it('show display-large when given by props', () => {
      const text = shallow(<Text size="display-large">foo</Text>);
      expect(text.hasClass('kit-text--display-large')).toBe(true);
    });

    it('show display-medium when given by props', () => {
      const text = shallow(<Text size="display-medium">foo</Text>);
      expect(text.hasClass('kit-text--display-medium')).toBe(true);
    });

    it('show display-small when given by props', () => {
      const text = shallow(<Text size="display-small">foo</Text>);
      expect(text.hasClass('kit-text--display-small')).toBe(true);
    });

    it('show heading when given by props', () => {
      const text = shallow(<Text size="heading">foo</Text>);
      expect(text.hasClass('kit-text--heading')).toBe(true);
    });

    it('show sub-heading when given by props', () => {
      const text = shallow(<Text size="sub-heading">foo</Text>);
      expect(text.hasClass('kit-text--sub-heading')).toBe(true);
    });

    it('show body when given by props', () => {
      const text = shallow(<Text size="body">foo</Text>);
      expect(text.hasClass('kit-text--body')).toBe(true);
    });

    it('show heading when given by props', () => {
      const text = shallow(<Text size="caption">foo</Text>);
      expect(text.hasClass('kit-text--caption')).toBe(true);
    });
  });

  describe('bold', () => {
    it('doesnt show bold by default', () => {
      const text = shallow(<Text>foo</Text>);
      expect(text.containsMatchingElement(<b>foo</b>)).toBe(false);
    });

    it('show bold when given by props', () => {
      const text = shallow(<Text bold>foo</Text>);
      expect(text.containsMatchingElement(<b>foo</b>)).toBe(true);
    });
  });

  describe('color', () => {
    it('should be ink by default', () => {
      const text = shallow(<Text />);
      expect(text.find('span').hasClass('kit-text--ink')).toBe(true);
    });

    it('is ink-light when given by props', () => {
      const text = shallow(<Text color="ink-light" />);
      expect(text.find('span').hasClass('kit-text--ink-light')).toBe(true);
    });

    it('is positive when given by props', () => {
      const text = shallow(<Text color="positive" />);
      expect(text.find('span').hasClass('kit-text--positive')).toBe(true);
    });

    it('is negative when given by props', () => {
      const text = shallow(<Text color="negative" />);
      expect(text.find('span').hasClass('kit-text--negative')).toBe(true);
    });

    it('is white when given by props', () => {
      const text = shallow(<Text color="white" />);
      expect(text.find('span').hasClass('kit-text--white')).toBe(true);
    });

    it('is main when given by props', () => {
      const text = shallow(<Text color="main" />);
      expect(text.find('span').hasClass('kit-text--main')).toBe(true);
    });
  });
});
