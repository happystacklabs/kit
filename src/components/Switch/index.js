import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './Switch.css';


class Switch extends Component {
  static propTypes = {
    on: PropTypes.bool.isRequired,
  };

  static defaultProps = {
    on: false,
   };

  render() {
    const classes = ['switch'];

    if (this.props.on) {
      classes.push('switchOn');
    }
    return (
      <div
        className={classes.join(' ')}
        onClick={this.props.onClick}
      >
        <div className='switchToggle'></div>
      </div>
    );
  }
}

export default Switch;
