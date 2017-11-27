'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _ = require('..');

var _2 = _interopRequireDefault(_);

var _enzyme = require('enzyme');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe('Thumbnail', function () {
  describe('source', function () {
    it('passed the source given by props as the image ref', function () {
      var thumbnail = (0, _enzyme.shallow)(_react2.default.createElement(_2.default, { alt: 'Foo', source: 'http://via.placeholder.com/350x350' }));
      expect(thumbnail.find('img').prop('src')).toBe('http://via.placeholder.com/350x350');
    });

    it('change the img for a div when empty', function () {
      var thumbnail = (0, _enzyme.shallow)(_react2.default.createElement(_2.default, { alt: 'Foo' }));
      expect(thumbnail.find('div').first().hasClass('placeholder')).toBe(true);
    });
  });

  describe('size', function () {
    it('show medium by default', function () {
      var thumbnail = (0, _enzyme.shallow)(_react2.default.createElement(_2.default, { alt: 'Foo' }));
      expect(thumbnail.find('span').first().hasClass('medium')).toBe(true);
    });

    it('add small class when given by prop', function () {
      var thumbnail = (0, _enzyme.shallow)(_react2.default.createElement(_2.default, { size: 'small', alt: 'Foo' }));
      expect(thumbnail.find('span').first().hasClass('small')).toBe(true);
    });

    it('add large class when given by prop', function () {
      var thumbnail = (0, _enzyme.shallow)(_react2.default.createElement(_2.default, { size: 'large', alt: 'Foo' }));
      expect(thumbnail.find('span').first().hasClass('large')).toBe(true);
    });
  });

  describe('alt', function () {
    it('should display an alt text in the image when given by props', function () {
      var thumbnail = (0, _enzyme.shallow)(_react2.default.createElement(_2.default, { alt: 'Foo', source: 'Bar' }));
      expect(thumbnail.find('img').prop('alt')).toBe('Foo');
    });
  });
});