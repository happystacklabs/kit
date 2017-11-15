import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './Skeleton.css';


class Skeleton extends Component {
  static propTypes = {
    lines: PropTypes.number,
    display: PropTypes.bool,
  };

  static defaultProps = {
    lines: 3,
  };

  renderSkeleton = () => {
    if (this.props.display) {
      return (
        <div className='skeletonDisplay'></div>
      );
    } else {
      const lines = [];
      for (var i = 0; i < this.props.lines; i++) {
        lines.push(<div className='skeletonLine' key={i}></div>);
      }
      return (
        <span>
          {lines}
        </span>
      );
    }
  };

  render() {
    return (
      <div className='skeleton'>{this.renderSkeleton()}</div>
    );
  }
}

export default Skeleton;
