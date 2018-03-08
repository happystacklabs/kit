import React from 'react';
import { shallow, mount } from 'enzyme';
import Modal from '../Modal';


describe('Modal', () => {
  describe('children', () => {
    it('show in modal', () => {
      const modal = shallow(<Modal>foo</Modal>);
      expect(modal.text()).toContain('foo');
    });
  });

  describe('open', () => {
    it('it hide the modal by default if not passed', () => {
      const modal = shallow(<Modal>foo</Modal>);
      expect(modal.find('.kit-modal--on').length).toBe(0);
    });

    it('display the modal if passed', () => {
      const modal = shallow(<Modal open>foo</Modal>);
      expect(modal.find('.kit-modal--on').length).toBe(1);
    });
  });

  describe('close', () => {
    it('closeModal is called when click on backdrop', () => {
      const spy = jest.fn();
      const modal = shallow(<Modal closeModal={spy} open>foo</Modal>);
      modal.find('.kit-modal__backdrop').at(0).simulate('click');
      expect(spy).toHaveBeenCalled();
    });

    it('closeModal is called when click on close button', () => {
      const spy = jest.fn();
      const modal = mount(<Modal closeModal={spy} open>foo</Modal>);
      modal.find('button').first().simulate('click');
      expect(spy).toHaveBeenCalled();
    });
  });

  describe('size', () => {
    it('change the width of modal panel if passed by props', () => {
      const modal = shallow(<Modal width={400} open>foo</Modal>);
      expect(modal.find('.kit-modal__panel').at(0).prop('style').width).toContain('400px');
    });

    it('change the height of modal panel if passed by props', () => {
      const modal = shallow(<Modal height={500} open>foo</Modal>);
      expect(modal.find('.kit-modal__panel').at(0).prop('style').height).toContain('500px');
    });
  });
});
