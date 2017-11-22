import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './Thumbnail.css';


export const thumbnailSizes = {
  'small': 'thumbnailSmall',
  'medium': 'thumbnailMedium',
  'large': 'thumbnailLarge',
};

class Thumbnail extends Component {
  static propTypes = {
    source: PropTypes.string,
    alt: PropTypes.string.isRequired,
    size: PropTypes.oneOf(Object.keys(thumbnailSizes)),
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
        <div className='thumbnailPlaceholder'></div>
      );
    }
  }


  render() {
    const classes = ['thumbnail'];
    classes.push(thumbnailSizes[this.props.size]);
    return (
      <span className={classes.join(' ')}>
        {this.renderThumbnail()}
      </span>
    );
  }
}

export default Thumbnail;
