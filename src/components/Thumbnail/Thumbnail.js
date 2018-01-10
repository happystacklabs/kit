import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import './Thumbnail.css';
import styles from './Thumbnail.styles';


function renderThumbnail(source, alt) {
  if (source) {
    return (
      <img src={source} alt={alt} />
    );
  }
  return (
    <div className={styles.placeholder} />
  );
}


export const sizes = {
  small: styles.small,
  medium: styles.medium,
  large: styles.large,
};


const propTypes = {
  source: PropTypes.string,
  alt: PropTypes.string.isRequired,
  size: PropTypes.oneOf(Object.keys(sizes)),
  className: PropTypes.string,
};


const defaultProps = {
  source: undefined,
  size: 'medium',
  className: undefined,
};


function Thumbnail(props) {
  const classThumbnail = classNames(
    props.className,
    styles.thumbnail,
    sizes[props.size],
  );

  return (
    <span className={classThumbnail}>
      {renderThumbnail(props.source, props.alt)}
    </span>
  );
}


Thumbnail.propTypes = propTypes;
Thumbnail.defaultProps = defaultProps;


export default Thumbnail;
