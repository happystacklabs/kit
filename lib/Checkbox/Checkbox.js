'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.type = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

require('./Checkbox.css');

var _Icon = require('../Icon');

var _Icon2 = _interopRequireDefault(_Icon);

var _Text = require('../Text');

var _Text2 = _interopRequireDefault(_Text);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var renderLabel = function renderLabel(name, labelText) {
  if (labelText) {
    return _react2.default.createElement(
      'label',
      { htmlFor: name },
      _react2.default.createElement(
        _Text2.default,
        { size: 'regular' },
        labelText
      )
    );
  }
};

var renderHelpText = function renderHelpText(helpText) {
  if (helpText) {
    return _react2.default.createElement(
      'div',
      { className: 'helpText' },
      _react2.default.createElement(
        _Text2.default,
        { color: 'inkLight', element: 'span', size: 'small' },
        helpText
      )
    );
  }
};

var renderCheckmark = function renderCheckmark(type) {
  if (type === 'checkbox') {
    return _react2.default.createElement(_Icon2.default, { name: 'check', color: 'white', className: 'checkmark' });
  } else {
    return _react2.default.createElement('div', { className: 'radioMiddle' });
  }
};

var type = exports.type = ['checkbox', 'radio'];

var Checkbox = function (_Component) {
  _inherits(Checkbox, _Component);

  function Checkbox() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Checkbox);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Checkbox.__proto__ || Object.getPrototypeOf(Checkbox)).call.apply(_ref, [this].concat(args))), _this), _this.handleChange = function (event) {
      if (_this.props.onChange === null) {
        return;
      }
      _this.props.onChange({ value: !_this.props.checked, id: _this.props.id });
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Checkbox, [{
    key: 'render',
    value: function render() {
      var classes = ['checkboxInnerWrapper'];

      if (this.props.checked) {
        classes.push('checked');
      }

      if (this.props.error) {
        classes.push('checkboxError');
      }

      if (this.props.type === 'radio') {
        classes.push('radioInput');
      }

      return _react2.default.createElement(
        'div',
        { className: 'checkboxWrapper' },
        renderLabel(this.props.id, this.props.label),
        _react2.default.createElement(
          'div',
          { className: classes.join(' ') },
          _react2.default.createElement('input', {
            name: this.props.name,
            type: this.props.type,
            id: this.props.id,
            value: this.props.value,
            checked: this.props.checked,
            onChange: this.handleChange,
            disabled: this.props.disabled
          }),
          renderCheckmark(this.props.type)
        ),
        renderHelpText(this.props.helpText)
      );
    }
  }]);

  return Checkbox;
}(_react.Component);

Checkbox.propTypes = {
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
Checkbox.defaultProps = {
  type: 'checkbox',
  checked: false
};
exports.default = Checkbox;