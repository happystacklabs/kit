'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

require('./Skeleton.css');

var _Skeleton = require('./Skeleton.styles');

var _Skeleton2 = _interopRequireDefault(_Skeleton);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var propTypes = {
  lines: _propTypes2.default.number,
  display: _propTypes2.default.bool
};

var defaultProps = {
  lines: 3
};

function Skeleton(props) {
  return _react2.default.createElement(
    'div',
    { className: props.className },
    renderSkeleton(props)
  );
}

function renderSkeleton(props) {
  if (props.display) {
    return _react2.default.createElement('div', { className: _Skeleton2.default.display });
  } else {
    var lines = [];
    for (var i = 0; i < props.lines; i++) {
      lines.push(_react2.default.createElement('div', { className: _Skeleton2.default.line, key: i }));
    }
    return _react2.default.createElement(
      'span',
      null,
      lines
    );
  }
};

Skeleton.propTypes = propTypes;
Skeleton.defaultProps = defaultProps;

exports.default = Skeleton;