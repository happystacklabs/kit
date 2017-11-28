import React from 'react';
import Paginator from "..";
import {shallow, mount} from 'enzyme';


describe('Paginator', () => {
  it('render two buttons', () => {
    const paginator = shallow(
      <Paginator/>
    );
    expect(paginator.find('button').at(0).exists()).toBe(true);
    expect(paginator.find('button').at(1).exists()).toBe(true);
  });

  describe('disableNext', () => {
    it('change state of right button to disabled', () => {
      const paginator = mount(
        <Paginator disableNext/>
      );
      expect(paginator.find('button').at(1).prop('disabled')).toBe(true);
    });
  });

  describe('disablePrevious', () => {
    it('change state of left button to disabled', () => {
      const paginator = mount(
        <Paginator disablePrevious/>
      );
      expect(paginator.find('button').at(0).prop('disabled')).toBe(true);
    });
  });

  describe('onNext()', () => {
    it('is called when the next button is clicked', () => {
      const spy = jest.fn();
      mount(<Paginator onNext={spy}/>).find('button').at(1).simulate('click');
      expect(spy).toHaveBeenCalled();
    });
  });

  describe('onPrevious()', () => {
    it('is called when the previous button is clicked', () => {
      const spy = jest.fn();
      mount(<Paginator onPrevious={spy}/>).find('button').at(0).simulate('click');
      expect(spy).toHaveBeenCalled();
    });
  });

  describe('plain', () => {
    it('change the state of buttons to plain', () => {
      const paginator = mount(
        <Paginator plain/>
      );
      expect(paginator.find('button').at(0).hasClass('kit-Button__button--plain')).toBe(true);
    });
  });
});
