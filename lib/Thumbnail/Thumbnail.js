'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.sizes = undefined;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

require('./Thumbnail.css');

var _Thumbnail = require('./Thumbnail.styles');

var _Thumbnail2 = _interopRequireDefault(_Thumbnail);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var sizes = exports.sizes = {
  'small': _Thumbnail2.default.small,
  'medium': _Thumbnail2.default.medium,
  'large': _Thumbnail2.default.large
};

var propTypes = {
  source: _propTypes2.default.string,
  alt: _propTypes2.default.string.isRequired,
  size: _propTypes2.default.oneOf(Object.keys(sizes))
};

var defaultProps = {
  size: 'medium'
};

function Thumbnail(props) {
  var classThumbnail = (0, _classnames2.default)(props.className, _Thumbnail2.default.thumbnail, sizes[props.size]);

  return _react2.default.createElement(
    'span',
    { className: classThumbnail },
    renderThumbnail(props)
  );
}

function renderThumbnail(props) {
  if (props.source) {
    return _react2.default.createElement('img', { src: props.source, alt: props.alt });
  } else {
    return _react2.default.createElement('div', { className: _Thumbnail2.default.placeholder });
  }
}

Thumbnail.propTypes = propTypes;
Thumbnail.defaultProps = defaultProps;

exports.default = Thumbnail;