import React, { Component } from 'react';
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

class Avatar extends Component {
  static propTypes = {
    source: PropTypes.string,
    initial: PropTypes.string,
    size: PropTypes.oneOf(Object.keys(sizes)),
  };

  static defaultProps = {
    size: 'medium',
   };

   renderAvatar = () => {
     if (this.props.initial) {
       const initial = this.props.initial.toUpperCase().substring(0,2);
       return (
         <div className={classNames(styles.placeholder, sizes[this.props.size])}>
          <Text weight='bold'>{initial}</Text>
         </div>
       );
       return;
     }
     if (this.props.source) {
       return (
         <img className={sizes[this.props.size]} src={this.props.source}/>
       );
     } else {
       return (
         <div className={classNames(styles.placeholder, sizes[this.props.size])}></div>
       );
     }
   }

  render() {
    const classAvatar = classNames(
      this.props.className,
      styles.avatar,
      sizes[this.props.size],
    );
    return (
      <span className={classAvatar}>
        {this.renderAvatar()}
      </span>
    );
  }
}

export default Avatar;
