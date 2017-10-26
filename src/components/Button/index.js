import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Text from '../Text';
import './Button.css';


export const buttonSizes = {
  'slim': 'buttonSizeSlim',
  'regular': 'buttonSizeRegular',
  'large': 'buttonSizeLarge',
};

export const buttonColors = {
  'positive': 'buttonColorPositive',
  'negative': 'buttonColorNegative',
  'purple': 'buttonColorPurple',
};

class Button extends Component {
  static propTypes = {
    children: PropTypes.node,
    disabled: PropTypes.bool,
    size: PropTypes.oneOf(Object.keys(buttonSizes)),
    color: PropTypes.oneOf(Object.keys(buttonColors)),
    square: PropTypes.bool,
    fullWidth: PropTypes.bool,
    plain: PropTypes.bool,
    outline: PropTypes.bool,
  };

  static defaultProps = {
    size: 'regular',
   };

  render() {
    const classes = ['button'];

    classes.push(buttonSizes[this.props.size]);

    if (this.props.square) {
      classes.push('buttonSquare');
    }

    if (this.props.fullWidth) {
      classes.push('fullWidth');
    }

    if (this.props.plain) {
      classes.push('buttonPlain');
    }

    if (this.props.outline) {
      classes.push('buttonOutline');
    }

    if (this.props.color) {
      classes.push(buttonColors[this.props.color]);
    }

    return (
      <button
        onClick={this.props.onClick}
        disabled={this.props.disabled}
        className={classes.join(' ')}
        size={this.props.size}
      >
        <span>{this.props.children}</span>
      </button>
    );
  }
}

export default Button;
