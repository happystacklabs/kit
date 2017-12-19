import React from 'react';
import PropTypes from 'prop-types';
import './Avatar.css';
import styles from './Avatar.styles';
import Text from '../Text';
import classNames from 'classnames';


export const sizes = {
  'small': styles.small,
  'medium': styles.medium,
  'large': styles.large,
};

const propTypes = {
  source: PropTypes.string,
  initial: PropTypes.string,
  size: PropTypes.oneOf(Object.keys(sizes)),
};

const defaultProps = {
  size: 'medium',
 };

function Avatar(props) {
  const classAvatar = classNames(
    props.className,
    styles.avatar,
    sizes[props.size],
  );

  return (
    <span className={classAvatar}>
      {renderAvatar(props)}
    </span>
  );
}

function renderAvatar(props) {
 if (props.initial) {
   const initial = props.initial.toUpperCase().substring(0,2);
   return (
     <div className={classNames(styles.placeholder, sizes[props.size])}>
      <Text weight='bold'>{initial}</Text>
     </div>
   );
 }

 if (props.source) {
   return (
     <img className={sizes[props.size]} alt={props.source} src={props.source}/>
   );
 } else {
   return (
     <div className={classNames(styles.placeholder, sizes[props.size])}></div>
   );
 }
}


Avatar.propTypes = propTypes;
Avatar.defaultProps = defaultProps;

export default Avatar;
