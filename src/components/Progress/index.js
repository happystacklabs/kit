import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './Progress.css';


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
    const classes = ['progressBar'];
    const classesInside = ['progressInside'];
    var progress = this.props.progress;

    if (progress >= 100) {
      progress = 100;
      classesInside.push('progressMax');
    } else if (progress < 0) {
      progress = 0;
    }

    const width = progress + '%';

    if (this.props.size === 'small') {
      classes.push('progressSmall');
    }

    if (this.props.size === 'medium') {
      classes.push('progressMedium');
    }

    if (this.props.size === 'large') {
      classes.push('progressLarge');
    }

    return (
      <div className={classes.join(' ')}>
        <div className={classesInside.join(' ')} style={{width: width}}></div>
      </div>
    );
  }
}

export default Progress;
