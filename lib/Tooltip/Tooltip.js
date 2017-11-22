'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.tooltipPosition = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

require('./Tooltip.css');

var _Text = require('../Text');

var _Text2 = _interopRequireDefault(_Text);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var tooltipPosition = exports.tooltipPosition = ['top', 'bottom', 'left', 'right'];

var Tooltip = function (_Component) {
  _inherits(Tooltip, _Component);

  function Tooltip() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Tooltip);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Tooltip.__proto__ || Object.getPrototypeOf(Tooltip)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      childPosition: {},
      tooltipPosition: {},
      active: false
    }, _this.handleOnMouseEnter = function () {
      var newState = Object.assign({}, _this.state);
      newState['active'] = true;
      _this.setState(newState);
    }, _this.handleOnMouseLeave = function () {
      var newState = Object.assign({}, _this.state);
      newState['active'] = false;
      _this.setState(newState);
    }, _this.calculateStyle = function () {
      // child dimension
      var childWidth = _this.state['childPosition'] ? Math.round(_this.state['childPosition'].width) : null;
      var childHeight = _this.state['childPosition'] ? Math.round(_this.state['childPosition'].height) : null;
      // tooltip dimension
      var tooltipHeight = _this.state['tooltipPosition'] ? Math.round(_this.state['tooltipPosition'].height) : null;
      // set margin bottom
      var marginBottom = _this.props.position === 'top' ? childHeight + 8 : 0;
      // set margin top
      var marginTop = 0;
      if (_this.props.position === 'left' || _this.props.position === 'right') {
        marginTop = childHeight ? -Math.round(tooltipHeight / 2) - Math.round(childHeight / 2) : 0;
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
      var tooltipStyle = {
        'marginLeft': marginLeft,
        'marginBottom': marginBottom,
        'marginTop': marginTop
      };

      return tooltipStyle;
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Tooltip, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      var newState = Object.assign({}, this.state);
      newState['childPosition'] = this.refs.child ? this.refs.child.getBoundingClientRect() : null;
      newState['tooltipPosition'] = this.refs.tooltip ? this.refs.tooltip.getBoundingClientRect() : null;
      this.setState(newState);
    }
  }, {
    key: 'render',
    value: function render() {
      var tooltipStyle = this.calculateStyle();

      var classes = ['tooltip'];
      classes.push(this.props.position);
      if (this.props.active || this.state.active) {
        classes.push('active');
      }
      if (this.props.light) {
        classes.push('light');
      }
      var color = this.props.light ? 'ink' : 'white';
      return _react2.default.createElement(
        'div',
        { className: classes.join(' ') },
        _react2.default.createElement(
          'span',
          {
            className: 'tooltipContent',
            ref: 'child',
            onMouseEnter: this.handleOnMouseEnter,
            onMouseLeave: this.handleOnMouseLeave
          },
          this.props.children
        ),
        _react2.default.createElement(
          'div',
          { className: 'tooltipBox', style: tooltipStyle, ref: 'tooltip' },
          _react2.default.createElement(
            _Text2.default,
            { color: color, size: 'small' },
            this.props.content
          )
        )
      );
    }
  }]);

  return Tooltip;
}(_react.Component);

Tooltip.propTypes = {
  children: _propTypes2.default.node,
  content: _propTypes2.default.string,
  active: _propTypes2.default.bool,
  position: _propTypes2.default.oneOf(tooltipPosition),
  light: _propTypes2.default.bool
};
Tooltip.defaultProps = {
  position: 'bottom'
};
exports.default = Tooltip;