'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _ = require('..');

var _2 = _interopRequireDefault(_);

var _enzyme = require('enzyme');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe('Avatar', function () {
  describe('source', function () {
    it('passed the source given by props as the image ref', function () {
      var avatar = (0, _enzyme.shallow)(_react2.default.createElement(_2.default, { source: 'http://via.placeholder.com/350x350' }));
      expect(avatar.find('img').prop('src')).toBe('http://via.placeholder.com/350x350');
    });

    it('change the img for a div when empty', function () {
      var avatar = (0, _enzyme.shallow)(_react2.default.createElement(_2.default, null));
      expect(avatar.find('div').first().hasClass('avatarPlaceholder')).toBe(true);
    });
  });

  describe('size', function () {
    it('show medium by default', function () {
      var avatar = (0, _enzyme.shallow)(_react2.default.createElement(_2.default, null));
      expect(avatar.find('span').first().hasClass('avatarMedium')).toBe(true);
    });

    it('add small class when given by prop', function () {
      var avatar = (0, _enzyme.shallow)(_react2.default.createElement(_2.default, { size: 'small' }));
      expect(avatar.find('span').first().hasClass('avatarSmall')).toBe(true);
    });

    it('add large class when given by prop', function () {
      var avatar = (0, _enzyme.shallow)(_react2.default.createElement(_2.default, { size: 'large' }));
      expect(avatar.find('span').first().hasClass('avatarLarge')).toBe(true);
    });
  });

  describe('initial', function () {
    it('add the initial when given by props', function () {
      var avatar = (0, _enzyme.mount)(_react2.default.createElement(_2.default, { initial: 'FB' }));
      expect(avatar.find('div').first().text()).toBe('FB');
    });

    it('transform the initial to uppercase', function () {
      var avatar = (0, _enzyme.mount)(_react2.default.createElement(_2.default, { initial: 'Fb' }));
      expect(avatar.find('div').first().text()).toBe('FB');
    });

    it('stop after two characters', function () {
      var avatar = (0, _enzyme.mount)(_react2.default.createElement(_2.default, { initial: 'Foooo' }));
      expect(avatar.find('div').first().text()).toBe('FO');
    });
  });
});