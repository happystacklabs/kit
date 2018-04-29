'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ChoiceList = ChoiceList;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

require('./ChoiceList.css');

var _Text = require('../Text/Text');

var _Text2 = _interopRequireDefault(_Text);

var _Checkbox = require('../Checkbox/Checkbox');

var _Checkbox2 = _interopRequireDefault(_Checkbox);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function renderInputs(name, choices, multiple, disabled, selected, handleChange) {
  if (!choices) {
    return undefined;
  }
  var type = multiple ? 'checkbox' : 'radio';

  return choices.map(function (choice) {
    return _react2.default.createElement(
      'li',
      { className: 'kit-choicelist__li', key: choice.value },
      _react2.default.createElement(_Checkbox2.default, {
        name: name,
        value: choice.value,
        id: choice.value,
        label: choice.label,
        helpText: choice.helpText,
        type: type,
        checked: selected.includes(choice.value),
        onChange: handleChange,
        disabled: disabled
      })
    );
  });
}

var propTypes = {
  name: _propTypes2.default.string.isRequired,
  title: _propTypes2.default.string,
  choices: _propTypes2.default.arrayOf(_propTypes2.default.shape({
    label: _propTypes2.default.string,
    value: _propTypes2.default.string,
    helpText: _propTypes2.default.string
  })).isRequired,
  multiple: _propTypes2.default.bool,
  selected: _propTypes2.default.arrayOf(_propTypes2.default.string),
  onChange: _propTypes2.default.func,
  disabled: _propTypes2.default.bool,
  className: _propTypes2.default.string
};

var defaultProps = {
  title: undefined,
  multiple: false,
  selected: [],
  onChange: undefined,
  disabled: false,
  className: undefined
};

function ChoiceList(props) {
  function handleChange(event) {
    if (props.onChange === null) {
      return;
    }

    var selectedArray = props.multiple ? [].concat(_toConsumableArray(props.selected), [event.id]) : [event.id];

    if (props.multiple && !event.value) {
      selectedArray = selectedArray.filter(function (item) {
        return item !== event.id;
      });
    }

    props.onChange({ value: selectedArray, name: props.name });
  }

  return _react2.default.createElement(
    'div',
    { className: (0, _classnames2.default)(props.className, 'kit-choicelist') },
    _react2.default.createElement(
      'fieldset',
      { className: 'kit-choicelist__fieldset' },
      _react2.default.createElement(
        'legend',
        { className: 'kit-choicelist__legend' },
        _react2.default.createElement(
          _Text2.default,
          { size: 'display-small' },
          props.title
        )
      ),
      _react2.default.createElement(
        'ul',
        { className: 'kit-choicelist__ul' },
        renderInputs(props.name, props.choices, props.multiple, props.disabled, props.selected, handleChange)
      )
    )
  );
}

ChoiceList.propTypes = propTypes;
ChoiceList.defaultProps = defaultProps;

exports.default = ChoiceList;