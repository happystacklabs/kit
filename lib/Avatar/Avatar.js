'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.sizes = undefined;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

require('./Avatar.css');

var _Avatar = require('./Avatar.styles');

var _Avatar2 = _interopRequireDefault(_Avatar);

var _Text = require('../Text');

var _Text2 = _interopRequireDefault(_Text);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var sizes = exports.sizes = {
  'small': _Avatar2.default.small,
  'medium': _Avatar2.default.medium,
  'large': _Avatar2.default.large
};

var propTypes = {
  source: _propTypes2.default.string,
  initial: _propTypes2.default.string,
  size: _propTypes2.default.oneOf(Object.keys(sizes))
};

var defaultProps = {
  size: 'medium'
};

function Avatar(props) {
  var classAvatar = (0, _classnames2.default)(props.className, _Avatar2.default.avatar, sizes[props.size]);

  return _react2.default.createElement(
    'span',
    { className: classAvatar },
    renderAvatar(props)
  );
}

function renderAvatar(props) {
  if (props.initial) {
    var initial = props.initial.toUpperCase().substring(0, 2);
    return _react2.default.createElement(
      'div',
      { className: (0, _classnames2.default)(_Avatar2.default.placeholder, sizes[props.size]) },
      _react2.default.createElement(
        _Text2.default,
        { weight: 'bold' },
        initial
      )
    );
  }

  if (props.source) {
    return _react2.default.createElement('img', { className: sizes[props.size], alt: props.source, src: props.source });
  } else {
    return _react2.default.createElement('div', { className: (0, _classnames2.default)(_Avatar2.default.placeholder, sizes[props.size]) });
  }
}

Avatar.propTypes = propTypes;
Avatar.defaultProps = defaultProps;

exports.default = Avatar;