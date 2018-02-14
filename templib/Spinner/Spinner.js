import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import './Spinner.css';


export const names = [
  'loader1',
  'loader2',
];

export const colors = {
  ink: 'kit-spinner--ink',
  'ink-light': 'kit-spinner--ink-light',
  positive: 'kit-spinner--positive',
  negative: 'kit-spinner--negative',
  main: 'kit-spinner--main',
  white: 'kit-spinner--white',
};


export const sizes = {
  small: 'kit-spinner--small',
  medium: 'kit-spinner--medium',
  large: 'kit-spinner--large',
};


export const types = {
  loader1: 'kit-spinner--loader1',
  loader2: 'kit-spinner--loader2',
};


const propTypes = {
  type: PropTypes.oneOf(names),
  color: PropTypes.oneOf(Object.keys(colors)),
  size: PropTypes.oneOf(Object.keys(sizes)),
  className: PropTypes.string,
};


const defaultProps = {
  type: 'loader1',
  color: 'ink',
  size: 'medium',
  className: undefined,
};


function Spinner(props) {
  const spinnerClassName = classNames(
    props.className,
    'kit-spinner',
    types[props.type],
    colors[props.color],
    sizes[props.size],
  );

  return (
    <div className={spinnerClassName}>Loading...</div>
  );
}


Spinner.propTypes = propTypes;
Spinner.defaultProps = defaultProps;


export default Spinner;
