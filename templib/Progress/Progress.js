import React from 'react';
import PropTypes from 'prop-types';
import './Progress.css';
import styles from './Progress.styles';
import classNames from 'classnames/bind';


let cx = classNames.bind(styles);

const propTypes = {
    progress: PropTypes.number,
    size: PropTypes.string,
};

const defaultProps = {
    progress: 0,
    size: 'medium',
 };

function Progress(props) {
  let progress = props.progress;

  // cap the progress value between 0 - 100
  if (progress >= 100) {
    progress = 100;
  } else if (progress < 0) {
    progress = 0;
  }

  const width = progress + '%';

  const classProgress = cx({
    small: props.size === 'small',
    medium: props.size === 'medium',
    large: props.size === 'large'},
    styles.progressBar,
  );

  const classInside = cx({max: progress >= 100}, styles.inside);

  return (
    <div className={classProgress}>
      <div className={classInside} style={{width: width}} />
    </div>
  );
}

Progress.propTypes = propTypes;
Progress.defaultProps = defaultProps;

export default Progress;
