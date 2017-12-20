'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

require('./Progress.css');

var _Progress = require('./Progress.styles');

var _Progress2 = _interopRequireDefault(_Progress);

var _bind = require('classnames/bind');

var _bind2 = _interopRequireDefault(_bind);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var cx = _bind2.default.bind(_Progress2.default);

var propTypes = {
  progress: _propTypes2.default.number,
  size: _propTypes2.default.string
};

var defaultProps = {
  progress: 0,
  size: 'medium'
};

function Progress(props) {
  var progress = props.progress;

  // cap the progress value between 0 - 100
  if (progress >= 100) {
    progress = 100;
  } else if (progress < 0) {
    progress = 0;
  }

  var width = progress + '%';

  var classProgress = cx({
    small: props.size === 'small',
    medium: props.size === 'medium',
    large: props.size === 'large' }, _Progress2.default.progressBar);

  var classInside = cx({ max: progress >= 100 }, _Progress2.default.inside);

  return _react2.default.createElement(
    'div',
    { className: classProgress },
    _react2.default.createElement('div', { className: classInside, style: { width: width } })
  );
}

Progress.propTypes = propTypes;
Progress.defaultProps = defaultProps;

exports.default = Progress;