import React, { Component } from 'react';
import PropTypes from 'prop-types';
import 'font-awesome/css/font-awesome.min.css';
import './Icon.css';


export const iconNames = {
  'plus': 'fa-plus',
  'exclamation': 'fa-exclamation',
}


class Icon extends Component {
  static propTypes = {
    name: PropTypes.oneOf(Object.keys(iconNames)),
  };

  static defaultProps = {
   };

  render() {
    const classes = ['fa'];
    classes.push(iconNames[this.props.name]);

    return (
      <i className={classes.join(' ')} aria-hidden='true'></i>
    );
  }
}

export default Icon;
