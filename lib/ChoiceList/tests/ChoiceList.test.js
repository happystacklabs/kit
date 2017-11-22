'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _ = require('..');

var _2 = _interopRequireDefault(_);

var _enzyme = require('enzyme');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe('ChoiceList', function () {
  var choices = [];

  beforeEach(function () {
    choices = [{ label: 'One', value: 'one' }, { label: 'Two', value: 'two' }, { label: 'Three', value: 'three' }];
  });

  it('renders a fieldset', function () {
    var choiceList = (0, _enzyme.shallow)(_react2.default.createElement(_2.default, {
      name: 'Foo',
      choices: choices
    }));
    expect(choiceList.find('fieldset').exists()).toBe(true);
  });

  describe('title', function () {
    it('show a title legend for the fieldset', function () {
      var choiceList = (0, _enzyme.mount)(_react2.default.createElement(_2.default, {
        name: 'Foo',
        title: 'Foo',
        choices: choices
      }));
      expect(choiceList.find('legend').text()).toBe('Foo');
    });
  });

  describe('choices', function () {
    it('it renders a choice with the label', function () {
      var choiceList = (0, _enzyme.mount)(_react2.default.createElement(_2.default, {
        name: 'Foo',
        title: 'Foo',
        choices: choices
      }));
      expect(choiceList.find('label').at(0).text()).toBe('One');
    });

    it('passed the helptext', function () {
      choices[0]['helpText'] = 'Bar';
      var choiceList = (0, _enzyme.mount)(_react2.default.createElement(_2.default, {
        name: 'Foo',
        title: 'Foo',
        choices: choices
      }));
      expect(choiceList.find('.helpText').text()).toBe('Bar');
    });
  });

  describe('multiple', function () {
    it('change the input type to checkbox', function () {
      var choiceList = (0, _enzyme.mount)(_react2.default.createElement(_2.default, {
        name: 'Foo',
        title: 'Foo',
        choices: choices,
        multiple: true
      }));
      expect(choiceList.find('input').first().prop('type')).toBe('checkbox');
    });
  });

  describe('selected', function () {
    it('select the appropriate choice', function () {
      var choiceList = (0, _enzyme.mount)(_react2.default.createElement(_2.default, {
        name: 'Foo',
        title: 'Foo',
        choices: choices,
        selected: ['one']
      }));
      expect(choiceList.find('input').first().prop('checked')).toBe(true);
    });

    it('can select multiple choices', function () {
      var selected = [];
      var spy = jest.fn(function (event) {
        selected = event.value;
      });
      var choiceList = (0, _enzyme.mount)(_react2.default.createElement(_2.default, {
        name: 'Foo',
        title: 'Foo',
        choices: choices,
        selected: ['one'],
        multiple: true,
        onChange: spy
      }));
      choiceList.find('input').at(0).simulate('change');
      expect(spy).toHaveBeenCalled();
      expect(selected).toEqual([]);
      choiceList.setProps({ selected: selected });
      choiceList.find('input').at(1).simulate('change');
      expect(selected).toEqual(["two"]);
    });
  });

  describe('disabled', function () {
    it('disabled all inputs', function () {
      var choiceList = (0, _enzyme.mount)(_react2.default.createElement(_2.default, {
        name: 'Foo',
        title: 'Foo',
        choices: choices,
        disabled: true
      }));
      expect(choiceList.find('input').first().prop('disabled')).toBe(true);
    });
  });
});