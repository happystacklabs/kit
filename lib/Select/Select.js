'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _reactFontawesome = require('@fortawesome/react-fontawesome');

var _reactFontawesome2 = _interopRequireDefault(_reactFontawesome);

var _faAngleDown = require('@fortawesome/fontawesome-free-solid/faAngleDown');

var _faAngleDown2 = _interopRequireDefault(_faAngleDown);

require('./Select.css');

var _Text = require('../Text/Text');

var _Text2 = _interopRequireDefault(_Text);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function renderOptions(options) {
  if (!options) {
    return undefined;
  }
  return options.map(function (option) {
    return _react2.default.createElement(
      'option',
      { key: option.value.toString(), value: option.value },
      option.label
    );
  });
}

function renderPlaceholder(placeholder) {
  if (!placeholder) {
    return undefined;
  }
  return _react2.default.createElement(
    'option',
    { value: '', disabled: true, hidden: true },
    placeholder
  );
}

function renderHelpText(helpText) {
  if (!helpText) {
    return undefined;
  }
  return _react2.default.createElement(
    'div',
    { className: 'kit-select__help-text' },
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
    { className: 'kit-select__label' },
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

var propTypes = {
  name: _propTypes2.default.string.isRequired,
  placeholder: _propTypes2.default.string,
  value: _propTypes2.default.string.isRequired,
  options: _propTypes2.default.arrayOf(_propTypes2.default.shape({
    label: _propTypes2.default.string,
    value: _propTypes2.default.string
  })).isRequired,
  error: _propTypes2.default.bool,
  helpText: _propTypes2.default.string,
  label: _propTypes2.default.string,
  disabled: _propTypes2.default.bool,
  onChange: _propTypes2.default.func,
  className: _propTypes2.default.string
};

var defaultProps = {
  placeholder: undefined,
  error: false,
  helpText: undefined,
  label: undefined,
  disabled: false,
  onChange: undefined,
  className: undefined
};

function Select(props) {
  function handleChange(event) {
    if (props.onChange === null) {
      return;
    }
    props.onChange({ value: event.target.value, name: props.name });
  }

  var selectClassName = (0, _classnames2.default)({ 'kit-select--error': props.error }, 'kit-select');

  return _react2.default.createElement(
    'div',
    { className: props.className },
    renderLabel(props.name, props.label),
    _react2.default.createElement(
      'div',
      { className: 'kit-select__wrapper' },
      _react2.default.createElement(
        'select',
        {
          name: props.name,
          value: props.value,
          disabled: props.disabled,
          onChange: handleChange,
          className: selectClassName
        },
        renderPlaceholder(props.placeholder),
        renderOptions(props.options)
      ),
      _react2.default.createElement(
        'div',
        { className: 'kit-select__arrow' },
        _react2.default.createElement(_reactFontawesome2.default, { icon: _faAngleDown2.default, className: 'kit-select__icon', fixedWidth: true })
      )
    ),
    renderHelpText(props.helpText)
  );
}

Select.propTypes = propTypes;
Select.defaultProps = defaultProps;

exports.default = Select;