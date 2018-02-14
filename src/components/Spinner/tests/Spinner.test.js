import React from 'react';
import { shallow } from 'enzyme';
import Spinner from '../Spinner';


describe('Spinner', () => {
  it('render a div with class spinner', () => {
    const spinner = shallow(<Spinner />);
    expect(spinner.find('div').hasClass('kit-spinner')).toBe(true);
  });

  describe('size', () => {
    it('show medium by default', () => {
      const spinner = shallow(<Spinner />);
      expect(spinner.find('div').hasClass('kit-spinner--medium')).toBe(true);
    });

    it('show small when given by props', () => {
      const spinner = shallow(<Spinner size="small" />);
      expect(spinner.find('div').hasClass('kit-spinner--small')).toBe(true);
    });

    it('show large when given by props', () => {
      const spinner = shallow(<Spinner size="large" />);
      expect(spinner.find('div').hasClass('kit-spinner--large')).toBe(true);
    });
  });
});
