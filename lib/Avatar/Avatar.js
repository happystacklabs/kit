'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.avatarSizes = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

require('./Avatar.css');

var _Text = require('../Text');

var _Text2 = _interopRequireDefault(_Text);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var avatarSizes = exports.avatarSizes = {
  'small': 'avatarSmall',
  'medium': 'avatarMedium',
  'large': 'avatarLarge'
};

var Avatar = function (_Component) {
  _inherits(Avatar, _Component);

  function Avatar() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Avatar);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Avatar.__proto__ || Object.getPrototypeOf(Avatar)).call.apply(_ref, [this].concat(args))), _this), _this.renderAvatar = function () {
      if (_this.props.initial) {
        var initial = _this.props.initial.toUpperCase().substring(0, 2);
        return _react2.default.createElement(
          'div',
          { className: 'avatarPlaceholder' },
          _react2.default.createElement(
            _Text2.default,
            { weight: 'bold' },
            initial
          )
        );
        return;
      }
      if (_this.props.source) {
        return _react2.default.createElement('img', { src: _this.props.source });
      } else {
        return _react2.default.createElement('div', { className: 'avatarPlaceholder' });
      }
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Avatar, [{
    key: 'render',
    value: function render() {
      var classes = ['avatar'];
      classes.push(avatarSizes[this.props.size]);
      return _react2.default.createElement(
        'span',
        { className: classes.join(' ') },
        this.renderAvatar()
      );
    }
  }]);

  return Avatar;
}(_react.Component);

Avatar.propTypes = {
  source: _propTypes2.default.string,
  initial: _propTypes2.default.string,
  size: _propTypes2.default.oneOf(Object.keys(avatarSizes))
};
Avatar.defaultProps = {
  size: 'medium'
};
exports.default = Avatar;