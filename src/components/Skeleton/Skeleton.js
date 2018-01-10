import React from 'react';
import PropTypes from 'prop-types';
import './Skeleton.css';
import styles from './Skeleton.styles';


function renderSkeleton(display, lines) {
  if (display) {
    return (<div className={styles.display} />);
  }
  const linesArray = [];
  for (let i = 0; i < lines; i += 1) {
    linesArray.push(<div className={styles.line} key={i} />);
  }
  return (
    <span>
      {linesArray}
    </span>
  );
}


const propTypes = {
  lines: PropTypes.number,
  display: PropTypes.bool,
  className: PropTypes.string,
};


const defaultProps = {
  lines: 3,
  display: false,
  className: undefined,
};


function Skeleton(props) {
  return (
    <div className={props.className}>{renderSkeleton(props.display, props.lines)}</div>
  );
}


Skeleton.propTypes = propTypes;
Skeleton.defaultProps = defaultProps;


export default Skeleton;
