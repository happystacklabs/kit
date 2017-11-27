'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.colors = exports.weights = exports.sizes = exports.elements = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _Text = require('./Text.css');

var _Text2 = _interopRequireDefault(_Text);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var elements = exports.elements = ['span', 'p', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6'];

var sizes = exports.sizes = {
  'extraSmall': _Text2.default.extraSmall,
  'small': _Text2.default.small,
  'regular': _Text2.default.regular,
  'medium': _Text2.default.medium,
  'large': _Text2.default.large,
  'extraLarge': _Text2.default.extraLarge
};

var weights = exports.weights = {
  'normal': _Text2.default.normalWeight,
  'bold': _Text2.default.boldWeight
};

var colors = exports.colors = {
  'white': _Text2.default.white,
  'ink': _Text2.default.ink,
  'inkLight': _Text2.default.inkLight,
  'positive': _Text2.default.positive,
  'negative': _Text2.default.negative,
  'purple': _Text2.default.purple
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

      var classes = (0, _classnames2.default)(this.props.className, _Text2.default.fontFamily, sizes[this.props.size], weights[this.props.weight], colors[this.props.color]);

      return _react2.default.createElement(
        Element,
        { className: classes },
        this.props.children
      );
    }
  }]);

  return Text;
}(_react.Component);

Text.propTypes = {
  children: _propTypes2.default.node,
  element: _propTypes2.default.oneOf(elements),
  size: _propTypes2.default.oneOf(Object.keys(sizes)),
  weight: _propTypes2.default.oneOf(Object.keys(weights)),
  color: _propTypes2.default.oneOf(Object.keys(colors))
};
Text.defaultProps = {
  element: 'span',
  size: 'regular',
  weight: 'normal',
  color: 'ink'
};
exports.default = Text;