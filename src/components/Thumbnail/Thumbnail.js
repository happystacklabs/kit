import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styles from './Thumbnail.css';
import classNames from 'classnames';


export const sizes = {
  'small': styles.small,
  'medium': styles.medium,
  'large': styles.large,
};

class Thumbnail extends Component {
  static propTypes = {
    source: PropTypes.string,
    alt: PropTypes.string.isRequired,
    size: PropTypes.oneOf(Object.keys(sizes)),
  };

  static defaultProps = {
    size: 'medium',
  };

  renderThumbnail = () => {
    if (this.props.source) {
      return (
        <img src={this.props.source} alt={this.props.alt}/>
      );
    } else {
      return (
        <div className={styles.placeholder}></div>
      );
    }
  }


  render() {
    const classes = classNames(
      this.props.className,
      styles.thumbnail,
      sizes[this.props.size],
    );

    return (
      <span className={classes}>
        {this.renderThumbnail()}
      </span>
    );
  }
}

export default Thumbnail;
