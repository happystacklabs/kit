import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import './Progress.css';


const sizes = {
  small: 'kit-progress--small',
  medium: 'kit-progress--medium',
  large: 'kit-progress--large',
};


const propTypes = {
  progress: PropTypes.number,
  size: PropTypes.oneOf(Object.keys(sizes)),
  className: PropTypes.string,
};


const defaultProps = {
  progress: 0,
  size: 'medium',
  className: undefined,
};


export function Progress(props) {
  let { progress } = props;

  // cap the progress value between 0 and 100
  if (progress >= 100) {
    progress = 100;
  } else if (progress < 0) {
    progress = 0;
  }

  const width = `${progress}%`;
  const progressClassName = classNames('kit-progress', sizes[props.size], props.className);
  const barClassName = classNames({ 'kit-progress__bar--max': progress >= 100 }, 'kit-progress__bar');

  return (
    <div className={progressClassName}>
      <div className={barClassName} style={{ width }} />
    </div>
  );
}


Progress.propTypes = propTypes;
Progress.defaultProps = defaultProps;


export default Progress;
