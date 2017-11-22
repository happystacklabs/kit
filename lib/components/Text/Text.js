'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.textColors = exports.fontWeights = exports.tagSizes = exports.tagNames = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

require('./Text.css');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var tagNames = exports.tagNames = ['span', 'p', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6'];

var tagSizes = exports.tagSizes = {
  'extraSmall': 'sizeExtraSmall',
  'small': 'sizeSmall',
  'regular': 'sizeRegular',
  'medium': 'sizeMedium',
  'large': 'sizeLarge',
  'extraLarge': 'sizeExtraLarge'
};

var fontWeights = exports.fontWeights = {
  'normal': 'normalWeight',
  'bold': 'boldWeight'
};

var textColors = exports.textColors = {
  'white': 'colorWhite',
  'ink': 'colorInk',
  'inkLight': 'colorInkLight',
  'positive': 'colorPositive',
  'negative': 'colorNegative',
  'purple': 'colorPurple'
};

var Text = function (_Component) {
  _inherits(Text, _Component);

  function Text() {
    _classCallCheck(this, Text);

    return _possibleConstructorReturn(this, (Text.__proto__ || Object.getPrototypeOf(Text)).apply(this, arguments));
  }

  _createClass(Text, [{
    key: 'render',
    value: function render() {
      var Element = '' + this.props.element;
      var classes = ['fontFamily'];

      classes.push(this.props.className);
      classes.push(tagSizes[this.props.size]);
      classes.push(fontWeights[this.props.weight]);
      classes.push(textColors[this.props.color]);

      return _react2.default.createElement(
        Element,
        { className: classes.join(' ') },
        this.props.children
      );
    }
  }]);

  return Text;
}(_react.Component);

Text.propTypes = {
  children: _propTypes2.default.node,
  element: _propTypes2.default.oneOf(tagNames),
  size: _propTypes2.default.oneOf(Object.keys(tagSizes)),
  weight: _propTypes2.default.oneOf(Object.keys(fontWeights)),
  color: _propTypes2.default.oneOf(Object.keys(textColors))
};
Text.defaultProps = {
  element: 'span',
  size: 'regular',
  weight: 'normal',
  color: 'ink'
};
exports.default = Text;