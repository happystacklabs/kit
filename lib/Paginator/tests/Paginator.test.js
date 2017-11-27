'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _ = require('..');

var _2 = _interopRequireDefault(_);

var _enzyme = require('enzyme');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe('Paginator', function () {
  it('render two buttons', function () {
    var paginator = (0, _enzyme.shallow)(_react2.default.createElement(_2.default, null));
    expect(paginator.find('button').at(0).exists()).toBe(true);
    expect(paginator.find('button').at(1).exists()).toBe(true);
  });

  describe('disableNext', function () {
    it('change state of right button to disabled', function () {
      var paginator = (0, _enzyme.mount)(_react2.default.createElement(_2.default, { disableNext: true }));
      expect(paginator.find('button').at(1).prop('disabled')).toBe(true);
    });
  });

  describe('disablePrevious', function () {
    it('change state of left button to disabled', function () {
      var paginator = (0, _enzyme.mount)(_react2.default.createElement(_2.default, { disablePrevious: true }));
      expect(paginator.find('button').at(0).prop('disabled')).toBe(true);
    });
  });

  describe('onNext()', function () {
    it('is called when the next button is clicked', function () {
      var spy = jest.fn();
      (0, _enzyme.mount)(_react2.default.createElement(_2.default, { onNext: spy })).find('button').at(1).simulate('click');
      expect(spy).toHaveBeenCalled();
    });
  });

  describe('onPrevious()', function () {
    it('is called when the previous button is clicked', function () {
      var spy = jest.fn();
      (0, _enzyme.mount)(_react2.default.createElement(_2.default, { onPrevious: spy })).find('button').at(0).simulate('click');
      expect(spy).toHaveBeenCalled();
    });
  });

  describe('plain', function () {
    it('change the state of buttons to plain', function () {
      var paginator = (0, _enzyme.mount)(_react2.default.createElement(_2.default, { plain: true }));
      expect(paginator.find('button').at(0).hasClass('plain')).toBe(true);
    });
  });
});