'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.type = undefined;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _reactFontawesome = require('@fortawesome/react-fontawesome');

var _reactFontawesome2 = _interopRequireDefault(_reactFontawesome);

var _faSearch = require('@fortawesome/fontawesome-free-solid/faSearch');

var _faSearch2 = _interopRequireDefault(_faSearch);

var _faExclamation = require('@fortawesome/fontawesome-free-solid/faExclamation');

var _faExclamation2 = _interopRequireDefault(_faExclamation);

require('./TextInput.css');

var _Text = require('../Text/Text');

var _Text2 = _interopRequireDefault(_Text);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var type = exports.type = ['email', 'text', 'number', 'password', 'search', 'url'];

function renderError(error) {
  if (!error) {
    return undefined;
  }
  return _react2.default.createElement(
    'div',
    { className: 'kit-textinput__error-message' },
    _react2.default.createElement(_reactFontawesome2.default, { icon: _faExclamation2.default, className: 'kit-textinput__error-icon' }),
    _react2.default.createElement(
      _Text2.default,
      { color: 'negative', element: 'span', size: 'caption' },
      error
    )
  );
}

function renderHelpText(helpText) {
  if (!helpText) {
    return undefined;
  }
  return _react2.default.createElement(
    'div',
    { className: 'kit-textinput__help-text' },
    _react2.default.createElement(
      _Text2.default,
      { color: 'ink-light', element: 'span', size: 'caption' },
      helpText
    )
  );
}

function renderLabel(name, labelText) {
  if (!labelText) {
    return undefined;
  }
  return _react2.default.createElement(
    'div',
    { className: 'kit-textinput__label' },
    _react2.default.createElement(
      'label',
      { htmlFor: name },
      _react2.default.createElement(
        _Text2.default,
        { size: 'body' },
        labelText
      )
    )
  );
}

function renderAction(action) {
  if (!action) {
    return undefined;
  }
  return _react2.default.createElement(
    'div',
    {
      onClick: action.onAction,
      onKeyPress: action.onAction,
      role: 'button',
      tabIndex: '0',
      className: 'kit-textinput__action'
    },
    _react2.default.createElement(
      _Text2.default,
      { size: 'body' },
      action.title
    )
  );
}

function renderSearch(inputType) {
  if (inputType !== 'search') {
    return undefined;
  }
  return _react2.default.createElement(
    'div',
    { className: 'kit-textinput__search' },
    _react2.default.createElement(_reactFontawesome2.default, { icon: _faSearch2.default, size: 'sm', className: 'kit-textinput__search-icon' })
  );
}

var propTypes = {
  name: _propTypes2.default.string.isRequired,
  value: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.number]),
  placeholder: _propTypes2.default.string,
  readOnly: _propTypes2.default.bool,
  disabled: _propTypes2.default.bool,
  maxLength: _propTypes2.default.number,
  shake: _propTypes2.default.bool,
  error: _propTypes2.default.string,
  type: _propTypes2.default.oneOf(type),
  label: _propTypes2.default.string,
  helpText: _propTypes2.default.string,
  action: _propTypes2.default.shape({
    title: _propTypes2.default.string,
    onAction: _propTypes2.default.func
  }),
  onChange: _propTypes2.default.func,
  className: _propTypes2.default.string,
  textArea: _propTypes2.default.bool
};

var defaultProps = {
  type: 'text',
  value: '',
  placeholder: undefined,
  readOnly: false,
  disabled: false,
  maxLength: undefined,
  shake: false,
  error: undefined,
  label: undefined,
  helpText: undefined,
  action: undefined,
  onChange: undefined,
  className: undefined,
  textArea: false
};

function TextInput(props) {
  function handleChange(event) {
    if (props.onChange === null) {
      return;
    }
    props.onChange({ name: props.name, value: event.target.value });
  }

  var inputClassName = (0, _classnames2.default)({
    'kit-textinput__input--shake': props.shake || props.maxLength && props.value.length >= props.maxLength,
    'kit-textinput__input--error': props.error,
    'kit-textinput__textarea': props.textArea
  }, 'kit-textinput__input');

  var textInputClassName = (0, _classnames2.default)({
    'kit-textinput--search': props.type === 'search'
  }, props.className, 'kit-textinput');

  return _react2.default.createElement(
    'div',
    { className: textInputClassName },
    renderLabel(props.name, props.label),
    renderAction(props.action),
    props.textArea ? _react2.default.createElement('textarea', {
      name: props.name,
      row: 3,
      value: props.value,
      placeholder: props.placeholder,
      onChange: handleChange,
      readOnly: props.readOnly,
      disabled: props.disabled,
      className: inputClassName,
      maxLength: props.maxLength,
      type: props.type !== 'search' ? props.type : undefined
    }) : _react2.default.createElement('input', {
      name: props.name,
      value: props.value,
      placeholder: props.placeholder,
      onChange: handleChange,
      readOnly: props.readOnly,
      disabled: props.disabled,
      className: inputClassName,
      maxLength: props.maxLength,
      type: props.type !== 'search' ? props.type : undefined
    }),
    renderSearch(props.type),
    renderError(props.error),
    renderHelpText(props.helpText)
  );
}

TextInput.propTypes = propTypes;
TextInput.defaultProps = defaultProps;

exports.default = TextInput;