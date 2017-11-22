'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
var progressViewerOptions = [{
  value: 80,
  name: 'progress',
  type: 'number',
  description: 'The progress of the bar from 0 to 100'
}, {
  value: 'medium',
  name: 'size',
  type: ['small', 'medium', 'large'],
  description: 'Size of the progress bar'
}];

exports.default = progressViewerOptions;