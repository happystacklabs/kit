import React, { Component } from 'react';
import PropTypes from 'prop-types';
import 'font-awesome/css/font-awesome.min.css';
import './Icon.css';


export const iconNames = {
  'plus': 'fa-plus',
  'exclamation': 'fa-exclamation',
  'arrow-down': 'fa-arrow-down',
  'arrow-left': 'fa-arrow-left',
  'arrow-right': 'fa-arrow-right',
  'arrow-up': 'fa-arrow-up',
  'sort': 'fa-sort',
  'calendar': 'fa-calendar',
  'times': 'fa-times',
  'caret-down': 'fa-caret-down',
  'caret-up': 'fa-caret-up',
  'check': 'fa-check',
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
