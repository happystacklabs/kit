import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import './Switch.css';
import styles from './Switch.styles';


const cx = classNames.bind(styles);


export const colors = {
  positive: styles.positive,
  negative: styles.negative,
  purple: styles.purple,
};


export const sizes = {
  slim: styles.slim,
  regular: styles.regular,
  large: styles.large,
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
  color: 'purple',
  size: 'regular',
  onClick: undefined,
  name: undefined,
  className: undefined,
};


function Switch(props) {
  function handleClick() {
    if (props.onClick === null) { return; }
    props.onClick({ value: !props.on, name: props.name });
  }

  const classSwitch = cx(
    {
      on: props.on,
      round: props.round,
    },
    styles.switch,
    sizes[props.size],
    colors[props.color],
  );

  const classToggle = cx(
    {
      on: props.on,
      round: props.round,
    },
    styles.toggle,
    sizes[props.size],
  );

  return (
    <div className={props.className}>
      <div // eslint-disable-line no-static-element-interactions
        role="switch"
        tabIndex="0"
        className={classSwitch}
        onClick={handleClick}
        onKeyPress={handleClick}
        aria-checked={props.on}
      >
        <div className={classToggle} />
      </div>
    </div>
  );
}


Switch.propTypes = propTypes;
Switch.defaultProps = defaultProps;


export default Switch;
