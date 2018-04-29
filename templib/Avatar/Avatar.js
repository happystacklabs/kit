import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import './Avatar.css';
import Text from '../Text/Text';


export const sizes = {
  small: 'kit-avatar--small',
  medium: 'kit-avatar--medium',
  large: 'kit-avatar--large',
};


function renderAvatar(initial, size, source) {
  if (initial) {
    const initialValue = initial.toUpperCase().substring(0, 2);
    if (source) {
      return <img className="kit-avatar__image" alt={source} src={source} />;
    }
    return (
      <div className="kit-avatar__placeholder">
        <Text bold>{initialValue}</Text>
      </div>
    );
  }
  return source ?
    <img className="kit-avatar__image" alt={source} src={source} />
    :
    <div className="kit-avatar__placeholder" />;
}


const propTypes = {
  source: PropTypes.string,
  initial: PropTypes.string,
  size: PropTypes.oneOf(Object.keys(sizes)),
  className: PropTypes.string,
};


const defaultProps = {
  source: undefined,
  initial: undefined,
  size: 'medium',
  className: undefined,
};


export function Avatar(props) {
  const avatarClassName = classNames(
    props.className,
    'kit-avatar',
    sizes[props.size],
  );

  return (
    <span className={avatarClassName}>
      {renderAvatar(props.initial, props.size, props.source)}
    </span>
  );
}


Avatar.propTypes = propTypes;
Avatar.defaultProps = defaultProps;


export default Avatar;
