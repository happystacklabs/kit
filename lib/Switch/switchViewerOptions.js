'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
var switchViewerOptions = [{
  name: 'color',
  value: 'purple',
  type: ['positive', 'negative', 'purple'],
  description: 'Change the color'
}, {
  name: 'size',
  value: 'regular',
  type: ['slim', 'regular', 'large'],
  description: 'Change the color'
}, {
  name: 'on',
  value: false,
  type: 'bool',
  description: 'Make the switch on or off'
}, {
  name: 'round',
  value: false,
  type: 'bool',
  description: 'Make the switch round'
}, {
  name: 'onClick',
  value: 'on',
  type: 'function',
  description: 'When the switch is click'
}];

exports.default = switchViewerOptions;