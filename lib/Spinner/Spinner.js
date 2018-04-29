'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.sizes = exports.colors = undefined;
exports.Spinner = Spinner;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _reactFontawesome = require('@fortawesome/react-fontawesome');

var _reactFontawesome2 = _interopRequireDefault(_reactFontawesome);

var _faSpinner = require('@fortawesome/fontawesome-free-solid/faSpinner');

var _faSpinner2 = _interopRequireDefault(_faSpinner);

require('./Spinner.css');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var colors = exports.colors = ['ink', 'ink-light', 'positive', 'negative', 'main', 'white'];

var sizes = exports.sizes = {
  small: 'kit-spinner--small',
  medium: 'kit-spinner--medium',
  large: 'kit-spinner--large'
};

var propTypes = {
  color: _propTypes2.default.oneOf(colors),
  size: _propTypes2.default.oneOf(Object.keys(sizes)),
  className: _propTypes2.default.string
};

var defaultProps = {
  color: 'ink',
  size: 'medium',
  className: undefined
};

function Spinner(props) {
  var spinnerClassName = (0, _classnames2.default)(props.className, 'kit-spinner', sizes[props.size]);

  return _react2.default.createElement(
    'div',
    { className: spinnerClassName },
    _react2.default.createElement(_reactFontawesome2.default, { icon: _faSpinner2.default, size: 'sm', className: 'kit-spinner--' + props.color, pulse: true })
  );
}

Spinner.propTypes = propTypes;
Spinner.defaultProps = defaultProps;

exports.default = Spinner;