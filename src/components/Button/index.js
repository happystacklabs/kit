import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './Button.css';
import Spinner from '../Spinner';


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

const renderContent = (props) => {
  if (props.loading) {
    const size = props.size === 'slim' || props.size === 'regular' ? 'small' : 'regular';
    const type = props.size === 'slim' ? 'loader2' : 'loader1';
    return (
      <div className='buttonContentLoading'>
        <span className='buttonSpinner'>
          <Spinner color='inkLight' size={size} type={type}></Spinner>
        </span>
        <span className='hidden'>{props.children}</span>
      </div>
    );
  } else {
    return (
      <span>{props.children}</span>
    );
  }
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
    loading: PropTypes.bool,
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

    if (this.props.loading) {
      classes.push('loading');
    }

    const disabled = this.props.loading ? true : this.props.disabled;

    return (
      <button
        onClick={this.props.onClick}
        disabled={disabled}
        className={classes.join(' ')}
        size={this.props.size}
      >
        {renderContent(this.props)}
      </button>
    );
  }
}

export default Button;
