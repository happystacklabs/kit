'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.sizes = exports.colors = undefined;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

require('./Switch.css');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var colors = exports.colors = {
  positive: 'kit-switch--positive',
  negative: 'kit-switch--negative',
  main: 'kit-switch--main'
};

var sizes = exports.sizes = {
  small: 'kit-switch--small',
  medium: 'kit-switch--medium',
  large: 'kit-switch--large'
};

var propTypes = {
  on: _propTypes2.default.bool,
  round: _propTypes2.default.bool,
  color: _propTypes2.default.oneOf(Object.keys(colors)),
  size: _propTypes2.default.oneOf(Object.keys(sizes)),
  onClick: _propTypes2.default.func,
  name: _propTypes2.default.string,
  className: _propTypes2.default.string
};

var defaultProps = {
  on: false,
  round: false,
  color: 'main',
  size: 'medium',
  onClick: undefined,
  name: undefined,
  className: undefined
};

function Switch(props) {
  function handleClick() {
    if (props.onClick === null) {
      return;
    }
    props.onClick({ value: !props.on, name: props.name });
  }

  var switchClassName = (0, _classnames2.default)({
    'kit-switch--on': props.on,
    'kit-switch--round': props.round
  }, props.className, 'kit-switch', sizes[props.size], colors[props.color]);

  var toggleClassName = (0, _classnames2.default)({
    'kit-switch__toggle--on': props.on
  }, 'kit-switch__toggle');

  return _react2.default.createElement(
    'div',
    { // eslint-disable-line no-static-element-interactions
      role: 'switch',
      tabIndex: '0',
      className: switchClassName,
      onClick: handleClick,
      onKeyPress: handleClick,
      'aria-checked': props.on
    },
    _react2.default.createElement('div', { className: toggleClassName })
  );
}

Switch.propTypes = propTypes;
Switch.defaultProps = defaultProps;

exports.default = Switch;