import React from 'react';
import PropTypes from 'prop-types';
import './Switch.css';
import styles from './Switch.styles';
import classNames from 'classnames/bind';


let cx = classNames.bind(styles);

export const colors = {
  'positive': styles.positive,
  'negative': styles.negative,
  'purple': styles.purple,
};

export const sizes = {
  'slim': styles.slim,
  'regular': styles.regular,
  'large': styles.large,
};

const propTypes = {
  on: PropTypes.bool.isRequired,
  round: PropTypes.bool,
  color: PropTypes.oneOf(Object.keys(colors)),
  size: PropTypes.oneOf(Object.keys(sizes)),
};

const defaultProps = {
  on: false,
};

function Switch(props) {
  function handleClick(event) {
    if (props.onClick === null) { return; }
    props.onClick({value: !props.on, name: props.name});
  };

  const classSwitch = cx({
    on: props.on,
    round: props.round },
    styles.switch,
    sizes[props.size],
    colors[props.color]
  );

  const classToggle = cx({
    on: props.on,
    round: props.round },
    styles.toggle,
    sizes[props.size],
  );

  return (
    <div className={props.className}>
      <div
        className={classSwitch}
        onClick={handleClick}
        >
          <div className={classToggle}></div>
        </div>
      </div>
    );
  }

  Switch.propTypes = propTypes;
  Switch.defaultProps = defaultProps;

  export default Switch;
