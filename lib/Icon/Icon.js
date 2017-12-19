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

require('font-awesome/css/font-awesome.min.css');

require('./Icon.css');

var _Icon = require('./Icon.styles');

var _Icon2 = _interopRequireDefault(_Icon);

var _bind = require('classnames/bind');

var _bind2 = _interopRequireDefault(_bind);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

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

var Icon = function (_Component) {
  _inherits(Icon, _Component);

  function Icon() {
    _classCallCheck(this, Icon);

    return _possibleConstructorReturn(this, (Icon.__proto__ || Object.getPrototypeOf(Icon)).apply(this, arguments));
  }

  _createClass(Icon, [{
    key: 'render',
    value: function render() {
      var classIcon = cx(this.props.className, 'fa', names[this.props.name], colors[this.props.color]);

      return _react2.default.createElement('i', { className: classIcon, 'aria-hidden': 'true' });
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