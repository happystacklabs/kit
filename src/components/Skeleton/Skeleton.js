import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styles from './Skeleton.css';


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
        <div className={styles.display}></div>
      );
    } else {
      const lines = [];
      for (var i = 0; i < this.props.lines; i++) {
        lines.push(<div className={styles.line} key={i}></div>);
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
      <div className={this.props.className}>{this.renderSkeleton()}</div>
    );
  }
}

export default Skeleton;
