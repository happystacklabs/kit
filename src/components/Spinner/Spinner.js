import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import './Spinner.css';
import styles from './Spinner.styles';


export const names = [
  'loader1',
  'loader2',
];

export const colors = {
  ink: styles.ink,
  inkLight: styles.inkLight,
  positive: styles.positive,
  negative: styles.negative,
  purple: styles.purple,
  white: styles.white,
};


export const sizes = {
  small: styles.small,
  medium: styles.medium,
  large: styles.large,
};


export const types = {
  loader1: styles.loader1,
  loader2: styles.loader2,
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
  const classSpinner = classNames(
    props.className,
    styles.spinner,
    types[props.type],
    colors[props.color],
    sizes[props.size],
  );

  return (
    <div className={classSpinner}>Loading...</div>
  );
}


Spinner.propTypes = propTypes;
Spinner.defaultProps = defaultProps;


export default Spinner;
