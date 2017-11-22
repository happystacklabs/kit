"use strict";

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _ = require("..");

var _2 = _interopRequireDefault(_);

var _Button = require("../../Button");

var _Button2 = _interopRequireDefault(_Button);

var _enzyme = require("enzyme");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe('ButtonGroup', function () {
  describe('children', function () {
    it('render all childrens', function () {
      var buttonGroup = (0, _enzyme.mount)(_react2.default.createElement(
        _2.default,
        null,
        _react2.default.createElement(
          _Button2.default,
          null,
          "Foo"
        ),
        _react2.default.createElement(
          _Button2.default,
          null,
          "Bar"
        )
      ));
      expect(buttonGroup.find('button').first().text()).toBe('Foo');
      expect(buttonGroup.find('button').at(1).text()).toBe('Bar');
    });
  });

  describe('segmented', function () {
    it('add the segmented class when given by props', function () {
      var buttonGroup = (0, _enzyme.mount)(_react2.default.createElement(_2.default, { segmented: true }));
      expect(buttonGroup.find('div').hasClass('segmented')).toBe(true);
    });
  });
});