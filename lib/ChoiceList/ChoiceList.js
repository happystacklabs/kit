'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

require('./ChoiceList.css');

var _Text = require('../Text');

var _Text2 = _interopRequireDefault(_Text);

var _Checkbox = require('../Checkbox');

var _Checkbox2 = _interopRequireDefault(_Checkbox);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ChoiceList = function (_Component) {
  _inherits(ChoiceList, _Component);

  function ChoiceList() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, ChoiceList);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = ChoiceList.__proto__ || Object.getPrototypeOf(ChoiceList)).call.apply(_ref, [this].concat(args))), _this), _this.renderInputs = function (props) {
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
              onChange: _this.handleChange,
              disabled: _this.props.disabled
            })
          );
        });
      }
    }, _this.handleChange = function (event) {
      if (_this.props.onChange === null) {
        return;
      }
      var selectedArray = _this.props.multiple ? [].concat(_toConsumableArray(_this.props.selected), [event.id]) : [event.id];
      if (_this.props.multiple && !event.value) {
        selectedArray = selectedArray.filter(function (item) {
          return item !== event.id;
        });
      }
      _this.props.onChange({ value: selectedArray, name: _this.props.name });
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(ChoiceList, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        { className: 'choiceList' },
        _react2.default.createElement(
          'fieldset',
          null,
          _react2.default.createElement(
            'legend',
            null,
            _react2.default.createElement(
              _Text2.default,
              { size: 'regular' },
              this.props.title
            )
          ),
          _react2.default.createElement(
            'ul',
            null,
            this.renderInputs(this.props)
          )
        )
      );
    }
  }]);

  return ChoiceList;
}(_react.Component);

ChoiceList.propTypes = {
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
ChoiceList.defaultProps = {
  selected: []
};
exports.default = ChoiceList;