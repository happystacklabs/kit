'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

require('./Select.css');

var _Select = require('./Select.styles');

var _Select2 = _interopRequireDefault(_Select);

var _Icon = require('../Icon');

var _Icon2 = _interopRequireDefault(_Icon);

var _Text = require('../Text');

var _Text2 = _interopRequireDefault(_Text);

var _bind = require('classnames/bind');

var _bind2 = _interopRequireDefault(_bind);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var cx = _bind2.default.bind(_Select2.default);

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
  disabled: _propTypes2.default.bool
};

function Select(props) {
  function handleChange(event) {
    if (props.onChange === null) {
      return;
    }
    props.onChange({ value: event.target.value, name: props.name });
  };

  var classSelect = cx({
    error: props.error }, _Select2.default.input);

  return _react2.default.createElement(
    'div',
    { className: props.className },
    renderLabel(props.name, props.label),
    _react2.default.createElement(
      'div',
      { className: _Select2.default.wrapper },
      _react2.default.createElement(
        'select',
        {
          name: props.name,
          value: props.value,
          disabled: props.disabled,
          onChange: handleChange,
          className: classSelect
        },
        renderPlaceholder(props.placeholder),
        renderOptions(props.options)
      ),
      _react2.default.createElement(
        'div',
        { className: _Select2.default.arrow },
        _react2.default.createElement(_Icon2.default, {
          name: 'angle-down',
          color: 'inkLight'
        })
      )
    ),
    renderHelpText(props.helpText)
  );
}

function renderOptions(options) {
  if (options) {
    return options.map(function (option) {
      return _react2.default.createElement(
        'option',
        { key: option.value.toString(), value: option.value },
        option.label
      );
    });
  }
};

function renderPlaceholder(placeholder, value) {
  if (placeholder) {
    return _react2.default.createElement(
      'option',
      { value: '', disabled: true, hidden: true },
      placeholder
    );
  }
}

function renderHelpText(helpText) {
  if (helpText) {
    return _react2.default.createElement(
      'div',
      { className: _Select2.default.helpText },
      _react2.default.createElement(
        _Text2.default,
        { color: 'inkLight', element: 'span', size: 'small' },
        helpText
      )
    );
  }
};

function renderLabel(name, labelText) {
  if (labelText) {
    return _react2.default.createElement(
      'div',
      { className: _Select2.default.label },
      _react2.default.createElement(
        'label',
        { htmlFor: name },
        _react2.default.createElement(
          _Text2.default,
          { size: 'regular' },
          labelText
        )
      )
    );
  }
};

Select.propTypes = propTypes;

exports.default = Select;