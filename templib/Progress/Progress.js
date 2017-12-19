import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './Progress.css';
import styles from './Progress.styles';
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

    const classProgress = cx({
      small: this.props.size === 'small',
      medium: this.props.size === 'medium',
      large: this.props.size === 'large'},
      styles.progressBar,
    );

    const classInside = cx({max: progress >= 100}, styles.inside);

    return (
      <div className={classProgress}>
        <div className={classInside} style={{width: width}}></div>
      </div>
    );
  }
}

export default Progress;
