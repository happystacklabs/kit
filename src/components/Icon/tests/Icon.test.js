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
    it('show fa-address-book when given by props', () => {
      const icon = shallow(
        <Icon name="plus"></Icon>
      );
      expect(icon.find('i').hasClass('fa-plus')).toBe(true);
    });

    it('show exclamation when given by props', () => {
      const icon = shallow(
        <Icon name="exclamation"></Icon>
      );
      expect(icon.find('i').hasClass('fa-exclamation')).toBe(true);
    });

    it('show arrow-down when given by props', () => {
      const icon = shallow(
        <Icon name="arrow-down"></Icon>
      );
      expect(icon.find('i').hasClass('fa-arrow-down')).toBe(true);
    });

    it('show arrow-left when given by props', () => {
      const icon = shallow(
        <Icon name="arrow-left"></Icon>
      );
      expect(icon.find('i').hasClass('fa-arrow-left')).toBe(true);
    });

    it('show arrow-right when given by props', () => {
      const icon = shallow(
        <Icon name="arrow-right"></Icon>
      );
      expect(icon.find('i').hasClass('fa-arrow-right')).toBe(true);
    });

    it('show arrow-up when given by props', () => {
      const icon = shallow(
        <Icon name="arrow-up"></Icon>
      );
      expect(icon.find('i').hasClass('fa-arrow-up')).toBe(true);
    });

    it('show sort when given by props', () => {
      const icon = shallow(
        <Icon name="sort"></Icon>
      );
      expect(icon.find('i').hasClass('fa-sort')).toBe(true);
    });

    it('show calendar when given by props', () => {
      const icon = shallow(
        <Icon name="calendar"></Icon>
      );
      expect(icon.find('i').hasClass('fa-calendar')).toBe(true);
    });

    it('show times when given by props', () => {
      const icon = shallow(
        <Icon name="times"></Icon>
      );
      expect(icon.find('i').hasClass('fa-times')).toBe(true);
    });

    it('show caret-down when given by props', () => {
      const icon = shallow(
        <Icon name="caret-down"></Icon>
      );
      expect(icon.find('i').hasClass('fa-caret-down')).toBe(true);
    });

    it('show caret-up when given by props', () => {
      const icon = shallow(
        <Icon name="caret-up"></Icon>
      );
      expect(icon.find('i').hasClass('fa-caret-up')).toBe(true);
    });

    it('show check when given by props', () => {
      const icon = shallow(
        <Icon name="check"></Icon>
      );
      expect(icon.find('i').hasClass('fa-check')).toBe(true);
    });

    it('show chevron-down when given by props', () => {
      const icon = shallow(
        <Icon name="chevron-down"></Icon>
      );
      expect(icon.find('i').hasClass('fa-chevron-down')).toBe(true);
    });

    it('show chevron-left when given by props', () => {
      const icon = shallow(
        <Icon name="chevron-left"></Icon>
      );
      expect(icon.find('i').hasClass('fa-chevron-left')).toBe(true);
    });

    it('show chevron-right when given by props', () => {
      const icon = shallow(
        <Icon name="chevron-right"></Icon>
      );
      expect(icon.find('i').hasClass('fa-chevron-right')).toBe(true);
    });

    it('show chevron-up when given by props', () => {
      const icon = shallow(
        <Icon name="chevron-up"></Icon>
      );
      expect(icon.find('i').hasClass('fa-chevron-up')).toBe(true);
    });

    it('show times-circle when given by props', () => {
      const icon = shallow(
        <Icon name="times-circle"></Icon>
      );
      expect(icon.find('i').hasClass('fa-times-circle')).toBe(true);
    });

    it('show chevron-circle-down when given by props', () => {
      const icon = shallow(
        <Icon name="chevron-circle-down"></Icon>
      );
      expect(icon.find('i').hasClass('fa-chevron-circle-down')).toBe(true);
    });

    it('show chevron-circle-left when given by props', () => {
      const icon = shallow(
        <Icon name="chevron-circle-left"></Icon>
      );
      expect(icon.find('i').hasClass('fa-chevron-circle-left')).toBe(true);
    });

    it('show chevron-circle-right when given by props', () => {
      const icon = shallow(
        <Icon name="chevron-circle-right"></Icon>
      );
      expect(icon.find('i').hasClass('fa-chevron-circle-right')).toBe(true);
    });

    it('show chevron-circle-up when given by props', () => {
      const icon = shallow(
        <Icon name="chevron-circle-up"></Icon>
      );
      expect(icon.find('i').hasClass('fa-chevron-circle-up')).toBe(true);
    });

    it('show plus-circle when given by props', () => {
      const icon = shallow(
        <Icon name="plus-circle"></Icon>
      );
      expect(icon.find('i').hasClass('fa-plus-circle')).toBe(true);
    });

    it('show commenting when given by props', () => {
      const icon = shallow(
        <Icon name="commenting"></Icon>
      );
      expect(icon.find('i').hasClass('fa-commenting')).toBe(true);
    });

    it('show trash when given by props', () => {
      const icon = shallow(
        <Icon name="trash"></Icon>
      );
      expect(icon.find('i').hasClass('fa-trash')).toBe(true);
    });

    it('show ban when given by props', () => {
      const icon = shallow(
        <Icon name="ban"></Icon>
      );
      expect(icon.find('i').hasClass('fa-ban')).toBe(true);
    });

    it('show exclamation-triangle when given by props', () => {
      const icon = shallow(
        <Icon name="exclamation-triangle"></Icon>
      );
      expect(icon.find('i').hasClass('fa-exclamation-triangle')).toBe(true);
    });

    it('show clone when given by props', () => {
      const icon = shallow(
        <Icon name="clone"></Icon>
      );
      expect(icon.find('i').hasClass('fa-clone')).toBe(true);
    });

    it('show code when given by props', () => {
      const icon = shallow(
        <Icon name="code"></Icon>
      );
      expect(icon.find('i').hasClass('fa-code')).toBe(true);
    });

    it('show download when given by props', () => {
      const icon = shallow(
        <Icon name="download"></Icon>
      );
      expect(icon.find('i').hasClass('fa-download')).toBe(true);
    });

    it('show upload when given by props', () => {
      const icon = shallow(
        <Icon name="upload"></Icon>
      );
      expect(icon.find('i').hasClass('fa-upload')).toBe(true);
    });

    it('show external-link when given by props', () => {
      const icon = shallow(
        <Icon name="external-link"></Icon>
      );
      expect(icon.find('i').hasClass('fa-external-link')).toBe(true);
    });

    it('show question-circle when given by props', () => {
      const icon = shallow(
        <Icon name="question-circle"></Icon>
      );
      expect(icon.find('i').hasClass('fa-question-circle')).toBe(true);
    });

    it('show ellipsis-h when given by props', () => {
      const icon = shallow(
        <Icon name="ellipsis-h"></Icon>
      );
      expect(icon.find('i').hasClass('fa-ellipsis-h')).toBe(true);
    });

    it('show file-text when given by props', () => {
      const icon = shallow(
        <Icon name="file-text"></Icon>
      );
      expect(icon.find('i').hasClass('fa-file-text')).toBe(true);
    });

    it('show print when given by props', () => {
      const icon = shallow(
        <Icon name="print"></Icon>
      );
      expect(icon.find('i').hasClass('fa-print')).toBe(true);
    });

    it('show retweet when given by props', () => {
      const icon = shallow(
        <Icon name="retweet"></Icon>
      );
      expect(icon.find('i').hasClass('fa-retweet')).toBe(true);
    });

    it('show search when given by props', () => {
      const icon = shallow(
        <Icon name="search"></Icon>
      );
      expect(icon.find('i').hasClass('fa-search')).toBe(true);
    });

    it('show minus when given by props', () => {
      const icon = shallow(
        <Icon name="minus"></Icon>
      );
      expect(icon.find('i').hasClass('fa-minus')).toBe(true);
    });

    it('show eye when given by props', () => {
      const icon = shallow(
        <Icon name="eye"></Icon>
      );
      expect(icon.find('i').hasClass('fa-eye')).toBe(true);
    });

    it('show angle-down when given by props', () => {
      const icon = shallow(
        <Icon name="angle-down"></Icon>
      );
      expect(icon.find('i').hasClass('fa-angle-down')).toBe(true);
    });
  });

  describe('color', () => {
    it('should be ink by default', () => {
      const icon = shallow(
        <Icon name="eye"></Icon>
      );
      expect(icon.find('i').hasClass('kit-Icon--ink')).toBe(true);
    });

    it('is inkLight when given by props', () => {
      const icon = shallow(
        <Icon name="eye" color="inkLight"></Icon>
      );
      expect(icon.find('i').hasClass('kit-Icon--inkLight')).toBe(true);
    });

    it('is positive when given by props', () => {
      const icon = shallow(
        <Icon name="eye" color="positive"></Icon>
      );
      expect(icon.find('i').hasClass('kit-Icon--positive')).toBe(true);
    });

    it('is negative when given by props', () => {
      const icon = shallow(
        <Icon name="eye" color="negative"></Icon>
      );
      expect(icon.find('i').hasClass('kit-Icon--negative')).toBe(true);
    });

    it('is purple when given by props', () => {
      const icon = shallow(
        <Icon name="eye" color="purple"></Icon>
      );
      expect(icon.find('i').hasClass('kit-Icon--purple')).toBe(true);
    });
  });
});
