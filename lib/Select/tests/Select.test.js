'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _enzyme = require('enzyme');

var _ = require('..');

var _2 = _interopRequireDefault(_);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe('Select', function () {
  it('set all props', function () {
    var selectInput = (0, _enzyme.shallow)(_react2.default.createElement(_2.default, {
      name: 'Foo',
      value: 'Bar',
      options: [],
      disabled: true
    })).find('select');
    expect(selectInput.prop('name')).toBe('Foo');
    expect(selectInput.prop('value')).toBe('Bar');
    expect(selectInput.prop('disabled')).toBe(true);
  });

  describe('options', function () {
    it('take an array of options into options object', function () {
      var options = [{ label: 'Foo', value: 'Foo' }, { label: 'Bar', value: 'Bar' }];
      var selectInput = (0, _enzyme.shallow)(_react2.default.createElement(_2.default, {
        name: 'Foo',
        value: '',
        options: options
      }));
      options.forEach(function (option, index) {
        var optionElement = selectInput.find('option').at(index);
        expect(optionElement.key()).toBe(option['value']);
        expect(optionElement.prop('value')).toBe(option['value']);
        expect(optionElement.text()).toBe(option['label']);
      });
    });
  });

  describe('onChange()', function () {
    it('is called with the new value', function () {
      var spy = jest.fn();
      var wrapper = (0, _enzyme.mount)(_react2.default.createElement(_2.default, {
        name: 'foo',
        value: '',
        options: [],
        onChange: spy
      }));
      var selectInput = wrapper.find('select');
      selectInput.instance().value = 'two';
      selectInput.simulate('change');
      expect(spy).toHaveBeenCalled();
    });
  });

  describe('placeholder', function () {
    it('add a placeholder when given by props', function () {
      var selectInput = (0, _enzyme.shallow)(_react2.default.createElement(_2.default, {
        name: 'Foo',
        value: '',
        placeholder: 'Select',
        options: []
      })).find('select');
      var placeholderOption = selectInput.find('option').first();
      expect(selectInput.prop('value')).toBe('');
      expect(placeholderOption.prop('disabled')).toBe(true);
      expect(placeholderOption.prop('hidden')).toBe(true);
    });
  });

  describe('error', function () {
    it('add error style tag', function () {
      var selectInput = (0, _enzyme.shallow)(_react2.default.createElement(_2.default, {
        name: 'Foo',
        value: '',
        options: [],
        error: true
      })).find('select');
      expect(selectInput.hasClass('error')).toBe(true);
    });
  });

  describe('helpText', function () {
    it('add a helpText when given by props', function () {
      var selectInput = (0, _enzyme.mount)(_react2.default.createElement(_2.default, {
        name: 'Foo',
        value: '',
        options: [],
        helpText: 'Foo'
      })).find('div');
      expect(selectInput.find('span').first().text()).toBe('Foo');
    });
  });

  describe('label', function () {
    it('add a label when given by props', function () {
      var selectInput = (0, _enzyme.mount)(_react2.default.createElement(_2.default, {
        name: 'Foo',
        value: '',
        options: [],
        label: 'Foo'
      })).find('div');
      expect(selectInput.find('label').first().text()).toBe('Foo');
    });
  });
});