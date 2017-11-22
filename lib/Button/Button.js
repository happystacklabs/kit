'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

require('./Button.css');

var _Spinner = require('../Spinner');

var _Spinner2 = _interopRequireDefault(_Spinner);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var buttonSizes = {
  'slim': 'buttonSizeSlim',
  'regular': 'buttonSizeRegular',
  'large': 'buttonSizeLarge'
};

var buttonColors = {
  'positive': 'buttonColorPositive',
  'negative': 'buttonColorNegative',
  'purple': 'buttonColorPurple'
};

var renderContent = function renderContent(props) {
  if (props.loading) {
    var size = props.size === 'slim' || props.size === 'regular' ? 'small' : 'regular';
    var type = props.size === 'slim' ? 'loader2' : 'loader1';
    return _react2.default.createElement(
      'div',
      { className: 'buttonContentLoading' },
      _react2.default.createElement(
        'span',
        { className: 'buttonSpinner' },
        _react2.default.createElement(_Spinner2.default, { color: 'inkLight', size: size, type: type })
      ),
      _react2.default.createElement(
        'span',
        { className: 'hidden' },
        props.children
      )
    );
  } else {
    return _react2.default.createElement(
      'span',
      null,
      props.children
    );
  }
};

var Button = function (_Component) {
  _inherits(Button, _Component);

  function Button() {
    _classCallCheck(this, Button);

    return _possibleConstructorReturn(this, (Button.__proto__ || Object.getPrototypeOf(Button)).apply(this, arguments));
  }

  _createClass(Button, [{
    key: 'render',
    value: function render() {
      var classes = ['button'];

      classes.push(buttonSizes[this.props.size]);

      if (this.props.square) {
        classes.push('buttonSquare');
      }

      if (this.props.fullWidth) {
        classes.push('fullWidth');
      }

      if (this.props.plain) {
        classes.push('buttonPlain');
      }

      if (this.props.outline) {
        classes.push('buttonOutline');
      }

      if (this.props.color) {
        classes.push(buttonColors[this.props.color]);
      }

      if (this.props.loading) {
        classes.push('loading');
      }

      var disabled = this.props.loading ? true : this.props.disabled;

      return _react2.default.createElement(
        'button',
        {
          onClick: this.props.onClick,
          disabled: disabled,
          className: classes.join(' '),
          size: this.props.size
        },
        renderContent(this.props)
      );
    }
  }]);

  return Button;
}(_react.Component);

Button.propTypes = {
  children: _propTypes2.default.node,
  disabled: _propTypes2.default.bool,
  size: _propTypes2.default.oneOf(Object.keys(buttonSizes)),
  color: _propTypes2.default.oneOf(Object.keys(buttonColors)),
  square: _propTypes2.default.bool,
  fullWidth: _propTypes2.default.bool,
  plain: _propTypes2.default.bool,
  outline: _propTypes2.default.bool,
  loading: _propTypes2.default.bool
};
Button.defaultProps = {
  size: 'regular'
};
exports.default = Button;