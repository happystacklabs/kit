'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _ = require('..');

var _2 = _interopRequireDefault(_);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe('Spinner', function () {
  it('render a div with class spinner', function () {
    var spinner = shallow(_react2.default.createElement(_2.default, null));
    expect(spinner.find('div').hasClass('spinner')).toBe(true);
  });

  describe('type', function () {
    it('show the loader 1 by default', function () {
      var spinner = shallow(_react2.default.createElement(_2.default, null));
      expect(spinner.find('div').hasClass('loader1')).toBe(true);
    });

    it('show the loader 2 when given by props', function () {
      var spinner = shallow(_react2.default.createElement(_2.default, { type: 'loader2' }));
      expect(spinner.find('div').hasClass('loader2')).toBe(true);
    });
  });

  describe('color', function () {
    it('should be ink by default', function () {
      var spinner = shallow(_react2.default.createElement(_2.default, null));
      expect(spinner.find('div').hasClass('ink')).toBe(true);
    });

    it('is inkLight when given by props', function () {
      var spinner = shallow(_react2.default.createElement(_2.default, { color: 'inkLight' }));
      expect(spinner.find('div').hasClass('inkLight')).toBe(true);
    });

    it('is positive when given by props', function () {
      var spinner = shallow(_react2.default.createElement(_2.default, { color: 'positive' }));
      expect(spinner.find('div').hasClass('positive')).toBe(true);
    });

    it('is negative when given by props', function () {
      var spinner = shallow(_react2.default.createElement(_2.default, { color: 'negative' }));
      expect(spinner.find('div').hasClass('negative')).toBe(true);
    });

    it('is purple when given by props', function () {
      var spinner = shallow(_react2.default.createElement(_2.default, { color: 'purple' }));
      expect(spinner.find('div').hasClass('purple')).toBe(true);
    });

    it('is white when given by props', function () {
      var spinner = shallow(_react2.default.createElement(_2.default, { color: 'white' }));
      expect(spinner.find('div').hasClass('white')).toBe(true);
    });
  });

  describe('size', function () {
    it('show regular by default', function () {
      var spinner = shallow(_react2.default.createElement(_2.default, null));
      expect(spinner.find('div').hasClass('regular')).toBe(true);
    });

    it('show small when given by props', function () {
      var spinner = shallow(_react2.default.createElement(_2.default, { size: 'small' }));
      expect(spinner.find('div').hasClass('small')).toBe(true);
    });

    it('show large when given by props', function () {
      var spinner = shallow(_react2.default.createElement(_2.default, { size: 'large' }));
      expect(spinner.find('div').hasClass('large')).toBe(true);
    });
  });
});