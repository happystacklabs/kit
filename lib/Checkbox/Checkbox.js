'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.type = undefined;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

require('./Checkbox.css');

var _Checkbox = require('./Checkbox.styles');

var _Checkbox2 = _interopRequireDefault(_Checkbox);

var _bind = require('classnames/bind');

var _bind2 = _interopRequireDefault(_bind);

var _Icon = require('../Icon');

var _Icon2 = _interopRequireDefault(_Icon);

var _Text = require('../Text');

var _Text2 = _interopRequireDefault(_Text);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var cx = _bind2.default.bind(_Checkbox2.default);

var type = exports.type = ['checkbox', 'radio'];

var propTypes = {
  name: _propTypes2.default.string.isRequired,
  checked: _propTypes2.default.bool,
  disabled: _propTypes2.default.bool,
  error: _propTypes2.default.bool,
  label: _propTypes2.default.string,
  value: _propTypes2.default.string,
  id: _propTypes2.default.string,
  helpText: _propTypes2.default.string,
  type: _propTypes2.default.oneOf(type)
};

var defaultProps = {
  type: 'checkbox',
  checked: false
};

function Checkbox(props) {
  function handleChange(event) {
    if (props.onChange === null) {
      return;
    }
    props.onChange({ value: !props.checked, id: props.id });
  };

  var classes = cx({
    radioInput: props.type === 'radio',
    error: props.error,
    checked: props.checked }, _Checkbox2.default.innerWrapper);

  return _react2.default.createElement(
    'div',
    { className: (0, _bind2.default)(props.className, _Checkbox2.default.wrapper) },
    renderLabel(props.id, props.label),
    _react2.default.createElement(
      'div',
      { className: classes },
      _react2.default.createElement('input', {
        name: props.name,
        type: props.type,
        id: props.id,
        value: props.value,
        checked: props.checked,
        onChange: handleChange,
        disabled: props.disabled,
        className: _Checkbox2.default.input
      }),
      renderCheckmark(props.type)
    ),
    renderHelpText(props.helpText)
  );
}

function renderLabel(name, labelText) {
  if (labelText) {
    return _react2.default.createElement(
      'label',
      { htmlFor: name, className: _Checkbox2.default.label },
      _react2.default.createElement(
        _Text2.default,
        { size: 'regular' },
        labelText
      )
    );
  }
};

function renderHelpText(helpText) {
  if (helpText) {
    return _react2.default.createElement(
      'div',
      { className: _Checkbox2.default.helpText },
      _react2.default.createElement(
        _Text2.default,
        { color: 'inkLight', element: 'span', size: 'small' },
        helpText
      )
    );
  }
};

function renderCheckmark(type) {
  if (type === 'checkbox') {
    return _react2.default.createElement(_Icon2.default, { name: 'check', color: 'white', className: _Checkbox2.default.checkmark });
  } else {
    return _react2.default.createElement('div', { className: _Checkbox2.default.radioMiddle });
  }
}

Checkbox.propTypes = propTypes;
Checkbox.defaultProps = defaultProps;

exports.default = Checkbox;