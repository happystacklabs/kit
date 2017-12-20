'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.types = exports.sizes = exports.colors = exports.names = undefined;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

require('./Spinner.css');

var _Spinner = require('./Spinner.styles');

var _Spinner2 = _interopRequireDefault(_Spinner);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var names = exports.names = ['loader1', 'loader2'];

var colors = exports.colors = {
  'ink': _Spinner2.default.ink,
  'inkLight': _Spinner2.default.inkLight,
  'positive': _Spinner2.default.positive,
  'negative': _Spinner2.default.negative,
  'purple': _Spinner2.default.purple,
  'white': _Spinner2.default.white
};

var sizes = exports.sizes = {
  'small': _Spinner2.default.small,
  'medium': _Spinner2.default.medium,
  'large': _Spinner2.default.large
};

var types = exports.types = {
  'loader1': _Spinner2.default.loader1,
  'loader2': _Spinner2.default.loader2
};

var propTypes = {
  type: _propTypes2.default.oneOf(names),
  color: _propTypes2.default.oneOf(Object.keys(colors)),
  size: _propTypes2.default.oneOf(Object.keys(sizes))
};

var defaultProps = {
  type: 'loader1',
  color: 'ink',
  size: 'medium'
};

function Spinner(props) {
  var classSpinner = (0, _classnames2.default)(props.className, _Spinner2.default.spinner, types[props.type], colors[props.color], sizes[props.size]);

  return _react2.default.createElement(
    'div',
    { className: classSpinner },
    'Loading...'
  );
}

Spinner.propTypes = propTypes;
Spinner.defaultProps = defaultProps;

exports.default = Spinner;