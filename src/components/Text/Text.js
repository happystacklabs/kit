import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import './Text.css';
import styles from './Text.styles';


export const elements = ['span', 'p', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6'];


export const sizes = {
  extraSmall: styles.extraSmall,
  small: styles.small,
  regular: styles.regular,
  medium: styles.medium,
  large: styles.large,
  extraLarge: styles.extraLarge,
};


export const weights = {
  normal: styles.normalWeight,
  bold: styles.boldWeight,
};


export const colors = {
  white: styles.white,
  ink: styles.ink,
  inkLight: styles.inkLight,
  positive: styles.positive,
  negative: styles.negative,
  purple: styles.purple,
};


const propTypes = {
  children: PropTypes.node,
  element: PropTypes.oneOf(elements),
  size: PropTypes.oneOf(Object.keys(sizes)),
  weight: PropTypes.oneOf(Object.keys(weights)),
  color: PropTypes.oneOf(Object.keys(colors)),
  className: PropTypes.string,
};


const defaultProps = {
  children: undefined,
  element: 'span',
  size: 'regular',
  weight: 'normal',
  color: 'ink',
  className: undefined,
};


function Text(props) {
  const Element = `${props.element}`;

  const classText = classNames(
    props.className,
    styles.text,
    sizes[props.size],
    weights[props.weight],
    colors[props.color],
  );

  return (
    <Element className={classText}>{props.children}</Element>
  );
}


Text.propTypes = propTypes;
Text.defaultProps = defaultProps;


export default Text;
