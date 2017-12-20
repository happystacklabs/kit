'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

require('./ChoiceList.css');

var _ChoiceList = require('./ChoiceList.styles');

var _ChoiceList2 = _interopRequireDefault(_ChoiceList);

var _Text = require('../Text');

var _Text2 = _interopRequireDefault(_Text);

var _Checkbox = require('../Checkbox');

var _Checkbox2 = _interopRequireDefault(_Checkbox);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

var propTypes = {
  name: _propTypes2.default.string.isRequired,
  title: _propTypes2.default.string,
  choices: _propTypes2.default.arrayOf(_propTypes2.default.shape({
    label: _propTypes2.default.string,
    value: _propTypes2.default.string,
    helpText: _propTypes2.default.string
  })).isRequired,
  multiple: _propTypes2.default.bool,
  selected: _propTypes2.default.arrayOf(_propTypes2.default.string).isRequired,
  onChange: _propTypes2.default.func,
  disabled: _propTypes2.default.bool
};

var defaultProps = {
  selected: []
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
  };

  return _react2.default.createElement(
    'div',
    { className: (0, _classnames2.default)(props.className, _ChoiceList2.default.choiceList) },
    _react2.default.createElement(
      'fieldset',
      null,
      _react2.default.createElement(
        'legend',
        null,
        _react2.default.createElement(
          _Text2.default,
          { size: 'regular' },
          props.title
        )
      ),
      _react2.default.createElement(
        'ul',
        null,
        renderInputs(props, handleChange)
      )
    )
  );
}

function renderInputs(props, handleChange) {
  if (props.choices) {
    var type = props.multiple ? 'checkbox' : 'radio';

    return props.choices.map(function (choice) {
      return _react2.default.createElement(
        'li',
        { key: choice['value'] },
        _react2.default.createElement(_Checkbox2.default, {
          name: props.name,
          value: choice['value'],
          id: choice['value'],
          label: choice['label'],
          helpText: choice['helpText'],
          type: type,
          checked: props.selected.includes(choice['value']),
          onChange: handleChange,
          disabled: props.disabled
        })
      );
    });
  }
};

ChoiceList.propTypes = propTypes;
ChoiceList.defaultProps = defaultProps;

exports.default = ChoiceList;