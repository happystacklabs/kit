'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Button = Button;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

require('./Button.css');

var _Spinner = require('../Spinner/Spinner');

var _Spinner2 = _interopRequireDefault(_Spinner);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var sizes = {
  small: 'kit-button--small',
  medium: 'kit-button--medium',
  large: 'kit-button--large'
};

var colors = {
  positive: 'kit-button--positive',
  negative: 'kit-button--negative',
  main: 'kit-button--main',
  default: 'kit-button--default'
};

function renderContent(propSize, loading, plain, children) {
  if (loading) {
    var size = propSize === 'large' ? 'medium' : 'small';
    return _react2.default.createElement(
      'div',
      null,
      _react2.default.createElement(
        'span',
        { className: 'kit-button__content--hidden' },
        children
      ),
      _react2.default.createElement(
        'div',
        { className: 'kit-button__loading' },
        _react2.default.createElement(_Spinner2.default, { className: 'kit-button__spinner', color: 'ink-light', size: size })
      )
    );
  }
  return _react2.default.createElement(
    'span',
    null,
    children
  );
}

var propTypes = {
  children: _propTypes2.default.node,
  disabled: _propTypes2.default.bool,
  size: _propTypes2.default.oneOf(Object.keys(sizes)),
  color: _propTypes2.default.oneOf(Object.keys(colors)),
  square: _propTypes2.default.bool,
  fullWidth: _propTypes2.default.bool,
  plain: _propTypes2.default.bool,
  outline: _propTypes2.default.bool,
  loading: _propTypes2.default.bool,
  className: _propTypes2.default.string,
  onClick: _propTypes2.default.func
};

var defaultProps = {
  children: undefined,
  disabled: false,
  size: 'medium',
  color: 'default',
  square: false,
  fullWidth: false,
  plain: false,
  outline: false,
  loading: false,
  className: undefined,
  onClick: undefined
};

function Button(props) {
  var buttonClassNames = (0, _classnames2.default)({
    'kit-button--loading kit-button--disabled': props.loading,
    'kit-button--outline': props.outline,
    'kit-button--plain': props.plain,
    'kit-button--full-width': props.fullWidth,
    'kit-button--square': props.square,
    'kit-button--disabled': props.disabled
  }, props.className, 'kit-button', colors[props.color], sizes[props.size]);

  var disabled = props.loading ? true : props.disabled;

  return _react2.default.createElement(
    'button',
    {
      onClick: props.onClick,
      disabled: disabled,
      className: buttonClassNames
    },
    renderContent(props.size, props.loading, props.plain, props.children)
  );
}

Button.propTypes = propTypes;
Button.defaultProps = defaultProps;

exports.default = Button;