import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './Avatar.css';
import Text from '../Text';


export const avatarSizes = {
  'small': 'avatarSmall',
  'medium': 'avatarMedium',
  'large': 'avatarLarge',
};

class Avatar extends Component {
  static propTypes = {
    source: PropTypes.string,
    initial: PropTypes.string,
    size: PropTypes.oneOf(Object.keys(avatarSizes)),
  };

  static defaultProps = {
    size: 'medium',
   };

   renderAvatar = () => {
     if (this.props.initial) {
       const initial = this.props.initial.toUpperCase().substring(0,2);
       return (
         <div className='avatarPlaceholder'>
          <Text weight='bold'>{initial}</Text>
         </div>
       );
       return;
     }
     if (this.props.source) {
       return (
         <img src={this.props.source}/>
       );
     } else {
       return (
         <div className='avatarPlaceholder'></div>
       );
     }
   }

  render() {
    const classes = ['avatar'];
    classes.push(avatarSizes[this.props.size]);
    return (
      <span className={classes.join(' ')}>
        {this.renderAvatar()}
      </span>
    );
  }
}

export default Avatar;
