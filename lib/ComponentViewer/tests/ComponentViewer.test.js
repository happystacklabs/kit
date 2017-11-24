'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _enzyme = require('enzyme');

var _ComponentViewer = require('../ComponentViewer');

var _ComponentViewer2 = _interopRequireDefault(_ComponentViewer);

var _Button = require('../../Button');

var _Button2 = _interopRequireDefault(_Button);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe('ComponentViewerRow', function () {});

describe('ComponentViewerList', function () {});

describe('ComponentViewerCode', function () {});

describe('ComponentViewer', function () {
  describe('example', function () {
    it('show the component passed by children', function () {
      var options = [{ name: 'size', value: 'large' }];
      var viewer = (0, _enzyme.shallow)(_react2.default.createElement(
        _ComponentViewer2.default,
        { options: options, name: 'Button' },
        _react2.default.createElement(
          _Button2.default,
          null,
          'bar'
        )
      ));
      expect(viewer.find('Button').first().prop('children')).toBe('bar');
    });
  });
});