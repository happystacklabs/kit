'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
var paginatorViewerOptions = [{
  name: 'disableNext',
  value: false,
  type: 'bool',
  description: 'Disable the next button'
}, {
  name: 'disablePrevious',
  value: false,
  type: 'bool',
  description: 'Disable the previous button'
}, {
  name: 'plain',
  value: false,
  type: 'bool',
  description: 'Change the state of the paginator to plain'
}, {
  name: 'onPrevious',
  value: function value() {},
  type: 'function',
  description: 'called when previous button is cliked'
}, {
  name: 'onNext',
  value: function value() {},
  type: 'function',
  description: 'called when next button is cliked'
}];

exports.default = paginatorViewerOptions;