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

require('./Thumbnail.css');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var sizes = exports.sizes = {
  small: 'kit-thumbnail--small',
  medium: 'kit-thumbnail--medium',
  large: 'kit-thumbnail--large'
};

var propTypes = {
  source: _propTypes2.default.string,
  alt: _propTypes2.default.string.isRequired,
  size: _propTypes2.default.oneOf(Object.keys(sizes)),
  className: _propTypes2.default.string
};

var defaultProps = {
  source: undefined,
  size: 'medium',
  className: undefined
};

function Thumbnail(props) {
  var thumbnailclassName = (0, _classnames2.default)(props.className, 'kit-thumbnail', sizes[props.size]);

  return props.source ? _react2.default.createElement(
    'span',
    { className: thumbnailclassName },
    _react2.default.createElement('img', { className: 'kit-thumbnail__image', src: props.source, alt: props.alt })
  ) : _react2.default.createElement(
    'span',
    { className: thumbnailclassName },
    _react2.default.createElement('div', { className: 'kit-thumbnail__placeholder' })
  );
}

Thumbnail.propTypes = propTypes;
Thumbnail.defaultProps = defaultProps;

exports.default = Thumbnail;