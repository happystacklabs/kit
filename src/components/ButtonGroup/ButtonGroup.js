import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import './ButtonGroup.css';
import styles from './ButtonGroup.styles';


const cx = classNames.bind(styles);


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


function ButtonGroup(props) {
  const classButtonGroup = cx(
    {
      segmented: props.segmented,
    },
    props.className,
    styles.buttonGroup,
  );

  return (
    <div className={classButtonGroup}>
      {props.children}
    </div>
  );
}


ButtonGroup.propTypes = propTypes;
ButtonGroup.defaultProps = defaultProps;


export default ButtonGroup;
