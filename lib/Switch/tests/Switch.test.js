'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _ = require('..');

var _2 = _interopRequireDefault(_);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe('Switch', function () {
  it('render the toggle div', function () {
    var switchInput = shallow(_react2.default.createElement(_2.default, null));
    expect(switchInput.find('div').at(1).hasClass('switch')).toBe(true);
  });

  describe('on', function () {
    it('add the on css selector when on is given by props', function () {
      var switchInput = shallow(_react2.default.createElement(_2.default, { on: true }));
      expect(switchInput.find('div').at(1).hasClass('on')).toBe(true);
    });
  });

  describe('onClick()', function () {
    it('is called when the switch is clicked', function () {
      var spy = jest.fn();
      shallow(_react2.default.createElement(_2.default, { onClick: spy })).find('div').at(1).simulate('click');
      expect(spy).toHaveBeenCalled();
    });
  });

  describe('round', function () {
    it('add the round css selector when is given by props', function () {
      var switchInput = shallow(_react2.default.createElement(_2.default, { round: true }));
      expect(switchInput.find('div').at(1).hasClass('round')).toBe(true);
    });
  });

  describe('color', function () {
    it('is positive when given by props', function () {
      var switchInput = shallow(_react2.default.createElement(_2.default, { color: 'positive' }));
      expect(switchInput.find('div').first().hasClass('positive')).toBe(true);
    });

    it('is negative when given by props', function () {
      var switchInput = shallow(_react2.default.createElement(_2.default, { color: 'negative' }));
      expect(switchInput.find('div').first().hasClass('negative')).toBe(true);
    });

    it('is purple when given by props', function () {
      var switchInput = shallow(_react2.default.createElement(_2.default, { color: 'purple' }));
      expect(switchInput.find('div').first().hasClass('purple')).toBe(true);
    });
  });

  describe('size', function () {
    it('show slim when given by props', function () {
      var switchInput = shallow(_react2.default.createElement(_2.default, { size: 'slim' }));
      expect(switchInput.find('div').first().hasClass('slim')).toBe(true);
    });

    it('show regular when given by props', function () {
      var switchInput = shallow(_react2.default.createElement(_2.default, { size: 'regular' }));
      expect(switchInput.find('div').first().hasClass('regular')).toBe(true);
    });

    it('show large when given by props', function () {
      var switchInput = shallow(_react2.default.createElement(_2.default, { size: 'large' }));
      expect(switchInput.find('div').first().hasClass('large')).toBe(true);
    });
  });
});