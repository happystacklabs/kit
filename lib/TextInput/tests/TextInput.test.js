'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _enzyme = require('enzyme');

var _ = require('..');

var _2 = _interopRequireDefault(_);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe('TextInput', function () {
  it('set all props', function () {
    var textInput = (0, _enzyme.shallow)(_react2.default.createElement(_2.default, {
      name: 'Foo',
      value: 'Bar',
      placeholder: 'Baz',
      readOnly: true,
      disabled: true,
      maxLength: 2
    })).find('input');
    expect(textInput.prop('name')).toBe('Foo');
    expect(textInput.prop('value')).toBe('Bar');
    expect(textInput.prop('placeholder')).toBe('Baz');
    expect(textInput.prop('readOnly')).toBe(true);
    expect(textInput.prop('disabled')).toBe(true);
    expect(textInput.prop('maxLength')).toBe(2);
  });

  describe('onChange()', function () {
    it('is called with the new value', function () {
      var spy = jest.fn();
      var wrapper = (0, _enzyme.mount)(_react2.default.createElement(_2.default, { name: 'foo', onChange: spy }));
      var input = wrapper.find('input');
      input.simulate('change', { target: { name: 'foo', value: 'Changed' } });
      expect(spy).toHaveBeenCalled();
    });
  });

  describe('maxLenght', function () {
    it('stop the value at max length', function () {
      // TODO: Make a test for the max length
    });

    it('add shake on max lenght', function () {
      var input = (0, _enzyme.shallow)(_react2.default.createElement(_2.default, { name: 'Foo', value: 'Foo Bar', maxLength: 2 }));
      expect(input.find('input').hasClass('shake')).toBe(true);
    });
  });

  describe('shake', function () {
    it('add shake style tag', function () {
      var input = (0, _enzyme.shallow)(_react2.default.createElement(_2.default, { name: 'Foo', shake: true }));
      expect(input.find('input').hasClass('shake')).toBe(true);
    });
  });

  describe('error', function () {
    it('add error style tag', function () {
      var input = (0, _enzyme.shallow)(_react2.default.createElement(_2.default, { name: 'Foo', error: 'Foo' }));
      expect(input.find('input').hasClass('error')).toBe(true);
    });

    it('show an error message', function () {
      var input = (0, _enzyme.mount)(_react2.default.createElement(_2.default, { name: 'Foo', error: 'Foo' }));
      expect(input.find('span').first().text()).toBe('Foo');
    });
  });

  describe('type', function () {
    it('give an email field when given in props', function () {
      var input = (0, _enzyme.mount)(_react2.default.createElement(_2.default, { name: 'Foo', type: 'email' }));
      expect(input.find('input').first().props().type).toBe('email');
    });

    it('give a number field when given in props', function () {
      var input = (0, _enzyme.mount)(_react2.default.createElement(_2.default, { name: 'Foo', type: 'number' }));
      expect(input.find('input').first().props().type).toBe('number');
    });

    it('give a password field when given in props', function () {
      var input = (0, _enzyme.mount)(_react2.default.createElement(_2.default, { name: 'Foo', type: 'password' }));
      expect(input.find('input').first().props().type).toBe('password');
    });

    it('give a search field when given in props', function () {
      var input = (0, _enzyme.mount)(_react2.default.createElement(_2.default, { name: 'Foo', type: 'search' }));
      expect(input.find('input').first().props().type).toBe('search');
    });

    it('give a url field when given in props', function () {
      var input = (0, _enzyme.mount)(_react2.default.createElement(_2.default, { name: 'Foo', type: 'url' }));
      expect(input.find('input').first().props().type).toBe('url');
    });
  });

  describe('helpText', function () {
    it('add a helpText when given by props', function () {
      var input = (0, _enzyme.mount)(_react2.default.createElement(_2.default, { name: 'Foo', helpText: 'Foo' }));
      expect(input.find('span').first().text()).toBe('Foo');
    });
  });

  describe('label', function () {
    it('add a label when given by props', function () {
      var input = (0, _enzyme.mount)(_react2.default.createElement(_2.default, { name: 'Foo', label: 'Foo' }));
      expect(input.find('label').first().text()).toBe('Foo');
    });
  });

  describe('action', function () {
    it('render an action link when given by props', function () {
      var action = { title: 'Bar' };
      var input = (0, _enzyme.mount)(_react2.default.createElement(_2.default, { name: 'Foo', action: action }));
      expect(input.containsMatchingElement(_2.default)).toBe(true);
      expect(input.find(_2.default).text()).toBe('Bar');
    });

    it('call onAction() when cliked', function () {
      var spy = jest.fn();
      var action = { title: 'Bar', onAction: spy };
      var input = (0, _enzyme.mount)(_react2.default.createElement(_2.default, { name: 'Foo', action: action }));
      input.find('button').simulate('click');
      expect(spy).toHaveBeenCalled();
    });
  });
});