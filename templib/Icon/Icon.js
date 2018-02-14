import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import solid from '@fortawesome/fontawesome-free-solid';
import '@fortawesome/fontawesome-free-regular';
import './Icon.css';


export const icons = Object.keys(solid).map(icon => solid[icon].iconName);


export const colors = {
  ink: 'kit-icon--ink',
  'ink-light': 'kit-icon--ink-light',
  positive: 'kit-icon--positive',
  negative: 'kit-icon--negative',
  main: 'kit-icon--main',
  white: 'kit-icon--white',
};


export const sizes = ['xs', 'sm', 'lg', '2x', '3x', '5x', '7x', '10x'];


const propTypes = {
  name: PropTypes.oneOf(icons),
  color: PropTypes.oneOf(Object.keys(colors)),
  size: PropTypes.oneOf(sizes),
  regular: PropTypes.bool,
  spin: PropTypes.bool,
  fixedWidth: PropTypes.bool,
  className: PropTypes.string,
};


const defaultProps = {
  name: undefined,
  color: 'ink',
  size: 'sm',
  regular: false,
  spin: false,
  fixedWidth: false,
  className: undefined,
};


function Icon(props) {
  const iconClassName = classNames(
    props.className,
    colors[props.color],
  );

  const iconType = props.regular ? 'far' : 'fas';

  return (
    <FontAwesomeIcon
      className={iconClassName}
      icon={[iconType, props.name]}
      spin={props.spin}
      size={props.size}
      fixedWidth={props.fixedWidth}
    />
  );
}


Icon.propTypes = propTypes;
Icon.defaultProps = defaultProps;


export default Icon;
