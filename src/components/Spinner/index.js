import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './Spinner.css';


export const spinnerNames = [
  'loader1',
  'loader2',
];

export const spinnerColors = {
  'ink': 'colorInk',
  'inkLight': 'colorInkLight',
  'positive': 'colorPositive',
  'negative': 'colorNegative',
  'purple': 'colorPurple',
  'white': 'colorWhite',
}

export const spinnerSizes = {
  'small': 'spinnerSizeSmall',
  'regular': 'spinnerSizeRegular',
  'large': 'spinnerSizeLarge',
};

class Spinner extends Component {
  static propTypes = {
    type: PropTypes.oneOf(spinnerNames),
    color: PropTypes.oneOf(Object.keys(spinnerColors)),
    size: PropTypes.oneOf(Object.keys(spinnerSizes)),
  };

  static defaultProps = {
    type: 'loader1',
    color: 'ink',
    size: 'regular',
   };

  render() {
    const classes = ['spinner'];
    classes.push(this.props.type);
    classes.push(spinnerColors[this.props.color]);
    classes.push(spinnerSizes[this.props.size]);

    return (
      <div className={classes.join(' ')}>Loading...</div>
    );
  }
}

export default Spinner;
