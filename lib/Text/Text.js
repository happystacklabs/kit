'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.colors = exports.sizes = exports.elements = undefined;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

require('./Text.css');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var elements = exports.elements = ['span', 'p', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6'];

var sizes = exports.sizes = {
  'display-xlarge': 'kit-text--display-xlarge',
  'display-large': 'kit-text--display-large',
  'display-medium': 'kit-text--display-medium',
  'display-small': 'kit-text--display-small',
  heading: 'kit-text--heading',
  'sub-heading': 'kit-text--sub-heading',
  body: 'kit-text--body',
  caption: 'kit-text--caption'
};

var colors = exports.colors = {
  white: 'kit-text--white',
  ink: 'kit-text--ink',
  'ink-light': 'kit-text--ink-light',
  positive: 'kit-text--positive',
  negative: 'kit-text--negative',
  main: 'kit-text--main'
};

var propTypes = {
  children: _propTypes2.default.node,
  element: _propTypes2.default.oneOf(elements),
  size: _propTypes2.default.oneOf(Object.keys(sizes)),
  color: _propTypes2.default.oneOf(Object.keys(colors)),
  className: _propTypes2.default.string,
  bold: _propTypes2.default.bool
};

var defaultProps = {
  children: undefined,
  element: 'span',
  size: 'body',
  color: 'ink',
  className: undefined,
  bold: false
};

function Text(props) {
  var Element = '' + props.element;

  var classText = (0, _classnames2.default)(props.className, 'kit-text', sizes[props.size], colors[props.color]);

  return props.bold ? _react2.default.createElement(
    Element,
    { className: classText },
    _react2.default.createElement(
      'b',
      null,
      props.children
    )
  ) : _react2.default.createElement(
    Element,
    { className: classText },
    props.children
  );
}

Text.propTypes = propTypes;
Text.defaultProps = defaultProps;

exports.default = Text;