import React from 'react';
import { shallow } from 'enzyme';
import Spinner from '../Spinner';


describe('Spinner', () => {
  it('render a div with class spinner', () => {
    const spinner = shallow(<Spinner />);
    expect(spinner.find('div').hasClass('kit-Spinner__spinner')).toBe(true);
  });

  describe('type', () => {
    it('show the loader 1 by default', () => {
      const spinner = shallow(<Spinner />);
      expect(spinner.find('div').hasClass('kit-Spinner__spinner--loader1')).toBe(true);
    });

    it('show the loader 2 when given by props', () => {
      const spinner = shallow(<Spinner type="loader2" />);
      expect(spinner.find('div').hasClass('kit-Spinner__spinner--loader2')).toBe(true);
    });
  });

  describe('color', () => {
    it('should be ink by default', () => {
      const spinner = shallow(<Spinner />);
      expect(spinner.find('div').hasClass('kit-Spinner__spinner--ink')).toBe(true);
    });

    it('is inkLight when given by props', () => {
      const spinner = shallow(<Spinner color="inkLight" />);
      expect(spinner.find('div').hasClass('kit-Spinner__spinner--inkLight')).toBe(true);
    });

    it('is positive when given by props', () => {
      const spinner = shallow(<Spinner color="positive" />);
      expect(spinner.find('div').hasClass('kit-Spinner__spinner--positive')).toBe(true);
    });

    it('is negative when given by props', () => {
      const spinner = shallow(<Spinner color="negative" />);
      expect(spinner.find('div').hasClass('kit-Spinner__spinner--negative')).toBe(true);
    });

    it('is purple when given by props', () => {
      const spinner = shallow(<Spinner color="purple" />);
      expect(spinner.find('div').hasClass('kit-Spinner__spinner--purple')).toBe(true);
    });

    it('is white when given by props', () => {
      const spinner = shallow(<Spinner color="white" />);
      expect(spinner.find('div').hasClass('kit-Spinner__spinner--white')).toBe(true);
    });
  });

  describe('size', () => {
    it('show medium by default', () => {
      const spinner = shallow(<Spinner />);
      expect(spinner.find('div').hasClass('kit-Spinner__spinner--medium')).toBe(true);
    });

    it('show small when given by props', () => {
      const spinner = shallow(<Spinner size="small" />);
      expect(spinner.find('div').hasClass('kit-Spinner__spinner--small')).toBe(true);
    });

    it('show large when given by props', () => {
      const spinner = shallow(<Spinner size="large" />);
      expect(spinner.find('div').hasClass('kit-Spinner__spinner--large')).toBe(true);
    });
  });
});
