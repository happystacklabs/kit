'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _ComponentViewer = require('./ComponentViewer.css');

var _ComponentViewer2 = _interopRequireDefault(_ComponentViewer);

var _Text = require('../Text');

var _Text2 = _interopRequireDefault(_Text);

var _TextInput = require('../TextInput');

var _TextInput2 = _interopRequireDefault(_TextInput);

var _Select = require('../Select');

var _Select2 = _interopRequireDefault(_Select);

var _Switch = require('../Switch');

var _Switch2 = _interopRequireDefault(_Switch);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ComponentViewerRow = function (_Component) {
  _inherits(ComponentViewerRow, _Component);

  function ComponentViewerRow() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, ComponentViewerRow);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = ComponentViewerRow.__proto__ || Object.getPrototypeOf(ComponentViewerRow)).call.apply(_ref, [this].concat(args))), _this), _this.getOptions = function () {
      var options = _this.props.type.map(function (option, index) {
        return { label: option, value: option };
      });
      return options;
    }, _this.getType = function () {
      if (_this.props.type === 'string') {
        return 'string';
      } else if (Array.isArray(_this.props.type) || _this.props.type === 'array') {
        return 'array';
      } else if (_this.props.type === 'bool') {
        return 'bool';
      } else if (_this.props.type === 'function') {
        return 'function';
      } else if (_this.props.type === 'number') {
        return 'number';
      } else if (_this.props.type === 'object') {
        return 'object';
      } else if (_this.props.type === 'node') {
        return 'node';
      }
    }, _this.renderInput = function () {
      if (_this.props.type === 'string') {
        return _react2.default.createElement(_TextInput2.default, {
          name: _this.props.name,
          onChange: _this.props.onChange,
          value: _this.props.value
        });
      } else if (Array.isArray(_this.props.type)) {
        return _react2.default.createElement(_Select2.default, {
          name: _this.props.name,
          onChange: _this.props.onChange,
          value: _this.props.value,
          options: _this.getOptions()
        });
      } else if (_this.props.type === 'bool') {
        return _react2.default.createElement(_Switch2.default, {
          name: _this.props.name,
          onClick: _this.props.onClick,
          on: _this.props.value
        });
      } else if (_this.props.type === 'function') {
        return;
      } else if (_this.props.type === 'node') {
        return;
      } else if (_this.props.type === 'number') {
        return _react2.default.createElement(_TextInput2.default, {
          name: _this.props.name,
          onChange: _this.props.onChange,
          value: _this.props.value,
          type: 'number'
        });
      }
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(ComponentViewerRow, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'tr',
        { key: this.key },
        _react2.default.createElement(
          'td',
          { className: _ComponentViewer2.default.bottomLine },
          _react2.default.createElement(
            _Text2.default,
            { color: 'purple', size: 'small' },
            this.props.name
          )
        ),
        _react2.default.createElement(
          'td',
          { className: _ComponentViewer2.default.bottomLine },
          _react2.default.createElement(
            _Text2.default,
            { color: 'inkLight', size: 'small' },
            this.getType()
          )
        ),
        _react2.default.createElement(
          'td',
          { className: _ComponentViewer2.default.bottomLine },
          _react2.default.createElement(
            _Text2.default,
            null,
            this.props.description
          )
        ),
        _react2.default.createElement(
          'td',
          null,
          this.renderInput()
        )
      );
    }
  }]);

  return ComponentViewerRow;
}(_react.Component);

ComponentViewerRow.propTypes = {
  name: _propTypes2.default.string.isRequired,
  value: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.array, _propTypes2.default.bool, _propTypes2.default.func, _propTypes2.default.number]),
  description: _propTypes2.default.string,
  type: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.array, _propTypes2.default.bool, _propTypes2.default.func]).isRequired
};
ComponentViewerRow.defaultProps = {};
exports.default = ComponentViewerRow;