'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.types = exports.sizes = exports.colors = exports.names = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

require('./Spinner.css');

var _Spinner = require('./Spinner.styles');

var _Spinner2 = _interopRequireDefault(_Spinner);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var names = exports.names = ['loader1', 'loader2'];

var colors = exports.colors = {
  'ink': _Spinner2.default.ink,
  'inkLight': _Spinner2.default.inkLight,
  'positive': _Spinner2.default.positive,
  'negative': _Spinner2.default.negative,
  'purple': _Spinner2.default.purple,
  'white': _Spinner2.default.white
};

var sizes = exports.sizes = {
  'small': _Spinner2.default.small,
  'medium': _Spinner2.default.medium,
  'large': _Spinner2.default.large
};

var types = exports.types = {
  'loader1': _Spinner2.default.loader1,
  'loader2': _Spinner2.default.loader2
};

var Spinner = function (_Component) {
  _inherits(Spinner, _Component);

  function Spinner() {
    _classCallCheck(this, Spinner);

    return _possibleConstructorReturn(this, (Spinner.__proto__ || Object.getPrototypeOf(Spinner)).apply(this, arguments));
  }

  _createClass(Spinner, [{
    key: 'render',
    value: function render() {
      var classSpinner = (0, _classnames2.default)(this.props.className, _Spinner2.default.spinner, types[this.props.type], colors[this.props.color], sizes[this.props.size]);

      return _react2.default.createElement(
        'div',
        { className: classSpinner },
        'Loading...'
      );
    }
  }]);

  return Spinner;
}(_react.Component);

Spinner.propTypes = {
  type: _propTypes2.default.oneOf(names),
  color: _propTypes2.default.oneOf(Object.keys(colors)),
  size: _propTypes2.default.oneOf(Object.keys(sizes))
};
Spinner.defaultProps = {
  type: 'loader1',
  color: 'ink',
  size: 'medium'
};
exports.default = Spinner;