'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.sizes = exports.colors = undefined;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

require('./Switch.css');

var _Switch = require('./Switch.styles');

var _Switch2 = _interopRequireDefault(_Switch);

var _bind = require('classnames/bind');

var _bind2 = _interopRequireDefault(_bind);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var cx = _bind2.default.bind(_Switch2.default);

var colors = exports.colors = {
  'positive': _Switch2.default.positive,
  'negative': _Switch2.default.negative,
  'purple': _Switch2.default.purple
};

var sizes = exports.sizes = {
  'slim': _Switch2.default.slim,
  'regular': _Switch2.default.regular,
  'large': _Switch2.default.large
};

var propTypes = {
  on: _propTypes2.default.bool.isRequired,
  round: _propTypes2.default.bool,
  color: _propTypes2.default.oneOf(Object.keys(colors)),
  size: _propTypes2.default.oneOf(Object.keys(sizes))
};

var defaultProps = {
  on: false
};

function Switch(props) {
  function handleClick(event) {
    if (props.onClick === null) {
      return;
    }
    props.onClick({ value: !props.on, name: props.name });
  };

  var classSwitch = cx({
    on: props.on,
    round: props.round }, _Switch2.default.switch, sizes[props.size], colors[props.color]);

  var classToggle = cx({
    on: props.on,
    round: props.round }, _Switch2.default.toggle, sizes[props.size]);

  return _react2.default.createElement(
    'div',
    { className: props.className },
    _react2.default.createElement(
      'div',
      {
        className: classSwitch,
        onClick: handleClick
      },
      _react2.default.createElement('div', { className: classToggle })
    )
  );
}

Switch.propTypes = propTypes;
Switch.defaultProps = defaultProps;

exports.default = Switch;