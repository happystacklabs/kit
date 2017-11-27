'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.colors = exports.names = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _fontAwesomeMin = require('font-awesome/css/font-awesome.min.css');

var _fontAwesomeMin2 = _interopRequireDefault(_fontAwesomeMin);

var _Icon = require('./Icon.css');

var _Icon2 = _interopRequireDefault(_Icon);

var _bind = require('classnames/bind');

var _bind2 = _interopRequireDefault(_bind);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var cx = _bind2.default.bind(_Icon2.default);

var names = exports.names = {
  'plus': _fontAwesomeMin2.default['fa-plus'],
  'exclamation': _fontAwesomeMin2.default['fa-exclamation'],
  'exclamation-triangle': _fontAwesomeMin2.default['fa-exclamation-triangle'],
  'arrow-down': _fontAwesomeMin2.default['fa-arrow-down'],
  'arrow-left': _fontAwesomeMin2.default['fa-arrow-left'],
  'arrow-right': _fontAwesomeMin2.default['fa-arrow-right'],
  'arrow-up': _fontAwesomeMin2.default['fa-arrow-up'],
  'sort': _fontAwesomeMin2.default['fa-sort'],
  'calendar': _fontAwesomeMin2.default['fa-calendar'],
  'times': _fontAwesomeMin2.default['fa-times'],
  'caret-down': _fontAwesomeMin2.default['fa-caret-down'],
  'caret-up': _fontAwesomeMin2.default['fa-caret-up'],
  'check': _fontAwesomeMin2.default['fa-check'],
  'chevron-down': _fontAwesomeMin2.default['fa-chevron-down'],
  'chevron-left': _fontAwesomeMin2.default['fa-chevron-left'],
  'chevron-right': _fontAwesomeMin2.default['fa-chevron-right'],
  'chevron-up': _fontAwesomeMin2.default['fa-chevron-up'],
  'times-circle': _fontAwesomeMin2.default['fa-times-circle'],
  'chevron-circle-down': _fontAwesomeMin2.default['fa-chevron-circle-down'],
  'chevron-circle-left': _fontAwesomeMin2.default['fa-chevron-circle-left'],
  'chevron-circle-right': _fontAwesomeMin2.default['fa-chevron-circle-right'],
  'chevron-circle-up': _fontAwesomeMin2.default['fa-chevron-circle-up'],
  'plus-circle': _fontAwesomeMin2.default['fa-plus-circle'],
  'commenting': _fontAwesomeMin2.default['fa-commenting'],
  'trash': _fontAwesomeMin2.default['fa-trash'],
  'ban': _fontAwesomeMin2.default['fa-ban'],
  'clone': _fontAwesomeMin2.default['fa-clone'],
  'code': _fontAwesomeMin2.default['fa-code'],
  'download': _fontAwesomeMin2.default['fa-download'],
  'upload': _fontAwesomeMin2.default['fa-upload'],
  'external-link': _fontAwesomeMin2.default['fa-external-link'],
  'question-circle': _fontAwesomeMin2.default['fa-question-circle'],
  'ellipsis-h': _fontAwesomeMin2.default['fa-ellipsis-h'],
  'file-text': _fontAwesomeMin2.default['fa-file-text'],
  'print': _fontAwesomeMin2.default['fa-print'],
  'retweet': _fontAwesomeMin2.default['fa-retweet'],
  'search': _fontAwesomeMin2.default['fa-search'],
  'minus': _fontAwesomeMin2.default['fa-minus'],
  'eye': _fontAwesomeMin2.default['fa-eye'],
  'angle-down': _fontAwesomeMin2.default['fa-angle-down']
};

var colors = exports.colors = {
  'ink': _Icon2.default.ink,
  'inkLight': _Icon2.default.inkLight,
  'positive': _Icon2.default.positive,
  'negative': _Icon2.default.negative,
  'purple': _Icon2.default.purple,
  'white': _Icon2.default.white
};

var Icon = function (_Component) {
  _inherits(Icon, _Component);

  function Icon() {
    _classCallCheck(this, Icon);

    return _possibleConstructorReturn(this, (Icon.__proto__ || Object.getPrototypeOf(Icon)).apply(this, arguments));
  }

  _createClass(Icon, [{
    key: 'render',
    value: function render() {
      var classes = cx(this.props.className, _fontAwesomeMin2.default.fa, names[this.props.name], colors[this.props.color]);

      return _react2.default.createElement('i', { className: classes, 'aria-hidden': 'true' });
    }
  }]);

  return Icon;
}(_react.Component);

Icon.propTypes = {
  name: _propTypes2.default.oneOf(Object.keys(names)),
  color: _propTypes2.default.oneOf(Object.keys(colors))
};
Icon.defaultProps = {
  color: 'ink'
};
exports.default = Icon;