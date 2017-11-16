import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './Progress.css';


class Progress extends Component {
  static propTypes = {
      progress: PropTypes.number,
  };

  static defaultProps = {
      progress: 0,
   };

  render() {
    const width = this.props.progress + '%';
    return (
      <div className='progressBar'>
        <div className='progressInside' style={{width: width}}></div>
      </div>
    );
  }
}

export default Progress;
