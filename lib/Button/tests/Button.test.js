'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _ = require('..');

var _2 = _interopRequireDefault(_);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe('Button', function () {
  describe('children', function () {
    it('show the text', function () {
      var button = shallow(_react2.default.createElement(
        _2.default,
        null,
        'Foo'
      )).find('button');
      expect(button.text()).toBe('Foo');
    });
  });

  describe('onClick()', function () {
    it('is called when the button is clicked', function () {
      var spy = jest.fn();
      shallow(_react2.default.createElement(
        _2.default,
        { onClick: spy },
        'Test'
      )).simulate('click');
      expect(spy).toHaveBeenCalled();
    });
  });

  describe('disabled', function () {
    it('sets the disabled attribute when given by props', function () {
      var button = shallow(_react2.default.createElement(
        _2.default,
        { disabled: true },
        'Foo'
      ));
      expect(button.find('button').prop('disabled')).toBe(true);
    });
  });

  describe('size', function () {
    it('show regular by default', function () {
      var text = shallow(_react2.default.createElement(
        _2.default,
        { size: 'regular' },
        'foo'
      ));
      expect(text.hasClass('regular')).toBe(true);
    });

    it('show slim when given by props', function () {
      var text = shallow(_react2.default.createElement(
        _2.default,
        { size: 'slim' },
        'foo'
      ));
      expect(text.hasClass('slim')).toBe(true);
    });

    it('show large when given by props', function () {
      var text = shallow(_react2.default.createElement(
        _2.default,
        { size: 'large' },
        'foo'
      ));
      expect(text.hasClass('large')).toBe(true);
    });
  });

  describe('square', function () {
    it('show square when given by props', function () {
      var text = shallow(_react2.default.createElement(_2.default, { square: true }));
      expect(text.hasClass('square')).toBe(true);
    });
  });

  describe('color', function () {
    it('is positive when given by props', function () {
      var button = shallow(_react2.default.createElement(_2.default, { color: 'positive' }));
      expect(button.find('button').hasClass('positive')).toBe(true);
    });

    it('is negative when given by props', function () {
      var button = shallow(_react2.default.createElement(_2.default, { color: 'negative' }));
      expect(button.find('button').hasClass('negative')).toBe(true);
    });

    it('is purple when given by props', function () {
      var button = shallow(_react2.default.createElement(_2.default, { color: 'purple' }));
      expect(button.find('button').hasClass('purple')).toBe(true);
    });
  });

  describe('fullWidth', function () {
    it('add fullWidth css selector when given by props', function () {
      var button = shallow(_react2.default.createElement(_2.default, { fullWidth: true }));
      expect(button.find('button').hasClass('fullWidth')).toBe(true);
    });
  });

  describe('plain', function () {
    it('add buttonPlain css selector when given by props', function () {
      var button = shallow(_react2.default.createElement(_2.default, { plain: true }));
      expect(button.find('button').hasClass('plain')).toBe(true);
    });
  });

  describe('outline', function () {
    it('add buttonOutline css selector when given by props', function () {
      var button = shallow(_react2.default.createElement(_2.default, { outline: true }));
      expect(button.find('button').hasClass('outline')).toBe(true);
    });
  });
  describe('loading', function () {
    it('render spinner when given by props', function () {
      var button = shallow(_react2.default.createElement(_2.default, { loading: true }));
      expect(button.find('div').first().hasClass('loading')).toBe(true);
    });

    it('disable the button', function () {
      var button = shallow(_react2.default.createElement(_2.default, { loading: true }));
      expect(button.find('button').prop('disabled')).toBe(true);
    });
  });
});