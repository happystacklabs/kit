'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _ = require('..');

var _2 = _interopRequireDefault(_);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe('Icon', function () {
  it('render the i tag', function () {
    var icon = shallow(_react2.default.createElement(_2.default, null));
    expect(icon.find('i').hasClass('fa')).toBe(true);
  });

  describe('name', function () {
    it('show fa-address-book when given by props', function () {
      var icon = shallow(_react2.default.createElement(_2.default, { name: 'plus' }));
      expect(icon.find('i').hasClass('fa-plus')).toBe(true);
    });

    it('show exclamation when given by props', function () {
      var icon = shallow(_react2.default.createElement(_2.default, { name: 'exclamation' }));
      expect(icon.find('i').hasClass('fa-exclamation')).toBe(true);
    });

    it('show arrow-down when given by props', function () {
      var icon = shallow(_react2.default.createElement(_2.default, { name: 'arrow-down' }));
      expect(icon.find('i').hasClass('fa-arrow-down')).toBe(true);
    });

    it('show arrow-left when given by props', function () {
      var icon = shallow(_react2.default.createElement(_2.default, { name: 'arrow-left' }));
      expect(icon.find('i').hasClass('fa-arrow-left')).toBe(true);
    });

    it('show arrow-right when given by props', function () {
      var icon = shallow(_react2.default.createElement(_2.default, { name: 'arrow-right' }));
      expect(icon.find('i').hasClass('fa-arrow-right')).toBe(true);
    });

    it('show arrow-up when given by props', function () {
      var icon = shallow(_react2.default.createElement(_2.default, { name: 'arrow-up' }));
      expect(icon.find('i').hasClass('fa-arrow-up')).toBe(true);
    });

    it('show sort when given by props', function () {
      var icon = shallow(_react2.default.createElement(_2.default, { name: 'sort' }));
      expect(icon.find('i').hasClass('fa-sort')).toBe(true);
    });

    it('show calendar when given by props', function () {
      var icon = shallow(_react2.default.createElement(_2.default, { name: 'calendar' }));
      expect(icon.find('i').hasClass('fa-calendar')).toBe(true);
    });

    it('show times when given by props', function () {
      var icon = shallow(_react2.default.createElement(_2.default, { name: 'times' }));
      expect(icon.find('i').hasClass('fa-times')).toBe(true);
    });

    it('show caret-down when given by props', function () {
      var icon = shallow(_react2.default.createElement(_2.default, { name: 'caret-down' }));
      expect(icon.find('i').hasClass('fa-caret-down')).toBe(true);
    });

    it('show caret-up when given by props', function () {
      var icon = shallow(_react2.default.createElement(_2.default, { name: 'caret-up' }));
      expect(icon.find('i').hasClass('fa-caret-up')).toBe(true);
    });

    it('show check when given by props', function () {
      var icon = shallow(_react2.default.createElement(_2.default, { name: 'check' }));
      expect(icon.find('i').hasClass('fa-check')).toBe(true);
    });

    it('show chevron-down when given by props', function () {
      var icon = shallow(_react2.default.createElement(_2.default, { name: 'chevron-down' }));
      expect(icon.find('i').hasClass('fa-chevron-down')).toBe(true);
    });

    it('show chevron-left when given by props', function () {
      var icon = shallow(_react2.default.createElement(_2.default, { name: 'chevron-left' }));
      expect(icon.find('i').hasClass('fa-chevron-left')).toBe(true);
    });

    it('show chevron-right when given by props', function () {
      var icon = shallow(_react2.default.createElement(_2.default, { name: 'chevron-right' }));
      expect(icon.find('i').hasClass('fa-chevron-right')).toBe(true);
    });

    it('show chevron-up when given by props', function () {
      var icon = shallow(_react2.default.createElement(_2.default, { name: 'chevron-up' }));
      expect(icon.find('i').hasClass('fa-chevron-up')).toBe(true);
    });

    it('show times-circle when given by props', function () {
      var icon = shallow(_react2.default.createElement(_2.default, { name: 'times-circle' }));
      expect(icon.find('i').hasClass('fa-times-circle')).toBe(true);
    });

    it('show chevron-circle-down when given by props', function () {
      var icon = shallow(_react2.default.createElement(_2.default, { name: 'chevron-circle-down' }));
      expect(icon.find('i').hasClass('fa-chevron-circle-down')).toBe(true);
    });

    it('show chevron-circle-left when given by props', function () {
      var icon = shallow(_react2.default.createElement(_2.default, { name: 'chevron-circle-left' }));
      expect(icon.find('i').hasClass('fa-chevron-circle-left')).toBe(true);
    });

    it('show chevron-circle-right when given by props', function () {
      var icon = shallow(_react2.default.createElement(_2.default, { name: 'chevron-circle-right' }));
      expect(icon.find('i').hasClass('fa-chevron-circle-right')).toBe(true);
    });

    it('show chevron-circle-up when given by props', function () {
      var icon = shallow(_react2.default.createElement(_2.default, { name: 'chevron-circle-up' }));
      expect(icon.find('i').hasClass('fa-chevron-circle-up')).toBe(true);
    });

    it('show plus-circle when given by props', function () {
      var icon = shallow(_react2.default.createElement(_2.default, { name: 'plus-circle' }));
      expect(icon.find('i').hasClass('fa-plus-circle')).toBe(true);
    });

    it('show commenting when given by props', function () {
      var icon = shallow(_react2.default.createElement(_2.default, { name: 'commenting' }));
      expect(icon.find('i').hasClass('fa-commenting')).toBe(true);
    });

    it('show trash when given by props', function () {
      var icon = shallow(_react2.default.createElement(_2.default, { name: 'trash' }));
      expect(icon.find('i').hasClass('fa-trash')).toBe(true);
    });

    it('show ban when given by props', function () {
      var icon = shallow(_react2.default.createElement(_2.default, { name: 'ban' }));
      expect(icon.find('i').hasClass('fa-ban')).toBe(true);
    });

    it('show exclamation-triangle when given by props', function () {
      var icon = shallow(_react2.default.createElement(_2.default, { name: 'exclamation-triangle' }));
      expect(icon.find('i').hasClass('fa-exclamation-triangle')).toBe(true);
    });

    it('show clone when given by props', function () {
      var icon = shallow(_react2.default.createElement(_2.default, { name: 'clone' }));
      expect(icon.find('i').hasClass('fa-clone')).toBe(true);
    });

    it('show code when given by props', function () {
      var icon = shallow(_react2.default.createElement(_2.default, { name: 'code' }));
      expect(icon.find('i').hasClass('fa-code')).toBe(true);
    });

    it('show download when given by props', function () {
      var icon = shallow(_react2.default.createElement(_2.default, { name: 'download' }));
      expect(icon.find('i').hasClass('fa-download')).toBe(true);
    });

    it('show upload when given by props', function () {
      var icon = shallow(_react2.default.createElement(_2.default, { name: 'upload' }));
      expect(icon.find('i').hasClass('fa-upload')).toBe(true);
    });

    it('show external-link when given by props', function () {
      var icon = shallow(_react2.default.createElement(_2.default, { name: 'external-link' }));
      expect(icon.find('i').hasClass('fa-external-link')).toBe(true);
    });

    it('show question-circle when given by props', function () {
      var icon = shallow(_react2.default.createElement(_2.default, { name: 'question-circle' }));
      expect(icon.find('i').hasClass('fa-question-circle')).toBe(true);
    });

    it('show ellipsis-h when given by props', function () {
      var icon = shallow(_react2.default.createElement(_2.default, { name: 'ellipsis-h' }));
      expect(icon.find('i').hasClass('fa-ellipsis-h')).toBe(true);
    });

    it('show file-text when given by props', function () {
      var icon = shallow(_react2.default.createElement(_2.default, { name: 'file-text' }));
      expect(icon.find('i').hasClass('fa-file-text')).toBe(true);
    });

    it('show print when given by props', function () {
      var icon = shallow(_react2.default.createElement(_2.default, { name: 'print' }));
      expect(icon.find('i').hasClass('fa-print')).toBe(true);
    });

    it('show retweet when given by props', function () {
      var icon = shallow(_react2.default.createElement(_2.default, { name: 'retweet' }));
      expect(icon.find('i').hasClass('fa-retweet')).toBe(true);
    });

    it('show search when given by props', function () {
      var icon = shallow(_react2.default.createElement(_2.default, { name: 'search' }));
      expect(icon.find('i').hasClass('fa-search')).toBe(true);
    });

    it('show minus when given by props', function () {
      var icon = shallow(_react2.default.createElement(_2.default, { name: 'minus' }));
      expect(icon.find('i').hasClass('fa-minus')).toBe(true);
    });

    it('show eye when given by props', function () {
      var icon = shallow(_react2.default.createElement(_2.default, { name: 'eye' }));
      expect(icon.find('i').hasClass('fa-eye')).toBe(true);
    });

    it('show angle-down when given by props', function () {
      var icon = shallow(_react2.default.createElement(_2.default, { name: 'angle-down' }));
      expect(icon.find('i').hasClass('fa-angle-down')).toBe(true);
    });
  });

  describe('color', function () {
    it('should be ink by default', function () {
      var icon = shallow(_react2.default.createElement(_2.default, { name: 'eye' }));
      expect(icon.find('i').hasClass('ink')).toBe(true);
    });

    it('is inkLight when given by props', function () {
      var icon = shallow(_react2.default.createElement(_2.default, { name: 'eye', color: 'inkLight' }));
      expect(icon.find('i').hasClass('inkLight')).toBe(true);
    });

    it('is positive when given by props', function () {
      var icon = shallow(_react2.default.createElement(_2.default, { name: 'eye', color: 'positive' }));
      expect(icon.find('i').hasClass('positive')).toBe(true);
    });

    it('is negative when given by props', function () {
      var icon = shallow(_react2.default.createElement(_2.default, { name: 'eye', color: 'negative' }));
      expect(icon.find('i').hasClass('negative')).toBe(true);
    });

    it('is purple when given by props', function () {
      var icon = shallow(_react2.default.createElement(_2.default, { name: 'eye', color: 'purple' }));
      expect(icon.find('i').hasClass('purple')).toBe(true);
    });
  });
});