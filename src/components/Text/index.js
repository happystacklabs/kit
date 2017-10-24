import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './Text.css';


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

export const tagSizes = {
  'extraSmall': 'sizeExtraSmall',
  'small': 'sizeSmall',
  'regular': 'sizeRegular',
  'medium': 'sizeMedium',
  'large': 'sizeLarge',
  'extraLarge': 'sizeExtraLarge',
};

export const fontWeights = {
  'normal': 'normalWeight',
  'bold': 'boldWeight',
};

export const iconColors = {
  'ink': 'colorInk',
  'inkLight': 'colorInkLight',
  'positive': 'colorPositive',
  'negative': 'colorNegative',
  'purple': 'colorPurple',
}

class Text extends Component {
  static propTypes = {
    children: PropTypes.node,
    element: PropTypes.oneOf(tagNames),
    size: PropTypes.oneOf(Object.keys(tagSizes)),
    weight: PropTypes.oneOf(Object.keys(fontWeights)),
  };

  static defaultProps = {
      element: 'span',
      size: 'regular',
      weight: 'normal',
      color: 'ink',
   };

  render() {
    const Element = `${this.props.element}`;
    const classes = ['fontFamily'];

    classes.push(this.props.className);
    classes.push(tagSizes[this.props.size]);
    classes.push(fontWeights[this.props.weight]);
    classes.push(iconColors[this.props.color]);

    return (
      <Element className={classes.join(' ')}>{this.props.children}</Element>
    );
  }
}

export default Text;
