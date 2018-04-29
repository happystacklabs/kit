'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ButtonGroup = ButtonGroup;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

require('./ButtonGroup.css');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var propTypes = {
  children: _propTypes2.default.node,
  segmented: _propTypes2.default.bool,
  className: _propTypes2.default.string
};

var defaultProps = {
  children: undefined,
  segmented: false,
  className: undefined
};

function ButtonGroup(props) {
  var buttonGroupClassName = (0, _classnames2.default)({ 'kit-button-group--segmented': props.segmented }, 'kit-button-group', props.className);

  return _react2.default.createElement(
    'div',
    { className: buttonGroupClassName },
    props.children
  );
}

ButtonGroup.propTypes = propTypes;
ButtonGroup.defaultProps = defaultProps;

exports.default = ButtonGroup;