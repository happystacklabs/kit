import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import './Switch.css';


export const colors = {
  positive: 'kit-switch--positive',
  negative: 'kit-switch--negative',
  main: 'kit-switch--main',
};


export const sizes = {
  small: 'kit-switch--small',
  medium: 'kit-switch--medium',
  large: 'kit-switch--large',
};


const propTypes = {
  on: PropTypes.bool,
  round: PropTypes.bool,
  color: PropTypes.oneOf(Object.keys(colors)),
  size: PropTypes.oneOf(Object.keys(sizes)),
  onClick: PropTypes.func,
  name: PropTypes.string,
  className: PropTypes.string,
};


const defaultProps = {
  on: false,
  round: false,
  color: 'main',
  size: 'medium',
  onClick: undefined,
  name: undefined,
  className: undefined,
};


function Switch(props) {
  function handleClick() {
    if (props.onClick === null) { return; }
    props.onClick({ value: !props.on, name: props.name });
  }

  const switchClassName = classNames(
    {
      'kit-switch--on': props.on,
      'kit-switch--round': props.round,
    },
    props.className,
    'kit-switch',
    sizes[props.size],
    colors[props.color],
  );

  const toggleClassName = classNames(
    {
      'kit-switch__toggle--on': props.on,
    },
    'kit-switch__toggle',
  );

  return (
    <div // eslint-disable-line no-static-element-interactions
      role="switch"
      tabIndex="0"
      className={switchClassName}
      onClick={handleClick}
      onKeyPress={handleClick}
      aria-checked={props.on}
    >
      <div className={toggleClassName} />
    </div>
  );
}


Switch.propTypes = propTypes;
Switch.defaultProps = defaultProps;


export default Switch;
