'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _ = require('..');

var _2 = _interopRequireDefault(_);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe('Text', function () {
  describe('children', function () {
    it('show in text', function () {
      var text = shallow(_react2.default.createElement(
        _2.default,
        null,
        'foo'
      ));
      expect(text.text()).toBe('foo');
    });

    it('can be optional', function () {
      var text = shallow(_react2.default.createElement(_2.default, null));
      expect(text.text()).toBe('');
    });
  });

  describe('type', function () {
    it('show span by default', function () {
      var text = shallow(_react2.default.createElement(
        _2.default,
        null,
        'foo'
      ));
      expect(text.type()).toBe('span');
    });

    it('show p when given by props', function () {
      var text = shallow(_react2.default.createElement(
        _2.default,
        { element: 'p' },
        'foo'
      ));
      expect(text.type()).toBe('p');
    });

    it('show h1 when given by props', function () {
      var text = shallow(_react2.default.createElement(
        _2.default,
        { element: 'h1' },
        'foo'
      ));
      expect(text.type()).toBe('h1');
    });

    it('show h2 when given by props', function () {
      var text = shallow(_react2.default.createElement(
        _2.default,
        { element: 'h2' },
        'foo'
      ));
      expect(text.type()).toBe('h2');
    });

    it('show h3 when given by props', function () {
      var text = shallow(_react2.default.createElement(
        _2.default,
        { element: 'h3' },
        'foo'
      ));
      expect(text.type()).toBe('h3');
    });

    it('show h4 when given by props', function () {
      var text = shallow(_react2.default.createElement(
        _2.default,
        { element: 'h4' },
        'foo'
      ));
      expect(text.type()).toBe('h4');
    });

    it('show h5 when given by props', function () {
      var text = shallow(_react2.default.createElement(
        _2.default,
        { element: 'h5' },
        'foo'
      ));
      expect(text.type()).toBe('h5');
    });

    it('show h6 when given by props', function () {
      var text = shallow(_react2.default.createElement(
        _2.default,
        { element: 'h6' },
        'foo'
      ));
      expect(text.type()).toBe('h6');
    });
  });

  describe('size', function () {
    it('show regular by default', function () {
      var text = shallow(_react2.default.createElement(
        _2.default,
        null,
        'foo'
      ));
      expect(text.hasClass('regular')).toBe(true);
    });

    it('show small when given by props', function () {
      var text = shallow(_react2.default.createElement(
        _2.default,
        { size: 'small' },
        'foo'
      ));
      expect(text.hasClass('small')).toBe(true);
    });

    it('show medium when given by props', function () {
      var text = shallow(_react2.default.createElement(
        _2.default,
        { size: 'medium' },
        'foo'
      ));
      expect(text.hasClass('medium')).toBe(true);
    });

    it('show large when given by props', function () {
      var text = shallow(_react2.default.createElement(
        _2.default,
        { size: 'large' },
        'foo'
      ));
      expect(text.hasClass('large')).toBe(true);
    });

    it('show extra large when given by props', function () {
      var text = shallow(_react2.default.createElement(
        _2.default,
        { size: 'extraLarge' },
        'foo'
      ));
      expect(text.hasClass('extraLarge')).toBe(true);
    });

    it('show extra small when given by props', function () {
      var text = shallow(_react2.default.createElement(
        _2.default,
        { size: 'extraSmall' },
        'foo'
      ));
      expect(text.hasClass('extraSmall')).toBe(true);
    });
  });

  describe('weight', function () {
    it('show normal by default', function () {
      var text = shallow(_react2.default.createElement(
        _2.default,
        null,
        'foo'
      ));
      expect(text.hasClass('normalWeight')).toBe(true);
    });

    it('show bold when given by props', function () {
      var text = shallow(_react2.default.createElement(
        _2.default,
        { weight: 'bold' },
        'foo'
      ));
      expect(text.hasClass('boldWeight')).toBe(true);
    });
  });

  describe('color', function () {
    it('should be ink by default', function () {
      var text = shallow(_react2.default.createElement(_2.default, null));
      expect(text.find('span').hasClass('ink')).toBe(true);
    });

    it('is inkLight when given by props', function () {
      var text = shallow(_react2.default.createElement(_2.default, { color: 'inkLight' }));
      expect(text.find('span').hasClass('inkLight')).toBe(true);
    });

    it('is positive when given by props', function () {
      var text = shallow(_react2.default.createElement(_2.default, { color: 'positive' }));
      expect(text.find('span').hasClass('positive')).toBe(true);
    });

    it('is negative when given by props', function () {
      var text = shallow(_react2.default.createElement(_2.default, { color: 'negative' }));
      expect(text.find('span').hasClass('negative')).toBe(true);
    });

    it('is white when given by props', function () {
      var text = shallow(_react2.default.createElement(_2.default, { color: 'white' }));
      expect(text.find('span').hasClass('white')).toBe(true);
    });

    it('is purple when given by props', function () {
      var text = shallow(_react2.default.createElement(_2.default, { color: 'purple' }));
      expect(text.find('span').hasClass('purple')).toBe(true);
    });
  });
});