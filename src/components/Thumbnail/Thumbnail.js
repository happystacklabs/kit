import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import './Thumbnail.css';


export const sizes = {
  small: 'kit-thumbnail--small',
  medium: 'kit-thumbnail--medium',
  large: 'kit-thumbnail--large',
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
  const thumbnailclassName = classNames(
    props.className,
    'kit-thumbnail',
    sizes[props.size],
  );

  return props.source ? (
    <span className={thumbnailclassName}>
      <img className="kit-thumbnail__image" src={props.source} alt={props.alt} />
    </span>
  ) : (
    <span className={thumbnailclassName}>
      <div className="kit-thumbnail__placeholder" />
    </span>
  );
}


Thumbnail.propTypes = propTypes;
Thumbnail.defaultProps = defaultProps;


export default Thumbnail;
