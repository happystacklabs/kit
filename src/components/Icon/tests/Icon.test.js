import React from 'react';
import { shallow } from 'enzyme';
import Icon from '../Icon';


describe('Icon', () => {
  it('render the i tag', () => {
    const icon = shallow(<Icon />);
    expect(icon.find('i').hasClass('fa')).toBe(true);
  });

  describe('name', () => {
    it('show fa-address-book when given by props', () => {
      const icon = shallow(<Icon name="plus" />);
      expect(icon.find('i').hasClass('fa-plus')).toBe(true);
    });

    it('show exclamation when given by props', () => {
      const icon = shallow(<Icon name="exclamation" />);
      expect(icon.find('i').hasClass('fa-exclamation')).toBe(true);
    });

    it('show arrow-down when given by props', () => {
      const icon = shallow(<Icon name="arrow-down" />);
      expect(icon.find('i').hasClass('fa-arrow-down')).toBe(true);
    });

    it('show arrow-left when given by props', () => {
      const icon = shallow(<Icon name="arrow-left" />);
      expect(icon.find('i').hasClass('fa-arrow-left')).toBe(true);
    });

    it('show arrow-right when given by props', () => {
      const icon = shallow(<Icon name="arrow-right" />);
      expect(icon.find('i').hasClass('fa-arrow-right')).toBe(true);
    });

    it('show arrow-up when given by props', () => {
      const icon = shallow(<Icon name="arrow-up" />);
      expect(icon.find('i').hasClass('fa-arrow-up')).toBe(true);
    });

    it('show sort when given by props', () => {
      const icon = shallow(<Icon name="sort" />);
      expect(icon.find('i').hasClass('fa-sort')).toBe(true);
    });

    it('show calendar when given by props', () => {
      const icon = shallow(<Icon name="calendar" />);
      expect(icon.find('i').hasClass('fa-calendar')).toBe(true);
    });

    it('show times when given by props', () => {
      const icon = shallow(<Icon name="times" />);
      expect(icon.find('i').hasClass('fa-times')).toBe(true);
    });

    it('show caret-down when given by props', () => {
      const icon = shallow(<Icon name="caret-down" />);
      expect(icon.find('i').hasClass('fa-caret-down')).toBe(true);
    });

    it('show caret-up when given by props', () => {
      const icon = shallow(<Icon name="caret-up" />);
      expect(icon.find('i').hasClass('fa-caret-up')).toBe(true);
    });

    it('show check when given by props', () => {
      const icon = shallow(<Icon name="check" />);
      expect(icon.find('i').hasClass('fa-check')).toBe(true);
    });

    it('show chevron-down when given by props', () => {
      const icon = shallow(<Icon name="chevron-down" />);
      expect(icon.find('i').hasClass('fa-chevron-down')).toBe(true);
    });

    it('show chevron-left when given by props', () => {
      const icon = shallow(<Icon name="chevron-left" />);
      expect(icon.find('i').hasClass('fa-chevron-left')).toBe(true);
    });

    it('show chevron-right when given by props', () => {
      const icon = shallow(<Icon name="chevron-right" />);
      expect(icon.find('i').hasClass('fa-chevron-right')).toBe(true);
    });

    it('show chevron-up when given by props', () => {
      const icon = shallow(<Icon name="chevron-up" />);
      expect(icon.find('i').hasClass('fa-chevron-up')).toBe(true);
    });

    it('show times-circle when given by props', () => {
      const icon = shallow(<Icon name="times-circle" />);
      expect(icon.find('i').hasClass('fa-times-circle')).toBe(true);
    });

    it('show chevron-circle-down when given by props', () => {
      const icon = shallow(<Icon name="chevron-circle-down" />);
      expect(icon.find('i').hasClass('fa-chevron-circle-down')).toBe(true);
    });

    it('show chevron-circle-left when given by props', () => {
      const icon = shallow(<Icon name="chevron-circle-left" />);
      expect(icon.find('i').hasClass('fa-chevron-circle-left')).toBe(true);
    });

    it('show chevron-circle-right when given by props', () => {
      const icon = shallow(<Icon name="chevron-circle-right" />);
      expect(icon.find('i').hasClass('fa-chevron-circle-right')).toBe(true);
    });

    it('show chevron-circle-up when given by props', () => {
      const icon = shallow(<Icon name="chevron-circle-up" />);
      expect(icon.find('i').hasClass('fa-chevron-circle-up')).toBe(true);
    });

    it('show plus-circle when given by props', () => {
      const icon = shallow(<Icon name="plus-circle" />);
      expect(icon.find('i').hasClass('fa-plus-circle')).toBe(true);
    });

    it('show commenting when given by props', () => {
      const icon = shallow(<Icon name="commenting" />);
      expect(icon.find('i').hasClass('fa-commenting')).toBe(true);
    });

    it('show trash when given by props', () => {
      const icon = shallow(<Icon name="trash" />);
      expect(icon.find('i').hasClass('fa-trash')).toBe(true);
    });

    it('show ban when given by props', () => {
      const icon = shallow(<Icon name="ban" />);
      expect(icon.find('i').hasClass('fa-ban')).toBe(true);
    });

    it('show exclamation-triangle when given by props', () => {
      const icon = shallow(<Icon name="exclamation-triangle" />);
      expect(icon.find('i').hasClass('fa-exclamation-triangle')).toBe(true);
    });

    it('show clone when given by props', () => {
      const icon = shallow(<Icon name="clone" />);
      expect(icon.find('i').hasClass('fa-clone')).toBe(true);
    });

    it('show code when given by props', () => {
      const icon = shallow(<Icon name="code" />);
      expect(icon.find('i').hasClass('fa-code')).toBe(true);
    });

    it('show download when given by props', () => {
      const icon = shallow(<Icon name="download" />);
      expect(icon.find('i').hasClass('fa-download')).toBe(true);
    });

    it('show upload when given by props', () => {
      const icon = shallow(<Icon name="upload" />);
      expect(icon.find('i').hasClass('fa-upload')).toBe(true);
    });

    it('show external-link when given by props', () => {
      const icon = shallow(<Icon name="external-link" />);
      expect(icon.find('i').hasClass('fa-external-link')).toBe(true);
    });

    it('show question-circle when given by props', () => {
      const icon = shallow(<Icon name="question-circle" />);
      expect(icon.find('i').hasClass('fa-question-circle')).toBe(true);
    });

    it('show ellipsis-h when given by props', () => {
      const icon = shallow(<Icon name="ellipsis-h" />);
      expect(icon.find('i').hasClass('fa-ellipsis-h')).toBe(true);
    });

    it('show file-text when given by props', () => {
      const icon = shallow(<Icon name="file-text" />);
      expect(icon.find('i').hasClass('fa-file-text')).toBe(true);
    });

    it('show print when given by props', () => {
      const icon = shallow(<Icon name="print" />);
      expect(icon.find('i').hasClass('fa-print')).toBe(true);
    });

    it('show retweet when given by props', () => {
      const icon = shallow(<Icon name="retweet" />);
      expect(icon.find('i').hasClass('fa-retweet')).toBe(true);
    });

    it('show search when given by props', () => {
      const icon = shallow(<Icon name="search" />);
      expect(icon.find('i').hasClass('fa-search')).toBe(true);
    });

    it('show minus when given by props', () => {
      const icon = shallow(<Icon name="minus" />);
      expect(icon.find('i').hasClass('fa-minus')).toBe(true);
    });

    it('show eye when given by props', () => {
      const icon = shallow(<Icon name="eye" />);
      expect(icon.find('i').hasClass('fa-eye')).toBe(true);
    });

    it('show angle-down when given by props', () => {
      const icon = shallow(<Icon name="angle-down" />);
      expect(icon.find('i').hasClass('fa-angle-down')).toBe(true);
    });
  });

  describe('color', () => {
    it('should be ink by default', () => {
      const icon = shallow(<Icon name="eye" />);
      expect(icon.find('i').hasClass('kit-Icon--ink')).toBe(true);
    });

    it('is inkLight when given by props', () => {
      const icon = shallow(<Icon name="eye" color="inkLight" />);
      expect(icon.find('i').hasClass('kit-Icon--inkLight')).toBe(true);
    });

    it('is positive when given by props', () => {
      const icon = shallow(<Icon name="eye" color="positive" />);
      expect(icon.find('i').hasClass('kit-Icon--positive')).toBe(true);
    });

    it('is negative when given by props', () => {
      const icon = shallow(<Icon name="eye" color="negative" />);
      expect(icon.find('i').hasClass('kit-Icon--negative')).toBe(true);
    });

    it('is purple when given by props', () => {
      const icon = shallow(<Icon name="eye" color="purple" />);
      expect(icon.find('i').hasClass('kit-Icon--purple')).toBe(true);
    });
  });
});
