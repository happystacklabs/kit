'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.position = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

require('./Tooltip.css');

var _Text = require('../Text/Text');

var _Text2 = _interopRequireDefault(_Text);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var position = exports.position = {
  top: 'kit-tooltip--top',
  bottom: 'kit-tooltip--bottom',
  left: 'kit-tooltip--left',
  right: 'kit-tooltip--right'
};

var propTypes = {
  children: _propTypes2.default.node,
  content: _propTypes2.default.string,
  active: _propTypes2.default.bool,
  position: _propTypes2.default.oneOf(Object.keys(position)),
  light: _propTypes2.default.bool,
  className: _propTypes2.default.string
};

var defaultProps = {
  children: undefined,
  content: undefined,
  active: false,
  position: 'bottom',
  light: false,
  className: undefined
};

var Tooltip = function (_React$Component) {
  _inherits(Tooltip, _React$Component);

  function Tooltip() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Tooltip);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Tooltip.__proto__ || Object.getPrototypeOf(Tooltip)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      childPosition: {},
      position: {},
      active: false
    }, _this.handleOnMouseEnter = function () {
      var newState = Object.assign({}, _this.state);
      newState.active = true;
      _this.setState(newState);
    }, _this.handleOnMouseLeave = function () {
      var newState = Object.assign({}, _this.state);
      newState.active = false;
      _this.setState(newState);
    }, _this.calculateStyle = function () {
      // child dimension
      var childWidth = _this.state.childPosition ? Math.round(_this.state.childPosition.width) : null;
      var childHeight = _this.state.childPosition ? Math.round(_this.state.childPosition.height) : null;
      // tooltip dimension
      var height = _this.state.position ? Math.round(_this.state.position.height) : null;
      // set margin bottom
      var marginBottom = _this.props.position === 'top' ? childHeight + 8 : 0;
      // set margin top
      var marginTop = 0;
      if (_this.props.position === 'left' || _this.props.position === 'right') {
        marginTop = childHeight ? -Math.round(height / 2) - Math.round(childHeight / 2) : 0;
      } else if (_this.props.position === 'bottom') {
        marginTop = childHeight ? 8 : 0;
      }
      // set margin left
      var marginLeft = 0;
      if (_this.props.position === 'left') {
        marginLeft = childWidth ? -8 : 0;
      } else if (_this.props.position === 'right') {
        marginLeft = childWidth ? childWidth + 8 : 0;
      } else {
        marginLeft = childWidth ? Math.round(childWidth / 2) : 0;
      }
      // tooltip style
      var style = { marginLeft: marginLeft, marginBottom: marginBottom, marginTop: marginTop };

      return style;
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Tooltip, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      var newState = Object.assign({}, this.state);
      newState.childPosition = this.childRef ? this.childRef.getBoundingClientRect() : null;
      newState.position = this.tooltipRef ? this.tooltipRef.getBoundingClientRect() : null;
      this.setState(newState); // eslint-disable-line react/no-did-mount-set-state
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      var style = this.calculateStyle();
      var color = this.props.light ? 'ink' : 'white';

      var tooltipClassName = (0, _classnames2.default)({
        'kit-tooltip--active': this.props.active || this.state.active,
        'kit-tooltip--light': this.props.light
      }, this.props.className, position[this.props.position], 'kit-tooltip');

      return _react2.default.createElement(
        'div',
        { className: tooltipClassName },
        _react2.default.createElement(
          'span',
          {
            className: 'kit-tooltip__content',
            ref: function ref(_ref2) {
              _this2.childRef = _ref2;
            },
            onMouseEnter: this.handleOnMouseEnter,
            onMouseLeave: this.handleOnMouseLeave
          },
          this.props.children
        ),
        _react2.default.createElement(
          'div',
          { className: 'kit-tooltip__box', style: style, ref: function ref(_ref3) {
              _this2.tooltipRef = _ref3;
            } },
          _react2.default.createElement(
            _Text2.default,
            { color: color, size: 'caption' },
            this.props.content
          )
        )
      );
    }
  }]);

  return Tooltip;
}(_react2.default.Component);

Tooltip.propTypes = propTypes;
Tooltip.defaultProps = defaultProps;

exports.default = Tooltip;