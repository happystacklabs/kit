'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.type = undefined;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

require('./TextInput.css');

var _TextInput = require('./TextInput.styles');

var _TextInput2 = _interopRequireDefault(_TextInput);

var _Text = require('../Text');

var _Text2 = _interopRequireDefault(_Text);

var _Icon = require('../Icon');

var _Icon2 = _interopRequireDefault(_Icon);

var _Button = require('../Button');

var _Button2 = _interopRequireDefault(_Button);

var _bind = require('classnames/bind');

var _bind2 = _interopRequireDefault(_bind);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var cx = _bind2.default.bind(_TextInput2.default);

var type = exports.type = ['email', 'text', 'number', 'password', 'search', 'url'];

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
  onChange: _propTypes2.default.func
};

var defaultProps = {
  type: 'text'
};

function TextInput(props) {
  function handleChange(event) {
    if (props.onChange === null) {
      return;
    }
    props.onChange({ name: props.name, value: event.target.value });
  };

  var readOnly = !props.readOnly && props.onChange ? false : true;

  var classInput = cx({
    shake: props.shake || props.maxLength && props.value.length >= props.maxLength,
    error: props.error }, _TextInput2.default.input);

  return _react2.default.createElement(
    'div',
    { className: props.className },
    renderLabel(props.name, props.label),
    renderAction(props.action),
    _react2.default.createElement('input', {
      name: props.name,
      value: props.value,
      placeholder: props.placeholder,
      onChange: handleChange,
      readOnly: readOnly,
      disabled: props.disabled,
      className: classInput,
      maxLength: props.maxLength,
      type: props.type
    }),
    renderError(props.error),
    renderHelpText(props.helpText)
  );
}

function renderError(error) {
  if (error) {
    return _react2.default.createElement(
      'div',
      { className: _TextInput2.default.errorMessage },
      _react2.default.createElement(_Icon2.default, { name: 'exclamation', color: 'negative', className: _TextInput2.default.errorIcon }),
      _react2.default.createElement(
        _Text2.default,
        { color: 'negative', element: 'span', size: 'small' },
        error
      )
    );
  }
}

function renderHelpText(helpText) {
  if (helpText) {
    return _react2.default.createElement(
      'div',
      { className: _TextInput2.default.helpText },
      _react2.default.createElement(
        _Text2.default,
        { color: 'inkLight', element: 'span', size: 'small' },
        helpText
      )
    );
  }
}

function renderLabel(name, labelText) {
  if (labelText) {
    return _react2.default.createElement(
      'div',
      { className: _TextInput2.default.label },
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
}

function renderAction(action) {
  if (action) {
    return _react2.default.createElement(
      _Button2.default,
      {
        plain: true,
        className: _TextInput2.default.action,
        onClick: action.onAction
      },
      action.title
    );
  }
}

TextInput.propTypes = propTypes;
TextInput.defaultProps = defaultProps;

exports.default = TextInput;