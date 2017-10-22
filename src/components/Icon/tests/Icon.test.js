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
  });
});
