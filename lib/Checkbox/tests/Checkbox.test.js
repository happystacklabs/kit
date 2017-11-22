'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _ = require('..');

var _2 = _interopRequireDefault(_);

var _enzyme = require('enzyme');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe('Checkbox', function () {
  it('set all props', function () {
    var checkbox = (0, _enzyme.shallow)(_react2.default.createElement(_2.default, {
      name: 'Foo',
      value: 'Bar',
      id: 'Bar',
      checked: true
    })).find('input');
    expect(checkbox.prop('name')).toBe('Foo');
    expect(checkbox.prop('value')).toBe('Bar');
    expect(checkbox.prop('id')).toBe('Bar');
    expect(checkbox.prop('checked')).toBe(true);
  });

  describe('onClick()', function () {
    it('is called when the checkbox is clicked', function () {
      var spy = jest.fn();
      var checkbox = (0, _enzyme.mount)(_react2.default.createElement(_2.default, { onChange: spy, name: 'foo', id: 'foo' }));
      checkbox.find('input').instance().checked = true;
      checkbox.find('input').simulate('change');
      expect(spy).toHaveBeenCalledWith({ "id": "foo", "value": true });
    });
  });

  describe('disabled', function () {
    it('disable the checkbox when given by props', function () {
      var checkbox = (0, _enzyme.shallow)(_react2.default.createElement(_2.default, {
        name: 'Foo',
        disabled: true
      })).find('input');
      expect(checkbox.prop('disabled')).toBe(true);
    });
  });

  describe('error', function () {
    it('add error style', function () {
      var checkbox = (0, _enzyme.shallow)(_react2.default.createElement(_2.default, {
        name: 'Foo',
        error: true
      })).find('div').at(1);
      expect(checkbox.hasClass('checkboxError')).toBe(true);
    });
  });

  describe('label', function () {
    it('add a label when given by props', function () {
      var checkbox = (0, _enzyme.mount)(_react2.default.createElement(_2.default, {
        name: 'Foo',
        label: 'Bar'
      }));
      expect(checkbox.find('label').first().text()).toBe('Bar');
    });
  });

  describe('helpText', function () {
    it('add a helpText when given by props', function () {
      var checkbox = (0, _enzyme.mount)(_react2.default.createElement(_2.default, {
        name: 'Foo',
        helpText: 'Bar'
      }));
      expect(checkbox.find('span').first().text()).toBe('Bar');
    });
  });

  describe('radio', function () {
    it('change the input type to radio', function () {
      var checkbox = (0, _enzyme.mount)(_react2.default.createElement(_2.default, {
        name: 'Foo',
        type: 'radio'
      }));
      expect(checkbox.find('input').first().props().type).toBe('radio');
    });

    it('render checkbox by default instead of radio', function () {
      var checkbox = (0, _enzyme.mount)(_react2.default.createElement(_2.default, {
        name: 'Foo',
        type: 'radio'
      }));
      expect(checkbox.prop('type')).toBe('radio');
    });

    it('add the radio style selector', function () {
      var checkbox = (0, _enzyme.shallow)(_react2.default.createElement(_2.default, {
        name: 'Foo',
        type: 'radio'
      })).find('div').at(1);
      expect(checkbox.hasClass('radioInput')).toBe(true);
    });
  });
});