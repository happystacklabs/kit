'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.sizes = exports.colors = exports.icons = undefined;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactFontawesome = require('@fortawesome/react-fontawesome');

var _reactFontawesome2 = _interopRequireDefault(_reactFontawesome);

var _fontawesomeFreeSolid = require('@fortawesome/fontawesome-free-solid');

var _fontawesomeFreeSolid2 = _interopRequireDefault(_fontawesomeFreeSolid);

var _fontawesomeFreeBrands = require('@fortawesome/fontawesome-free-brands');

var _fontawesomeFreeBrands2 = _interopRequireDefault(_fontawesomeFreeBrands);

require('@fortawesome/fontawesome-free-regular');

require('./Icon.css');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

var brandIcons = Object.keys(_fontawesomeFreeBrands2.default).map(function (icon) {
  return _fontawesomeFreeBrands2.default[icon].iconName;
});
var solidIcons = Object.keys(_fontawesomeFreeSolid2.default).map(function (icon) {
  return _fontawesomeFreeSolid2.default[icon].iconName;
});
var icons = exports.icons = [].concat(_toConsumableArray(solidIcons), _toConsumableArray(brandIcons));

var colors = exports.colors = {
  ink: 'kit-icon--ink',
  'ink-light': 'kit-icon--ink-light',
  positive: 'kit-icon--positive',
  negative: 'kit-icon--negative',
  main: 'kit-icon--main',
  white: 'kit-icon--white'
};

var sizes = exports.sizes = ['xs', 'sm', 'lg', '2x', '3x', '5x', '7x', '10x'];

var propTypes = {
  name: _propTypes2.default.oneOf(icons),
  color: _propTypes2.default.oneOf(Object.keys(colors)),
  size: _propTypes2.default.oneOf(sizes),
  regular: _propTypes2.default.bool,
  spin: _propTypes2.default.bool,
  fixedWidth: _propTypes2.default.bool,
  className: _propTypes2.default.string
};

var defaultProps = {
  name: undefined,
  color: 'ink',
  size: 'sm',
  regular: false,
  spin: false,
  fixedWidth: false,
  className: undefined
};

function Icon(props) {
  var iconClassName = (0, _classnames2.default)(props.className, colors[props.color]);

  var iconType = props.regular ? 'far' : 'fas';
  iconType = brandIcons.includes(props.name) ? 'fab' : iconType;

  return _react2.default.createElement(_reactFontawesome2.default, {
    className: iconClassName,
    icon: [iconType, props.name],
    spin: props.spin,
    size: props.size,
    fixedWidth: props.fixedWidth
  });
}

Icon.propTypes = propTypes;
Icon.defaultProps = defaultProps;

exports.default = Icon;