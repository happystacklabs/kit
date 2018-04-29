import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import './ButtonGroup.css';


const propTypes = {
  children: PropTypes.node,
  segmented: PropTypes.bool,
  className: PropTypes.string,
};


const defaultProps = {
  children: undefined,
  segmented: false,
  className: undefined,
};


export function ButtonGroup(props) {
  const buttonGroupClassName = classNames(
    { 'kit-button-group--segmented': props.segmented },
    'kit-button-group',
    props.className,
  );

  return (
    <div className={buttonGroupClassName}>
      {props.children}
    </div>
  );
}


ButtonGroup.propTypes = propTypes;
ButtonGroup.defaultProps = defaultProps;


export default ButtonGroup;
