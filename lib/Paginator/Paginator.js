'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

require('./Paginator.css');

var _Button = require('../Button/Button');

var _Button2 = _interopRequireDefault(_Button);

var _Icon = require('../Icon/Icon');

var _Icon2 = _interopRequireDefault(_Icon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var propTypes = {
  disableNext: _propTypes2.default.bool,
  disablePrevious: _propTypes2.default.bool,
  plain: _propTypes2.default.bool,
  fullWidth: _propTypes2.default.bool,
  onNext: _propTypes2.default.func,
  onPrevious: _propTypes2.default.func,
  className: _propTypes2.default.string
};

var defaultProps = {
  disableNext: false,
  disablePrevious: false,
  plain: false,
  fullWidth: false,
  onNext: undefined,
  onPrevious: undefined,
  className: undefined
};

function Paginator(props) {
  var previousClassName = (0, _classnames2.default)({ 'kit-paginator__left--disabled': props.disablePrevious }, 'kit-paginator__left');

  var nextClassName = (0, _classnames2.default)({ 'kit-paginator__right--disabled': props.disableNext }, 'kit-paginator__right');
  return _react2.default.createElement(
    'nav',
    { className: (0, _classnames2.default)({ 'kit-paginator--full-width': props.fullWidth }, props.className) },
    _react2.default.createElement(
      'div',
      { className: previousClassName },
      _react2.default.createElement(
        _Button2.default,
        {
          size: 'large',
          disabled: props.disablePrevious,
          onClick: props.onPrevious,
          plain: props.plain,
          className: 'kit-paginator__left-button'
        },
        _react2.default.createElement(_Icon2.default, {
          className: 'kit-paginator__left-icon',
          name: 'chevron-left',
          color: 'main'
        })
      )
    ),
    _react2.default.createElement(
      'div',
      { className: nextClassName },
      _react2.default.createElement(
        _Button2.default,
        {
          size: 'large',
          disabled: props.disableNext,
          onClick: props.onNext,
          plain: props.plain,
          className: 'kit-paginator__right-button'
        },
        _react2.default.createElement(_Icon2.default, {
          className: 'kit-paginator__right-icon',
          name: 'chevron-right',
          color: 'main'
        })
      )
    )
  );
}

Paginator.propTypes = propTypes;
Paginator.defaultProps = defaultProps;

exports.default = Paginator;