'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _enzyme = require('enzyme');

var _ = require('..');

var _2 = _interopRequireDefault(_);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe('Tooltip', function () {
  describe('children', function () {
    it('show the children', function () {
      var tooltip = (0, _enzyme.shallow)(_react2.default.createElement(
        _2.default,
        null,
        'Foo'
      ));
      expect(tooltip.find('span').first().text()).toBe('Foo');
    });
  });

  describe('content', function () {
    it('set the content of the tooltip when given by props', function () {
      var tooltip = (0, _enzyme.mount)(_react2.default.createElement(_2.default, { content: 'Foo' }));
      expect(tooltip.find('.tooltipBox').first().text()).toBe('Foo');
    });
  });

  describe('active', function () {
    it('add the active style', function () {
      var tooltip = (0, _enzyme.mount)(_react2.default.createElement(_2.default, { active: true }));
      expect(tooltip.find('div').first().hasClass('active')).toBe(true);
    });
  });

  describe('onMouseEnter()', function () {
    it('add the active style class', function () {
      var tooltip = (0, _enzyme.mount)(_react2.default.createElement(
        _2.default,
        null,
        'Foo'
      ));
      tooltip.find('span').first().simulate('mouseEnter');
      expect(tooltip.find('div').first().hasClass('active')).toBe(true);
    });
  });

  describe('onMouseLeave()', function () {
    it('add the active style class', function () {
      var tooltip = (0, _enzyme.mount)(_react2.default.createElement(
        _2.default,
        null,
        'Foo'
      ));
      tooltip.find('span').first().simulate('mouseEnter');
      expect(tooltip.find('div').first().hasClass('active')).toBe(true);
      tooltip.find('span').first().simulate('mouseLeave');
      expect(tooltip.find('div').first().hasClass('active')).toBe(false);
    });
  });

  describe('position', function () {
    it('add the bottom position style by default', function () {
      var tooltip = (0, _enzyme.shallow)(_react2.default.createElement(_2.default, null));
      expect(tooltip.find('div').first().hasClass('bottom')).toBe(true);
    });

    it('add the top position style when given by props', function () {
      var tooltip = (0, _enzyme.shallow)(_react2.default.createElement(_2.default, { position: 'top' }));
      expect(tooltip.find('div').first().hasClass('top')).toBe(true);
    });

    it('add the left position style when given by props', function () {
      var tooltip = (0, _enzyme.shallow)(_react2.default.createElement(_2.default, { position: 'left' }));
      expect(tooltip.find('div').first().hasClass('left')).toBe(true);
    });

    it('add the right position style when given by props', function () {
      var tooltip = (0, _enzyme.shallow)(_react2.default.createElement(_2.default, { position: 'right' }));
      expect(tooltip.find('div').first().hasClass('right')).toBe(true);
    });
  });

  describe('light', function () {
    it('show the light class when given by props', function () {
      var tooltip = (0, _enzyme.shallow)(_react2.default.createElement(_2.default, { light: true }));
      expect(tooltip.find('div').first().hasClass('light')).toBe(true);
    });
  });
});