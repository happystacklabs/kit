import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './Switch.css';


export const switchColors = {
  'positive': 'switchColorPositive',
  'negative': 'switchColorNegative',
  'purple': 'switchColorPurple',
};

export const switchSizes = {
  'slim': 'switchSizeSlim',
  'regular': 'switchSizeRegular',
  'large': 'switchSizeLarge',
};

class Switch extends Component {
  static propTypes = {
    on: PropTypes.bool.isRequired,
    round: PropTypes.bool,
    color: PropTypes.oneOf(Object.keys(switchColors)),
    size: PropTypes.oneOf(Object.keys(switchSizes)),
  };

  static defaultProps = {
    on: false,
   };

  render() {
    const classes = ['switch'];
    const classesWrapper = [];

    if (this.props.on) {
      classes.push('switchOn');
    }

    if (this.props.round) {
      classes.push('switchRound');
    }

    if (this.props.size) {
      classesWrapper.push(switchSizes[this.props.size]);
    }

    if (this.props.color) {
      classesWrapper.push(switchColors[this.props.color]);
    }


    return (
      <div className={classesWrapper.join(' ')}>
        <div
          className={classes.join(' ')}
          onClick={this.props.onClick}
        >
          <div className='switchToggle'></div>
        </div>
      </div>
    );
  }
}

export default Switch;
