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

var _Icon = require('../Icon');

var _Icon2 = _interopRequireDefault(_Icon);

var _Button = require('../Button');

var _Button2 = _interopRequireDefault(_Button);

var _Text = require('../Text');

var _Text2 = _interopRequireDefault(_Text);

var _copyToClipboard = require('copy-to-clipboard');

var _copyToClipboard2 = _interopRequireDefault(_copyToClipboard);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ComponentViewerCode = function (_Component) {
  _inherits(ComponentViewerCode, _Component);

  function ComponentViewerCode() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, ComponentViewerCode);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = ComponentViewerCode.__proto__ || Object.getPrototypeOf(ComponentViewerCode)).call.apply(_ref, [this].concat(args))), _this), _this.onClickCopy = function () {
      (0, _copyToClipboard2.default)(_this.getCode());
      return;
    }, _this.getCode = function () {
      var props = [];
      var children = '';

      _this.props.options.forEach(function (item) {
        if (item['name'] === 'children') {
          children = item['value'];
        }
        if (item['value'] && item['type'] !== 'function' && item['name'] !== 'children') {
          props.push({ name: item['name'], value: item['value'] });
        }
      });

      var stringArray = [];
      stringArray.push('<');
      stringArray.push(_this.props.element);
      props.forEach(function (prop) {
        stringArray.push(' ');
        stringArray.push(prop.name);
        stringArray.push('=');
        if (Array.isArray(prop.value)) {
          stringArray.push('{[');
          prop.value.forEach(function (row) {
            if (typeof row === 'string') {
              stringArray.push("'");
              stringArray.push(row);
              stringArray.push("', ");
            } else {
              stringArray.push("{label: '");
              stringArray.push(row.label);
              stringArray.push("', value: '");
              stringArray.push(row.value);
              stringArray.push("'}, ");
            }
          });
          stringArray.push(']}');
        } else {
          stringArray.push(prop.value);
        }
      });
      stringArray.push('>');
      stringArray.push(children);
      stringArray.push('</');
      stringArray.push(_this.props.element);
      stringArray.push('>');
      return stringArray.join('');
    }, _this.renderCode = function () {
      var props = [];
      var children = '';

      _this.props.options.forEach(function (item) {
        if (item['name'] === 'children') {
          children = item['value'];
        }
        if (item['value'] && item['type'] !== 'function' && item['name'] !== 'children') {
          props.push({ name: item['name'], value: item['value'] });
        }
      });

      return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(
          'span',
          null,
          '<'
        ),
        _react2.default.createElement(
          'span',
          { className: _ComponentViewer2.default.red },
          _this.props.element,
          ' '
        ),
        _this.renderProps(props),
        _react2.default.createElement(
          'span',
          null,
          '>'
        ),
        children,
        _react2.default.createElement(
          'span',
          null,
          '</'
        ),
        _react2.default.createElement(
          'span',
          { className: _ComponentViewer2.default.red },
          _this.props.element
        ),
        _react2.default.createElement(
          'span',
          null,
          '>'
        )
      );
    }, _this.renderProps = function (props) {
      var arr = [];
      props.forEach(function (prop) {
        if (typeof prop.value === 'boolean') {
          arr.push(_react2.default.createElement(
            'span',
            { key: prop.name },
            _react2.default.createElement(
              'span',
              { className: 'codeColorGreen' },
              ' ',
              prop.name
            )
          ));
        } else if (Array.isArray(prop.value)) {
          arr.push(_react2.default.createElement(
            'span',
            { key: prop.name },
            _react2.default.createElement(
              'span',
              { className: _ComponentViewer2.default.green },
              ' ',
              prop.name
            ),
            '={[',
            _react2.default.createElement('br', null),
            prop.value.map(function (row, i) {
              if (typeof row === 'string') {
                return _react2.default.createElement(
                  'span',
                  { key: i },
                  _react2.default.createElement(
                    'pre',
                    null,
                    _react2.default.createElement(
                      'span',
                      { className: _ComponentViewer2.default.yellow },
                      '\'',
                      row,
                      '\''
                    ),
                    ','
                  )
                );
              } else {
                return _react2.default.createElement(
                  'span',
                  { key: i },
                  _react2.default.createElement(
                    'pre',
                    null,
                    '{',
                    'label: ',
                    _react2.default.createElement(
                      'span',
                      { className: _ComponentViewer2.default.yellow },
                      '\'',
                      row.label,
                      '\''
                    ),
                    ', value: ',
                    _react2.default.createElement(
                      'span',
                      { className: _ComponentViewer2.default.yellow },
                      '\'',
                      row.value,
                      '\''
                    ),
                    '}',
                    ','
                  )
                );
              }
            }),
            ']}'
          ));
        } else {
          arr.push(_react2.default.createElement(
            'span',
            { key: prop.name },
            _react2.default.createElement(
              'span',
              { className: _ComponentViewer2.default.green },
              ' ',
              prop.name
            ),
            '=',
            _react2.default.createElement(
              'span',
              { className: _ComponentViewer2.default.yellow },
              '\'',
              prop.value,
              '\''
            )
          ));
        }
      });

      return _react2.default.createElement(
        'span',
        null,
        arr
      );
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(ComponentViewerCode, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        { className: _ComponentViewer2.default.code },
        _react2.default.createElement(
          'div',
          { className: _ComponentViewer2.default.codeMenu },
          _react2.default.createElement(
            _Text2.default,
            { size: 'small', color: 'inkLight', className: _ComponentViewer2.default.item },
            'React'
          ),
          _react2.default.createElement(
            _Button2.default,
            {
              onClick: this.onClickCopy,
              size: 'slim',
              square: true
            },
            _react2.default.createElement(_Icon2.default, { name: 'clone' })
          )
        ),
        _react2.default.createElement(
          _Text2.default,
          {
            element: 'span',
            size: 'regular',
            color: 'white',
            className: _ComponentViewer2.default.codeText
          },
          this.renderCode()
        )
      );
    }
  }]);

  return ComponentViewerCode;
}(_react.Component);

ComponentViewerCode.propTypes = {
  element: _propTypes2.default.string.isRequired,
  options: _propTypes2.default.array.isRequired
};
ComponentViewerCode.defaultProps = {};
exports.default = ComponentViewerCode;