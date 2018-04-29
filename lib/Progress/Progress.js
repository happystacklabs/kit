'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Progress = Progress;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

require('./Progress.css');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var sizes = {
  small: 'kit-progress--small',
  medium: 'kit-progress--medium',
  large: 'kit-progress--large'
};

var propTypes = {
  progress: _propTypes2.default.number,
  size: _propTypes2.default.oneOf(Object.keys(sizes)),
  className: _propTypes2.default.string
};

var defaultProps = {
  progress: 0,
  size: 'medium',
  className: undefined
};

function Progress(props) {
  var progress = props.progress;

  // cap the progress value between 0 and 100

  if (progress >= 100) {
    progress = 100;
  } else if (progress < 0) {
    progress = 0;
  }

  var width = progress + '%';
  var progressClassName = (0, _classnames2.default)('kit-progress', sizes[props.size], props.className);
  var barClassName = (0, _classnames2.default)({ 'kit-progress__bar--max': progress >= 100 }, 'kit-progress__bar');

  return _react2.default.createElement(
    'div',
    { className: progressClassName },
    _react2.default.createElement('div', { className: barClassName, style: { width: width } })
  );
}

Progress.propTypes = propTypes;
Progress.defaultProps = defaultProps;

exports.default = Progress;