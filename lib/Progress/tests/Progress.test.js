'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _ = require('..');

var _2 = _interopRequireDefault(_);

var _enzyme = require('enzyme');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe('Progress', function () {
  it('render the progress bar', function () {
    var progress = (0, _enzyme.shallow)(_react2.default.createElement(_2.default, null));
    expect(progress.find('div').first().hasClass('progressBar')).toBe(true);
  });

  describe('size', function () {
    it('render the medium size by default', function () {
      var progress = (0, _enzyme.shallow)(_react2.default.createElement(_2.default, null));
      expect(progress.find('div').first().hasClass('progressMedium')).toBe(true);
    });

    it('render the small size when given by props', function () {
      var progress = (0, _enzyme.shallow)(_react2.default.createElement(_2.default, { size: 'small' }));
      expect(progress.find('div').first().hasClass('progressSmall')).toBe(true);
    });

    it('render the large size when given by props', function () {
      var progress = (0, _enzyme.shallow)(_react2.default.createElement(_2.default, { size: 'large' }));
      expect(progress.find('div').first().hasClass('progressLarge')).toBe(true);
    });
  });

  describe('progress', function () {
    it('add a style with the appropriate width passed by props', function () {
      var progress = (0, _enzyme.shallow)(_react2.default.createElement(_2.default, { progress: 50 }));
      expect(progress.find('div').at(1).prop('style')).toEqual({ "width": "50%" });
    });

    it('limit the boundary between 0 and 100', function () {
      var progress = (0, _enzyme.shallow)(_react2.default.createElement(_2.default, { progress: 200 }));
      expect(progress.find('div').at(1).prop('style')).toEqual({ "width": "100%" });
    });
  });
});