'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

require('./ComponentViewer.css');

var _Text = require('../Text');

var _Text2 = _interopRequireDefault(_Text);

var _ComponentViewerList = require('./ComponentViewerList');

var _ComponentViewerList2 = _interopRequireDefault(_ComponentViewerList);

var _ComponentViewerCode = require('./ComponentViewerCode');

var _ComponentViewerCode2 = _interopRequireDefault(_ComponentViewerCode);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ComponentViewer = function (_Component) {
  _inherits(ComponentViewer, _Component);

  function ComponentViewer() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, ComponentViewer);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = ComponentViewer.__proto__ || Object.getPrototypeOf(ComponentViewer)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      options: _this.props.options
    }, _this.onInputChange = function (event) {
      // Make a clone of state
      var newState = Object.assign({}, _this.state);
      // Find the index of the onChange option
      var index = newState['options'].findIndex(function (x) {
        return x.name === event.name;
      });
      newState['options'][index]['value'] = event.value;
      _this.setState(newState);
    }, _this.onChildrenChange = function (event) {
      // Make a clone of state
      var newState = Object.assign({}, _this.state);
      // Find the index of the onChange option
      var indexOnChange = newState['options'].findIndex(function (x) {
        return x.name === 'onChange';
      });
      // Get the value of the Onchange option, it contains the name of the option to update
      var fieldValue = newState['options'][indexOnChange]['value'];
      // Find the index of the option to update
      var indexValue = newState['options'].findIndex(function (x) {
        return x.name === fieldValue;
      });
      // Update the option value with the event value
      newState['options'][indexValue]['value'] = event.value;
      // Update the state
      _this.setState(newState);
    }, _this.onChildrenClick = function (event) {
      // Make a clone of state
      var newState = Object.assign({}, _this.state);
      // Find the index of the onClick option
      var indexOnClick = newState['options'].findIndex(function (x) {
        return x.name === 'onClick';
      });
      // Get the value of the Onclick option, it contains the name of the option to update
      var fieldValue = newState['options'][indexOnClick]['value'];
      // Fail Safe
      if (fieldValue === false) {
        return;
      }
      // Find the index of the option to update
      var indexValue = newState['options'].findIndex(function (x) {
        return x.name === fieldValue;
      });
      // Update the option value with the event value
      newState['options'][indexValue]['value'] = event.value;
      // Update the state
      _this.setState(newState);
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(ComponentViewer, [{
    key: 'render',
    value: function render() {
      var onChildrenChange = this.onChildrenChange;
      var onChildrenClick = this.onChildrenClick;
      // When cloning the element passed by children we want to init the props from options
      var newProps = this.state.options.reduce(function (object, item) {
        if (item['name'] === 'onChange') {
          object[item['name']] = onChildrenChange;
          return object;
        } else if (item['value'] === '' && Array.isArray(item['type'])) {
          return object;
        } else if (item['name'] === 'onClick') {
          object[item['name']] = onChildrenClick;
          return object;
        } else if (item['type'] === 'node') {
          return object;
        } else {
          object[item['name']] = item['value'];
          return object;
        }
      }, {});

      return _react2.default.createElement(
        'div',
        { className: 'ComponentViewer' },
        _react2.default.createElement(
          _Text2.default,
          { element: 'h1', className: 'viewerH1', size: 'extraLarge' },
          this.props.children.type.name
        ),
        _react2.default.createElement(
          'div',
          { className: 'viewerExample' },
          _react2.default.createElement(
            _Text2.default,
            { size: 'medium', element: 'h2' },
            'Example'
          ),
          _react2.default.createElement(
            'div',
            { className: 'viewerElement' },
            _react2.default.cloneElement(this.props.children, newProps)
          )
        ),
        _react2.default.createElement(_ComponentViewerCode2.default, {
          element: this.props.children.type.name,
          options: this.state.options
        }),
        _react2.default.createElement(_ComponentViewerList2.default, {
          options: this.state.options,
          onChange: this.onInputChange,
          onClick: this.onInputChange
        })
      );
    }
  }]);

  return ComponentViewer;
}(_react.Component);

ComponentViewer.propTypes = {
  children: _propTypes2.default.element,
  options: _propTypes2.default.array
};
ComponentViewer.defaultProps = {};
exports.default = ComponentViewer;