import React from 'react';
import Button from ".."


describe('Button', () => {
  describe('children', () => {
    it('show the text', () => {
      const button = shallow(
        <Button>Foo</Button>
      ).find('button');
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
      const text = shallow(
        <Button size='regular'>foo</Button>
      );
      expect(text.hasClass('regular')).toBe(true);
    });

    it('show slim when given by props', () => {
      const text = shallow(
        <Button size='slim'>foo</Button>
      );
      expect(text.hasClass('slim')).toBe(true);
    });

    it('show large when given by props', () => {
      const text = shallow(
        <Button size='large'>foo</Button>
      );
      expect(text.hasClass('large')).toBe(true);
    });
  });

  describe('square', () => {
    it('show square when given by props', () => {
      const text = shallow(
        <Button square></Button>
      );
      expect(text.hasClass('square')).toBe(true);
    });
  });

  describe('color', () => {
    it('is positive when given by props', () => {
      const button = shallow(
        <Button color='positive'></Button>
      );
      expect(button.find('button').hasClass('positive')).toBe(true);
    });

    it('is negative when given by props', () => {
      const button = shallow(
        <Button color='negative'></Button>
      );
      expect(button.find('button').hasClass('negative')).toBe(true);
    });

    it('is purple when given by props', () => {
      const button = shallow(
        <Button color='purple'></Button>
      );
      expect(button.find('button').hasClass('purple')).toBe(true);
    });
  });

  describe('fullWidth', () => {
    it('add fullWidth css selector when given by props', () => {
      const button = shallow(
        <Button fullWidth></Button>
      );
      expect(button.find('button').hasClass('fullWidth')).toBe(true);
    });
  });

  describe('plain', () => {
    it('add buttonPlain css selector when given by props', () => {
      const button = shallow(
        <Button plain></Button>
      );
      expect(button.find('button').hasClass('plain')).toBe(true);
    });
  });

  describe('outline', () => {
    it('add buttonOutline css selector when given by props', () => {
      const button = shallow(
        <Button outline></Button>
      );
      expect(button.find('button').hasClass('outline')).toBe(true);
    });
  });
  describe('loading', () => {
    it('render spinner when given by props', () => {
      const button = shallow(
        <Button loading></Button>
      );
      expect(button.find('div').first().hasClass('loading')).toBe(true);
    });

    it('disable the button', () => {
      const button = shallow(
        <Button loading></Button>
      );
      expect(button.find('button').prop('disabled')).toBe(true);
    });
  });
});
