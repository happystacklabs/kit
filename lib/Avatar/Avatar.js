'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.sizes = undefined;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

require('./Avatar.css');

var _Text = require('../Text/Text');

var _Text2 = _interopRequireDefault(_Text);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var sizes = exports.sizes = {
  small: 'kit-avatar--small',
  medium: 'kit-avatar--medium',
  large: 'kit-avatar--large'
};

function renderAvatar(initial, size, source) {
  if (initial) {
    var initialValue = initial.toUpperCase().substring(0, 2);
    if (source) {
      return _react2.default.createElement('img', { className: 'kit-avatar__image', alt: source, src: source });
    }
    return _react2.default.createElement(
      'div',
      { className: 'kit-avatar__placeholder' },
      _react2.default.createElement(
        _Text2.default,
        { bold: true },
        initialValue
      )
    );
  }
  return source ? _react2.default.createElement('img', { className: 'kit-avatar__image', alt: source, src: source }) : _react2.default.createElement('div', { className: 'kit-avatar__placeholder' });
}

var propTypes = {
  source: _propTypes2.default.string,
  initial: _propTypes2.default.string,
  size: _propTypes2.default.oneOf(Object.keys(sizes)),
  className: _propTypes2.default.string
};

var defaultProps = {
  source: undefined,
  initial: undefined,
  size: 'medium',
  className: undefined
};

function Avatar(props) {
  var avatarClassName = (0, _classnames2.default)(props.className, 'kit-avatar', sizes[props.size]);

  return _react2.default.createElement(
    'span',
    { className: avatarClassName },
    renderAvatar(props.initial, props.size, props.source)
  );
}

Avatar.propTypes = propTypes;
Avatar.defaultProps = defaultProps;

exports.default = Avatar;