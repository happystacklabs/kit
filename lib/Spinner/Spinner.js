'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.types = exports.sizes = exports.colors = exports.names = undefined;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

require('./Spinner.css');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var names = exports.names = ['loader1', 'loader2'];

var colors = exports.colors = {
  ink: 'kit-spinner--ink',
  'ink-light': 'kit-spinner--ink-light',
  positive: 'kit-spinner--positive',
  negative: 'kit-spinner--negative',
  main: 'kit-spinner--main',
  white: 'kit-spinner--white'
};

var sizes = exports.sizes = {
  small: 'kit-spinner--small',
  medium: 'kit-spinner--medium',
  large: 'kit-spinner--large'
};

var types = exports.types = {
  loader1: 'kit-spinner--loader1',
  loader2: 'kit-spinner--loader2'
};

var propTypes = {
  type: _propTypes2.default.oneOf(names),
  color: _propTypes2.default.oneOf(Object.keys(colors)),
  size: _propTypes2.default.oneOf(Object.keys(sizes)),
  className: _propTypes2.default.string
};

var defaultProps = {
  type: 'loader1',
  color: 'ink',
  size: 'medium',
  className: undefined
};

function Spinner(props) {
  var spinnerClassName = (0, _classnames2.default)(props.className, 'kit-spinner', types[props.type], colors[props.color], sizes[props.size]);

  return _react2.default.createElement(
    'div',
    { className: spinnerClassName },
    'Loading...'
  );
}

Spinner.propTypes = propTypes;
Spinner.defaultProps = defaultProps;

exports.default = Spinner;