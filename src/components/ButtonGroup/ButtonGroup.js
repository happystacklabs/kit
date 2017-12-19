import React from 'react';
import PropTypes from 'prop-types';
import './ButtonGroup.css';
import styles from './ButtonGroup.styles';
import classNames from 'classnames/bind';


let cx = classNames.bind(styles);

const propTypes = {
    children: PropTypes.node,
    segmented: PropTypes.bool,
};

function ButtonGroup(props) {
  const classButtonGroup = cx({
    segmented: props.segmented},
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

export default ButtonGroup;
