import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import './Text.css';


export const elements = ['span', 'p', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6'];


export const sizes = {
  'display-xlarge': 'kit-text--display-xlarge',
  'display-large': 'kit-text--display-large',
  'display-medium': 'kit-text--display-medium',
  'display-small': 'kit-text--display-small',
  heading: 'kit-text--heading',
  'sub-heading': 'kit-text--sub-heading',
  body: 'kit-text--body',
  caption: 'kit-text--caption',
};


export const colors = {
  white: 'kit-text--white',
  ink: 'kit-text--ink',
  'ink-light': 'kit-text--ink-light',
  positive: 'kit-text--positive',
  negative: 'kit-text--negative',
  main: 'kit-text--main',
};


const propTypes = {
  children: PropTypes.node,
  element: PropTypes.oneOf(elements),
  size: PropTypes.oneOf(Object.keys(sizes)),
  color: PropTypes.oneOf(Object.keys(colors)),
  className: PropTypes.string,
  bold: PropTypes.bool,
};


const defaultProps = {
  children: undefined,
  element: 'span',
  size: 'body',
  color: 'ink',
  className: undefined,
  bold: false,
};


export function Text(props) {
  const Element = `${props.element}`;

  const classText = classNames(
    props.className,
    'kit-text',
    sizes[props.size],
    colors[props.color],
  );

  return props.bold ?
    (<Element className={classText}><b>{props.children}</b></Element>)
    :
    (<Element className={classText}>{props.children}</Element>);
}


Text.propTypes = propTypes;
Text.defaultProps = defaultProps;


export default Text;
