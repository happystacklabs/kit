import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styles from './Text.css';
import classNames from 'classnames';


export const elements = [
  'span',
  'p',
  'h1',
  'h2',
  'h3',
  'h4',
  'h5',
  'h6',
];

export const sizes = {
  'extraSmall': styles.extraSmall,
  'small': styles.small,
  'regular': styles.regular,
  'medium': styles.medium,
  'large': styles.large,
  'extraLarge': styles.extraLarge,
};

export const weights = {
  'normal': styles.normalWeight,
  'bold': styles.boldWeight,
};

export const colors = {
  'white': styles.white,
  'ink': styles.ink,
  'inkLight': styles.inkLight,
  'positive': styles.positive,
  'negative': styles.negative,
  'purple': styles.purple,
}

class Text extends Component {
  static propTypes = {
    children: PropTypes.node,
    element: PropTypes.oneOf(elements),
    size: PropTypes.oneOf(Object.keys(sizes)),
    weight: PropTypes.oneOf(Object.keys(weights)),
    color: PropTypes.oneOf(Object.keys(colors)),
  };

  static defaultProps = {
      element: 'span',
      size: 'regular',
      weight: 'normal',
      color: 'ink',
   };

  render() {
    const Element = `${this.props.element}`;

    const classes = classNames(
      this.props.className,
      styles.fontFamily,
      sizes[this.props.size],
      weights[this.props.weight],
      colors[this.props.color],
    );

    return (
      <Element className={classes}>{this.props.children}</Element>
    );
  }
}

export default Text;
