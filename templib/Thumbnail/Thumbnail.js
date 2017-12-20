import React from 'react';
import PropTypes from 'prop-types';
import './Thumbnail.css';
import styles from './Thumbnail.styles';
import classNames from 'classnames';


export const sizes = {
  'small': styles.small,
  'medium': styles.medium,
  'large': styles.large,
};

const propTypes = {
  source: PropTypes.string,
  alt: PropTypes.string.isRequired,
  size: PropTypes.oneOf(Object.keys(sizes)),
};

const defaultProps = {
  size: 'medium',
};

function Thumbnail(props) {
  const classThumbnail = classNames(
    props.className,
    styles.thumbnail,
    sizes[props.size],
  );

  return (
    <span className={classThumbnail}>
      {renderThumbnail(props)}
    </span>
  );
}

function renderThumbnail(props) {
  if (props.source) {
    return (
      <img src={props.source} alt={props.alt} />
    );
  } else {
    return (
      <div className={styles.placeholder} />
    );
  }
}

Thumbnail.propTypes = propTypes;
Thumbnail.defaultProps = defaultProps;

export default Thumbnail;
