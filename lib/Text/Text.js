'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.colors = exports.weights = exports.sizes = exports.elements = undefined;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

require('./Text.css');

var _Text = require('./Text.styles');

var _Text2 = _interopRequireDefault(_Text);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var elements = exports.elements = ['span', 'p', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6'];

var sizes = exports.sizes = {
  'extraSmall': _Text2.default.extraSmall,
  'small': _Text2.default.small,
  'regular': _Text2.default.regular,
  'medium': _Text2.default.medium,
  'large': _Text2.default.large,
  'extraLarge': _Text2.default.extraLarge
};

var weights = exports.weights = {
  'normal': _Text2.default.normalWeight,
  'bold': _Text2.default.boldWeight
};

var colors = exports.colors = {
  'white': _Text2.default.white,
  'ink': _Text2.default.ink,
  'inkLight': _Text2.default.inkLight,
  'positive': _Text2.default.positive,
  'negative': _Text2.default.negative,
  'purple': _Text2.default.purple
};

var propTypes = {
  children: _propTypes2.default.node,
  element: _propTypes2.default.oneOf(elements),
  size: _propTypes2.default.oneOf(Object.keys(sizes)),
  weight: _propTypes2.default.oneOf(Object.keys(weights)),
  color: _propTypes2.default.oneOf(Object.keys(colors))
};

var defaultProps = {
  element: 'span',
  size: 'regular',
  weight: 'normal',
  color: 'ink'
};

function Text(props) {
  var Element = '' + props.element;

  var classText = (0, _classnames2.default)(props.className, _Text2.default.text, sizes[props.size], weights[props.weight], colors[props.color]);

  return _react2.default.createElement(
    Element,
    { className: classText },
    props.children
  );
}

Text.propTypes = propTypes;
Text.defaultProps = defaultProps;

exports.default = Text;