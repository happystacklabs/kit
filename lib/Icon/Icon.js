'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.colors = exports.names = undefined;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

require('font-awesome/css/font-awesome.min.css');

require('./Icon.css');

var _Icon = require('./Icon.styles');

var _Icon2 = _interopRequireDefault(_Icon);

var _bind = require('classnames/bind');

var _bind2 = _interopRequireDefault(_bind);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var cx = _bind2.default.bind(_Icon2.default);

var names = exports.names = {
  'plus': 'fa-plus',
  'exclamation': 'fa-exclamation',
  'exclamation-triangle': 'fa-exclamation-triangle',
  'arrow-down': 'fa-arrow-down',
  'arrow-left': 'fa-arrow-left',
  'arrow-right': 'fa-arrow-right',
  'arrow-up': 'fa-arrow-up',
  'sort': 'fa-sort',
  'calendar': 'fa-calendar',
  'times': 'fa-times',
  'caret-down': 'fa-caret-down',
  'caret-up': 'fa-caret-up',
  'check': 'fa-check',
  'chevron-down': 'fa-chevron-down',
  'chevron-left': 'fa-chevron-left',
  'chevron-right': 'fa-chevron-right',
  'chevron-up': 'fa-chevron-up',
  'times-circle': 'fa-times-circle',
  'chevron-circle-down': 'fa-chevron-circle-down',
  'chevron-circle-left': 'fa-chevron-circle-left',
  'chevron-circle-right': 'fa-chevron-circle-right',
  'chevron-circle-up': 'fa-chevron-circle-up',
  'plus-circle': 'fa-plus-circle',
  'commenting': 'fa-commenting',
  'trash': 'fa-trash',
  'ban': 'fa-ban',
  'clone': 'fa-clone',
  'code': 'fa-code',
  'download': 'fa-download',
  'upload': 'fa-upload',
  'external-link': 'fa-external-link',
  'question-circle': 'fa-question-circle',
  'ellipsis-h': 'fa-ellipsis-h',
  'file-text': 'fa-file-text',
  'print': 'fa-print',
  'retweet': 'fa-retweet',
  'search': 'fa-search',
  'minus': 'fa-minus',
  'eye': 'fa-eye',
  'angle-down': 'fa-angle-down'
};

var colors = exports.colors = {
  'ink': _Icon2.default.ink,
  'inkLight': _Icon2.default.inkLight,
  'positive': _Icon2.default.positive,
  'negative': _Icon2.default.negative,
  'purple': _Icon2.default.purple,
  'white': _Icon2.default.white
};

var propTypes = {
  name: _propTypes2.default.oneOf(Object.keys(names)),
  color: _propTypes2.default.oneOf(Object.keys(colors))
};

var defaultProps = {
  color: 'ink'
};

function Icon(props) {
  var classIcon = cx(props.className, 'fa', names[props.name], colors[props.color]);

  return _react2.default.createElement('i', { className: classIcon, 'aria-hidden': 'true' });
}

Icon.propTypes = propTypes;
Icon.defaultProps = defaultProps;

exports.default = Icon;