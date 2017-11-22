'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
var tooltipViewerOptions = [{
  value: 'Payment can take up to 24 hours to process.',
  name: 'content',
  type: 'string',
  description: 'Content of the tooltip'
}, {
  value: 'right',
  name: 'position',
  type: ['top', 'right', 'bottom', 'left'],
  description: 'Set the position of the tooltip'
}, {
  value: false,
  name: 'active',
  type: 'bool',
  description: 'Show the tooltip'
}, {
  value: false,
  name: 'light',
  type: 'bool',
  description: 'Change the color palette to light'
}, {
  value: false,
  name: 'children',
  type: 'node',
  description: 'Children of the tooltip'
}];

exports.default = tooltipViewerOptions;