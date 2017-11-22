'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _ = require('..');

var _2 = _interopRequireDefault(_);

var _enzyme = require('enzyme');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe('Skeleton', function () {
  describe('lines', function () {
    it('render 3 lines by default', function () {
      var skeleton = (0, _enzyme.shallow)(_react2.default.createElement(_2.default, null));
      expect(skeleton.find('div').at(1).hasClass('skeletonLine')).toBe(true);
      expect(skeleton.find('div').at(2).hasClass('skeletonLine')).toBe(true);
      expect(skeleton.find('div').at(3).hasClass('skeletonLine')).toBe(true);
    });

    it('add the number of lines given by props', function () {
      var skeleton = (0, _enzyme.shallow)(_react2.default.createElement(_2.default, { lines: 5 }));
      expect(skeleton.find('div').at(5).hasClass('skeletonLine')).toBe(true);
    });
  });

  describe('display', function () {
    it('change the lines for a display div', function () {
      var skeleton = (0, _enzyme.shallow)(_react2.default.createElement(_2.default, { display: true }));
      expect(skeleton.find('div').at(1).hasClass('skeletonDisplay')).toBe(true);
    });
  });
});