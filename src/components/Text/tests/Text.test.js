import React from 'react';
import Text from ".."


describe('Text', () => {
  describe('children', () => {
    it('show in text', () => {
      const text = shallow(
        <Text>foo</Text>
      );
      expect(text.text()).toBe('foo');
    });

    it('can be optional', () => {
      const text = shallow(
        <Text></Text>
      );
      expect(text.text()).toBe('');
    });
  });

  describe('type', () => {
    it('show span by default', () => {
      const text = shallow(
        <Text>foo</Text>
      );
      expect(text.type()).toBe('span');
    });

    it('show p when given by props', () => {
      const text = shallow(
        <Text element="p">foo</Text>
      );
      expect(text.type()).toBe('p');
    });

    it('show h1 when given by props', () => {
      const text = shallow(
        <Text element="h1">foo</Text>
      );
      expect(text.type()).toBe('h1');
    });

    it('show h2 when given by props', () => {
      const text = shallow(
        <Text element="h2">foo</Text>
      );
      expect(text.type()).toBe('h2');
    });

    it('show h3 when given by props', () => {
      const text = shallow(
        <Text element="h3">foo</Text>
      );
      expect(text.type()).toBe('h3');
    });

    it('show h4 when given by props', () => {
      const text = shallow(
        <Text element="h4">foo</Text>
      );
      expect(text.type()).toBe('h4');
    });

    it('show h5 when given by props', () => {
      const text = shallow(
        <Text element="h5">foo</Text>
      );
      expect(text.type()).toBe('h5');
    });

    it('show h6 when given by props', () => {
      const text = shallow(
        <Text element="h6">foo</Text>
      );
      expect(text.type()).toBe('h6');
    });
  });

  describe('size', () => {
    it('show regular by default', () => {
      const text = shallow(
        <Text>foo</Text>
      );
      expect(text.hasClass('kit-Text__text--regular')).toBe(true);
    });

    it('show small when given by props', () => {
      const text = shallow(
        <Text size="small">foo</Text>
      );
      expect(text.hasClass('kit-Text__text--small')).toBe(true);
    });

    it('show medium when given by props', () => {
      const text = shallow(
        <Text size="medium">foo</Text>
      );
      expect(text.hasClass('kit-Text__text--medium')).toBe(true);
    });

    it('show large when given by props', () => {
      const text = shallow(
        <Text size="large">foo</Text>
      );
      expect(text.hasClass('kit-Text__text--large')).toBe(true);
    });

    it('show extra large when given by props', () => {
      const text = shallow(
        <Text size="extraLarge">foo</Text>
      );
      expect(text.hasClass('kit-Text__text--extraLarge')).toBe(true);
    });

    it('show extra small when given by props', () => {
      const text = shallow(
        <Text size="extraSmall">foo</Text>
      );
      expect(text.hasClass('kit-Text__text--extraSmall')).toBe(true);
    });
  });

  describe('weight', () => {
    it('show normal by default', () => {
      const text = shallow(
        <Text>foo</Text>
      );
      expect(text.hasClass('kit-Text__text--normalWeight')).toBe(true);
    });

    it('show bold when given by props', () => {
      const text = shallow(
        <Text weight="bold">foo</Text>
      );
      expect(text.hasClass('kit-Text__text--boldWeight')).toBe(true);
    });
  });

  describe('color', () => {
    it('should be ink by default', () => {
      const text = shallow(
        <Text></Text>
      );
      expect(text.find('span').hasClass('kit-Text__text--ink')).toBe(true);
    });

    it('is inkLight when given by props', () => {
      const text = shallow(
        <Text color='inkLight'></Text>
      );
      expect(text.find('span').hasClass('kit-Text__text--inkLight')).toBe(true);
    });

    it('is positive when given by props', () => {
      const text = shallow(
        <Text color='positive'></Text>
      );
      expect(text.find('span').hasClass('kit-Text__text--positive')).toBe(true);
    });

    it('is negative when given by props', () => {
      const text = shallow(
        <Text color='negative'></Text>
      );
      expect(text.find('span').hasClass('kit-Text__text--negative')).toBe(true);
    });

    it('is white when given by props', () => {
      const text = shallow(
        <Text color='white'></Text>
      );
      expect(text.find('span').hasClass('kit-Text__text--white')).toBe(true);
    });

    it('is purple when given by props', () => {
      const text = shallow(
        <Text color='purple'></Text>
      );
      expect(text.find('span').hasClass('kit-Text__text--purple')).toBe(true);
    });
  });
});
