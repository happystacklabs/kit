import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import './Avatar.css';
import styles from './Avatar.styles';
import Text from '../Text/Text';


export const sizes = {
  small: styles.small,
  medium: styles.medium,
  large: styles.large,
};


function renderAvatar(initial, size, source) {
  if (initial) {
    const initialValue = initial.toUpperCase().substring(0, 2);
    return (
      <div className={classNames(styles.placeholder, sizes[size])}>
        <Text weight="bold">{initialValue}</Text>
      </div>
    );
  }

  if (source) {
    return <img className={sizes[size]} alt={source} src={source} />;
  }

  return <div className={classNames(styles.placeholder, sizes[size])} />;
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


function Avatar(props) {
  const classAvatar = classNames(
    props.className,
    styles.avatar,
    sizes[props.size],
  );

  return (
    <span className={classAvatar}>
      {renderAvatar(props.initial, props.size, props.source)}
    </span>
  );
}


Avatar.propTypes = propTypes;
Avatar.defaultProps = defaultProps;


export default Avatar;
