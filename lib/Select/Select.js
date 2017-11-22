'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

require('./Select.css');

var _Icon = require('../Icon');

var _Icon2 = _interopRequireDefault(_Icon);

var _Text = require('../Text');

var _Text2 = _interopRequireDefault(_Text);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var renderOptions = function renderOptions(options) {
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

var renderPlaceholder = function renderPlaceholder(placeholder, value) {
  if (placeholder) {
    return _react2.default.createElement(
      'option',
      { value: '', disabled: true, hidden: true },
      placeholder
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

var renderLabel = function renderLabel(name, labelText) {
  if (labelText) {
    return _react2.default.createElement(
      'div',
      { className: 'label' },
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

var Select = function (_Component) {
  _inherits(Select, _Component);

  function Select() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Select);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Select.__proto__ || Object.getPrototypeOf(Select)).call.apply(_ref, [this].concat(args))), _this), _this.handleChange = function (event) {
      if (_this.props.onChange === null) {
        return;
      }
      _this.props.onChange({ value: event.target.value, name: _this.props.name });
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Select, [{
    key: 'render',
    value: function render() {
      var classes = ['selectInput'];

      if (this.props.error) {
        classes.push('error');
      }

      return _react2.default.createElement(
        'div',
        null,
        renderLabel(this.props.name, this.props.label),
        _react2.default.createElement(
          'div',
          { className: 'selectWrapper' },
          _react2.default.createElement(
            'select',
            {
              name: this.props.name,
              value: this.props.value,
              disabled: this.props.disabled,
              onChange: this.handleChange,
              className: classes.join(' ')
            },
            renderPlaceholder(this.props.placeholder),
            renderOptions(this.props.options)
          ),
          _react2.default.createElement(
            'div',
            { className: 'selectArrow' },
            _react2.default.createElement(_Icon2.default, {
              name: 'angle-down',
              color: 'inkLight'
            })
          )
        ),
        renderHelpText(this.props.helpText)
      );
    }
  }]);

  return Select;
}(_react.Component);

Select.propTypes = {
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
Select.defaultProps = {};
exports.default = Select;