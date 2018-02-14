import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import Icon from '../Icon/Icon';
import './Spinner.css';


export const names = [
  'loader1',
  'loader2',
];

export const colors = ['ink', 'ink-light', 'positive', 'negative', 'main', 'white'];


export const sizes = {
  small: 'kit-spinner--small',
  medium: 'kit-spinner--medium',
  large: 'kit-spinner--large',
};


const propTypes = {
  color: PropTypes.oneOf(colors),
  size: PropTypes.oneOf(Object.keys(sizes)),
  className: PropTypes.string,
};


const defaultProps = {
  color: 'ink',
  size: 'medium',
  className: undefined,
};


function Spinner(props) {
  const spinnerClassName = classNames(
    props.className,
    'kit-spinner',
    sizes[props.size],
  );

  return (
    <div className={spinnerClassName}>
      <Icon name="spinner" color={props.color} size="sm" spin />
    </div>
  );
}


Spinner.propTypes = propTypes;
Spinner.defaultProps = defaultProps;


export default Spinner;
