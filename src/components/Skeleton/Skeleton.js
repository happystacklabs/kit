import React from 'react';
import PropTypes from 'prop-types';
import './Skeleton.css';
import styles from './Skeleton.styles';


const propTypes = {
  lines: PropTypes.number,
  display: PropTypes.bool,
};

const defaultProps = {
  lines: 3,
};

function Skeleton(props) {
  return (
    <div className={props.className}>{renderSkeleton(props)}</div>
  );
}

function renderSkeleton(props) {
  if (props.display) {
    return (
      <div className={styles.display}></div>
    );
  } else {
    const lines = [];
    for (var i = 0; i < props.lines; i++) {
      lines.push(<div className={styles.line} key={i}></div>);
    }
    return (
      <span>
        {lines}
      </span>
    );
  }
};

Skeleton.propTypes = propTypes;
Skeleton.defaultProps = defaultProps;

export default Skeleton;
