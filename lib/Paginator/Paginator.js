'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _Paginator = require('./Paginator.css');

var _Paginator2 = _interopRequireDefault(_Paginator);

var _Button = require('../Button');

var _Button2 = _interopRequireDefault(_Button);

var _Icon = require('../Icon');

var _Icon2 = _interopRequireDefault(_Icon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Paginator = function (_Component) {
  _inherits(Paginator, _Component);

  function Paginator() {
    _classCallCheck(this, Paginator);

    return _possibleConstructorReturn(this, (Paginator.__proto__ || Object.getPrototypeOf(Paginator)).apply(this, arguments));
  }

  _createClass(Paginator, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'nav',
        { className: this.props.className },
        _react2.default.createElement(
          'div',
          { className: _Paginator2.default.left },
          _react2.default.createElement(
            _Button2.default,
            {
              size: 'large',
              disabled: this.props.disablePrevious,
              onClick: this.props.onPrevious,
              plain: this.props.plain
            },
            _react2.default.createElement(_Icon2.default, {
              name: 'chevron-left',
              color: 'purple'
            })
          )
        ),
        _react2.default.createElement(
          'div',
          { className: _Paginator2.default.right },
          _react2.default.createElement(
            _Button2.default,
            {
              size: 'large',
              disabled: this.props.disableNext,
              onClick: this.props.onNext,
              plain: this.props.plain
            },
            _react2.default.createElement(_Icon2.default, {
              name: 'chevron-right',
              color: 'purple'
            })
          )
        )
      );
    }
  }]);

  return Paginator;
}(_react.Component);

Paginator.propTypes = {
  disableNext: _propTypes2.default.bool,
  disablePrevious: _propTypes2.default.bool,
  plain: _propTypes2.default.bool,
  onNext: _propTypes2.default.func,
  onPrevious: _propTypes2.default.func
};
exports.default = Paginator;