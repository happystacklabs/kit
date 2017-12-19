'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

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

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var cx = _bind2.default.bind(_Progress2.default);

var Progress = function (_Component) {
  _inherits(Progress, _Component);

  function Progress() {
    _classCallCheck(this, Progress);

    return _possibleConstructorReturn(this, (Progress.__proto__ || Object.getPrototypeOf(Progress)).apply(this, arguments));
  }

  _createClass(Progress, [{
    key: 'render',
    value: function render() {
      var progress = this.props.progress;

      if (progress >= 100) {
        progress = 100;
      } else if (progress < 0) {
        progress = 0;
      }

      var width = progress + '%';

      var classProgress = cx({
        small: this.props.size === 'small',
        medium: this.props.size === 'medium',
        large: this.props.size === 'large' }, _Progress2.default.progressBar);

      var classInside = cx({ max: progress >= 100 }, _Progress2.default.inside);

      return _react2.default.createElement(
        'div',
        { className: classProgress },
        _react2.default.createElement('div', { className: classInside, style: { width: width } })
      );
    }
  }]);

  return Progress;
}(_react.Component);

Progress.propTypes = {
  progress: _propTypes2.default.number,
  size: _propTypes2.default.string
};
Progress.defaultProps = {
  progress: 0,
  size: 'medium'
};
exports.default = Progress;