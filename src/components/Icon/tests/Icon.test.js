import React from 'react';
import Icon from ".."


describe('Icon', () => {
  it('render the i tag', () => {
    const icon = shallow(
      <Icon></Icon>
    );
    expect(icon.find('i').hasClass('fa')).toBe(true);
  });

  describe('name', () => {
    it('show the fa-address-book when given by props', () => {
      const icon = shallow(
        <Icon name="plus"></Icon>
      );
      expect(icon.find('i').hasClass('fa-plus')).toBe(true);
    });

    it('show the exclamation when given by props', () => {
      const icon = shallow(
        <Icon name="exclamation"></Icon>
      );
      expect(icon.find('i').hasClass('fa-exclamation')).toBe(true);
    });

    it('show the arrow-down when given by props', () => {
      const icon = shallow(
        <Icon name="arrow-down"></Icon>
      );
      expect(icon.find('i').hasClass('fa-arrow-down')).toBe(true);
    });

    it('show the arrow-left when given by props', () => {
      const icon = shallow(
        <Icon name="arrow-left"></Icon>
      );
      expect(icon.find('i').hasClass('fa-arrow-left')).toBe(true);
    });

    it('show the arrow-right when given by props', () => {
      const icon = shallow(
        <Icon name="arrow-right"></Icon>
      );
      expect(icon.find('i').hasClass('fa-arrow-right')).toBe(true);
    });

    it('show the arrow-up when given by props', () => {
      const icon = shallow(
        <Icon name="arrow-up"></Icon>
      );
      expect(icon.find('i').hasClass('fa-arrow-up')).toBe(true);
    });

    it('show the sort when given by props', () => {
      const icon = shallow(
        <Icon name="sort"></Icon>
      );
      expect(icon.find('i').hasClass('fa-sort')).toBe(true);
    });

    it('show the calendar when given by props', () => {
      const icon = shallow(
        <Icon name="calendar"></Icon>
      );
      expect(icon.find('i').hasClass('fa-calendar')).toBe(true);
    });

    it('show the times when given by props', () => {
      const icon = shallow(
        <Icon name="times"></Icon>
      );
      expect(icon.find('i').hasClass('fa-times')).toBe(true);
    });

    it('show the caret-down when given by props', () => {
      const icon = shallow(
        <Icon name="times"></Icon>
      );
      expect(icon.find('i').hasClass('fa-caret-down')).toBe(true);
    });

    it('show the caret-up when given by props', () => {
      const icon = shallow(
        <Icon name="times"></Icon>
      );
      expect(icon.find('i').hasClass('fa-caret-up')).toBe(true);
    });

    it('show the check when given by props', () => {
      const icon = shallow(
        <Icon name="times"></Icon>
      );
      expect(icon.find('i').hasClass('fa-check')).toBe(true);
    });
  });
});
