'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

require('./Button.css');

var _Button = require('./Button.styles');

var _Button2 = _interopRequireDefault(_Button);

var _Spinner = require('../Spinner');

var _Spinner2 = _interopRequireDefault(_Spinner);

var _bind = require('classnames/bind');

var _bind2 = _interopRequireDefault(_bind);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var cx = _bind2.default.bind(_Button2.default);

var sizes = {
  'slim': _Button2.default.slim,
  'regular': _Button2.default.regular,
  'large': _Button2.default.large
};

var colors = {
  'positive': _Button2.default.positive,
  'negative': _Button2.default.negative,
  'purple': _Button2.default.purple
};

var propTypes = {
  children: _propTypes2.default.node,
  disabled: _propTypes2.default.bool,
  size: _propTypes2.default.oneOf(Object.keys(sizes)),
  color: _propTypes2.default.oneOf(Object.keys(colors)),
  square: _propTypes2.default.bool,
  fullWidth: _propTypes2.default.bool,
  plain: _propTypes2.default.bool,
  outline: _propTypes2.default.bool,
  loading: _propTypes2.default.bool
};

var defaultProps = {
  size: 'regular'
};

function Button(props) {
  var classButton = cx({
    loading: props.loading,
    outline: props.outline,
    plain: props.plain,
    fullWidth: props.fullWidth,
    square: props.square }, props.className, _Button2.default.button, colors[props.color], sizes[props.size]);

  var disabled = props.loading ? true : props.disabled;

  return _react2.default.createElement(
    'button',
    {
      onClick: props.onClick,
      disabled: disabled,
      className: classButton
    },
    renderContent(props)
  );
}

function renderContent(props) {
  if (props.loading) {
    var size = props.size === 'large' ? 'medium' : 'small';
    var type = props.size === 'slim' ? 'loader2' : 'loader1';

    return _react2.default.createElement(
      'div',
      { className: _Button2.default.loading },
      _react2.default.createElement(
        'span',
        { className: _Button2.default.spinner },
        _react2.default.createElement(_Spinner2.default, { color: 'inkLight', size: size, type: type })
      ),
      _react2.default.createElement(
        'span',
        { className: _Button2.default.hidden },
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

Button.propTypes = propTypes;
Button.defaultProps = defaultProps;

exports.default = Button;