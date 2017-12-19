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

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var cx = _bind2.default.bind(_TextInput2.default);

var renderError = function renderError(error) {
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
};

var renderHelpText = function renderHelpText(helpText) {
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
};

var renderLabel = function renderLabel(name, labelText) {
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
};

var renderAction = function renderAction(action) {
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
};

var type = exports.type = ['email', 'text', 'number', 'password', 'search', 'url'];

var TextInput = function (_Component) {
  _inherits(TextInput, _Component);

  function TextInput() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, TextInput);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = TextInput.__proto__ || Object.getPrototypeOf(TextInput)).call.apply(_ref, [this].concat(args))), _this), _this.handleChange = function (event) {
      if (_this.props.onChange === null) {
        return;
      }
      _this.props.onChange({ name: _this.props.name, value: event.target.value });
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(TextInput, [{
    key: 'render',
    value: function render() {
      var readOnly = !this.props.readOnly && this.props.onChange ? false : true;

      var classInput = cx({
        shake: this.props.shake || this.props.maxLength && this.props.value.length >= this.props.maxLength,
        error: this.props.error }, _TextInput2.default.input);

      return _react2.default.createElement(
        'div',
        { className: this.props.className },
        renderLabel(this.props.name, this.props.label),
        renderAction(this.props.action),
        _react2.default.createElement('input', {
          name: this.props.name,
          value: this.props.value,
          placeholder: this.props.placeholder,
          onChange: this.handleChange,
          readOnly: readOnly,
          disabled: this.props.disabled,
          className: classInput,
          maxLength: this.props.maxLength,
          type: this.props.type
        }),
        renderError(this.props.error),
        renderHelpText(this.props.helpText)
      );
    }
  }]);

  return TextInput;
}(_react.Component);

TextInput.propTypes = {
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
    onAction: _propTypes2.default.function
  })
};
TextInput.defaultProps = {
  type: 'text'
};
exports.default = TextInput;