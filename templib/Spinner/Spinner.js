import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import faSpinner from '@fortawesome/fontawesome-free-solid/faSpinner';
import './Spinner.css';


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


export function Spinner(props) {
  const spinnerClassName = classNames(
    props.className,
    'kit-spinner',
    sizes[props.size],
  );

  return (
    <div className={spinnerClassName}>
      <FontAwesomeIcon icon={faSpinner} size="sm" className={`kit-spinner--${props.color}`} pulse />
    </div>
  );
}


Spinner.propTypes = propTypes;
Spinner.defaultProps = defaultProps;


export default Spinner;
