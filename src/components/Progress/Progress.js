import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styles from './Progress.css';
import classNames from 'classnames/bind';


let cx = classNames.bind(styles);

class Progress extends Component {
  static propTypes = {
      progress: PropTypes.number,
      size: PropTypes.string,
  };

  static defaultProps = {
      progress: 0,
      size: 'medium',
   };

  render() {
    var progress = this.props.progress;

    if (progress >= 100) {
      progress = 100;
    } else if (progress < 0) {
      progress = 0;
    }

    const width = progress + '%';

    const classes = cx(
      styles.progressBar,
      {
        small: this.props.size === 'small',
        medium: this.props.size === 'medium',
        large: this.props.size === 'large',
      }
    );

    const inside = cx(styles.inside, {max: progress >= 100});

    return (
      <div className={classes}>
        <div className={inside} style={{width: width}}></div>
      </div>
    );
  }
}

export default Progress;
