import React, { Component } from 'react';
import PropTypes from 'prop-types';
import * as Style from './Text.scss';


export const tagNames = [
  'span',
  'p',
  'h1',
  'h2',
  'h3',
  'h4',
  'h5',
  'h6',
];

export const tagSizes = [
  'regular',
]

class Text extends Component {
  static propTypes = {
    children: PropTypes.node,
    element: PropTypes.oneOf(tagNames),
    size: PropTypes.oneOf(tagSizes),
  };

  static defaultProps = {
      element: 'span',
      size: 'regular',
   };

  render() {
    const Element = `${this.props.element}`;
    var classes = ['sizeRegular'];

    return (
      <Element className={classes}>{this.props.children}</Element>
    );
  }
}

export default Text;
