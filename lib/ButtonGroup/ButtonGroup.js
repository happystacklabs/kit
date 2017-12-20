'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

require('./ButtonGroup.css');

var _ButtonGroup = require('./ButtonGroup.styles');

var _ButtonGroup2 = _interopRequireDefault(_ButtonGroup);

var _bind = require('classnames/bind');

var _bind2 = _interopRequireDefault(_bind);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var cx = _bind2.default.bind(_ButtonGroup2.default);

var propTypes = {
  children: _propTypes2.default.node,
  segmented: _propTypes2.default.bool
};

function ButtonGroup(props) {
  var classButtonGroup = cx({
    segmented: props.segmented }, props.className, _ButtonGroup2.default.buttonGroup);

  return _react2.default.createElement(
    'div',
    { className: classButtonGroup },
    props.children
  );
}

ButtonGroup.propTypes = propTypes;

exports.default = ButtonGroup;