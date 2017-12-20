'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

require('./Paginator.css');

var _Paginator = require('./Paginator.styles');

var _Paginator2 = _interopRequireDefault(_Paginator);

var _Button = require('../Button');

var _Button2 = _interopRequireDefault(_Button);

var _Icon = require('../Icon');

var _Icon2 = _interopRequireDefault(_Icon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var propTypes = {
  disableNext: _propTypes2.default.bool,
  disablePrevious: _propTypes2.default.bool,
  plain: _propTypes2.default.bool,
  onNext: _propTypes2.default.func,
  onPrevious: _propTypes2.default.func
};

function Paginator(props) {
  return _react2.default.createElement(
    'nav',
    { className: props.className },
    _react2.default.createElement(
      'div',
      { className: _Paginator2.default.left },
      _react2.default.createElement(
        _Button2.default,
        {
          size: 'large',
          disabled: props.disablePrevious,
          onClick: props.onPrevious,
          plain: props.plain
        },
        _react2.default.createElement(_Icon2.default, {
          name: 'chevron-left',
          color: 'purple'
        })
      )
    ),
    _react2.default.createElement(
      'div',
      { className: _Paginator2.default.right },
      _react2.default.createElement(
        _Button2.default,
        {
          size: 'large',
          disabled: props.disableNext,
          onClick: props.onNext,
          plain: props.plain
        },
        _react2.default.createElement(_Icon2.default, {
          name: 'chevron-right',
          color: 'purple'
        })
      )
    )
  );
}

Paginator.propTypes = propTypes;

exports.default = Paginator;