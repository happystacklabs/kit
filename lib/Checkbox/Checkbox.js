'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.types = undefined;
exports.Checkbox = Checkbox;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

require('./Checkbox.css');

var _Text = require('../Text/Text');

var _Text2 = _interopRequireDefault(_Text);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var types = exports.types = ['checkbox', 'radio'];

function renderLabel(id, labelText) {
  return _react2.default.createElement(
    'label',
    { htmlFor: id, className: 'kit-checkbox__label' },
    _react2.default.createElement(
      _Text2.default,
      { size: 'body' },
      labelText
    )
  );
}

function renderHelpText(helpText) {
  if (!helpText) {
    return undefined;
  }
  return _react2.default.createElement(
    'div',
    { className: 'kit-checkbox__help-text' },
    _react2.default.createElement(
      _Text2.default,
      { color: 'ink-light', element: 'span', size: 'caption' },
      helpText
    )
  );
}

var propTypes = {
  name: _propTypes2.default.string.isRequired,
  checked: _propTypes2.default.bool,
  disabled: _propTypes2.default.bool,
  error: _propTypes2.default.bool,
  label: _propTypes2.default.string,
  value: _propTypes2.default.string,
  id: _propTypes2.default.string,
  helpText: _propTypes2.default.string,
  type: _propTypes2.default.oneOf(types),
  onChange: _propTypes2.default.func,
  className: _propTypes2.default.string
};

var defaultProps = {
  checked: false,
  disabled: false,
  error: false,
  label: undefined,
  value: undefined,
  id: undefined,
  helpText: undefined,
  type: 'checkbox',
  onChange: undefined,
  className: undefined
};

function Checkbox(props) {
  function handleChange() {
    if (props.onChange === null) {
      return;
    }
    props.onChange({ value: !props.checked, id: props.id });
  }

  var checkboxClassName = (0, _classnames2.default)({
    'kit-checkbox--radio': props.type === 'radio',
    'kit-checkbox--error': props.error
  }, props.className, 'kit-checkbox');

  return _react2.default.createElement(
    'div',
    { className: checkboxClassName },
    _react2.default.createElement('input', {
      name: props.name,
      type: props.type,
      id: props.id,
      value: props.value,
      checked: props.checked,
      onChange: handleChange,
      disabled: props.disabled,
      className: 'kit-checkbox__input'
    }),
    renderLabel(props.id, props.label),
    renderHelpText(props.helpText)
  );
}

Checkbox.propTypes = propTypes;
Checkbox.defaultProps = defaultProps;

exports.default = Checkbox;