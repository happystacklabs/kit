import React from 'react';
import Spinner from ".."

describe('Spinner', () => {
  it('render a div with class spinner', () => {
    const spinner = shallow(
      <Spinner></Spinner>
    );
    expect(spinner.find('div').hasClass('spinner')).toBe(true);
  });

  describe('type', () => {
    it('show the loader 1 by default', () => {
      const spinner = shallow(
        <Spinner></Spinner>
      );
      expect(spinner.find('div').hasClass('loader1')).toBe(true);
    });

    it('show the loader 2 when given by props', () => {
      const spinner = shallow(
        <Spinner type='loader2'></Spinner>
      );
      expect(spinner.find('div').hasClass('loader2')).toBe(true);
    });
  });

  describe('color', () => {
    it('should be ink by default', () => {
      const spinner = shallow(
        <Spinner></Spinner>
      );
      expect(spinner.find('div').hasClass('ink')).toBe(true);
    });

    it('is inkLight when given by props', () => {
      const spinner = shallow(
        <Spinner color='inkLight'></Spinner>
      );
      expect(spinner.find('div').hasClass('inkLight')).toBe(true);
    });

    it('is positive when given by props', () => {
      const spinner = shallow(
        <Spinner color='positive'></Spinner>
      );
      expect(spinner.find('div').hasClass('positive')).toBe(true);
    });

    it('is negative when given by props', () => {
      const spinner = shallow(
        <Spinner color='negative'></Spinner>
      );
      expect(spinner.find('div').hasClass('negative')).toBe(true);
    });

    it('is purple when given by props', () => {
      const spinner = shallow(
        <Spinner color='purple'></Spinner>
      );
      expect(spinner.find('div').hasClass('purple')).toBe(true);
    });

    it('is white when given by props', () => {
      const spinner = shallow(
        <Spinner color='white'></Spinner>
      );
      expect(spinner.find('div').hasClass('white')).toBe(true);
    });
  });

  describe('size', () => {
    it('show regular by default', () => {
      const spinner = shallow(
        <Spinner></Spinner>
      );
      expect(spinner.find('div').hasClass('regular')).toBe(true);
    });

    it('show small when given by props', () => {
      const spinner = shallow(
        <Spinner size='small'></Spinner>
      );
      expect(spinner.find('div').hasClass('small')).toBe(true);
    });

    it('show large when given by props', () => {
      const spinner = shallow(
        <Spinner size='large'></Spinner>
      );
      expect(spinner.find('div').hasClass('large')).toBe(true);
    });
  });
});
