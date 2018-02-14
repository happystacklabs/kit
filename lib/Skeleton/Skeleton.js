'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

require('./Skeleton.css');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function renderSkeleton(display, lines) {
  if (display) {
    return _react2.default.createElement('div', { className: 'kit-skeleton__display' });
  }

  var linesArray = [];
  for (var i = 0; i < lines; i += 1) {
    linesArray.push(_react2.default.createElement('div', { className: 'kit-skeleton__line', key: i }));
  }

  return _react2.default.createElement(
    'span',
    null,
    linesArray
  );
}

var propTypes = {
  lines: _propTypes2.default.number,
  display: _propTypes2.default.bool,
  className: _propTypes2.default.string
};

var defaultProps = {
  lines: 3,
  display: false,
  className: undefined
};

function Skeleton(props) {
  return _react2.default.createElement(
    'div',
    { className: props.className },
    renderSkeleton(props.display, props.lines)
  );
}

Skeleton.propTypes = propTypes;
Skeleton.defaultProps = defaultProps;

exports.default = Skeleton;