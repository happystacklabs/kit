'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
var textViewerOptions = [{
  name: 'children',
  value: 'This is an headline',
  type: 'string',
  description: 'Content of the text'
}, {
  name: 'element',
  value: 'span',
  type: ['span', 'p', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6'],
  description: 'Change the type of the text'
}, {
  name: 'size',
  value: 'regular',
  type: ['extraSmall', 'small', 'regular', 'medium', 'large', 'extraLarge'],
  description: 'Change the size of the text'
}, {
  name: 'weight',
  value: 'normal',
  type: ['normal', 'bold'],
  description: 'Change the weight of the text'
}, {
  name: 'color',
  value: 'ink',
  type: ['white', 'ink', 'inkLight', 'positive', 'negative', 'purple'],
  description: 'Change the color of the text'
}];

exports.default = textViewerOptions;