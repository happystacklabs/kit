import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './Spinner.css';
import styles from './Spinner.styles';
import classNames from 'classnames';


export const names = [
  'loader1',
  'loader2',
];

export const colors = {
  'ink': styles.ink,
  'inkLight': styles.inkLight,
  'positive': styles.positive,
  'negative': styles.negative,
  'purple': styles.purple,
  'white': styles.white,
}

export const sizes = {
  'small': styles.small,
  'medium': styles.medium,
  'large': styles.large,
};


export const types = {
  'loader1': styles.loader1,
  'loader2': styles.loader2,
}

class Spinner extends Component {
  static propTypes = {
    type: PropTypes.oneOf(names),
    color: PropTypes.oneOf(Object.keys(colors)),
    size: PropTypes.oneOf(Object.keys(sizes)),
  };

  static defaultProps = {
    type: 'loader1',
    color: 'ink',
    size: 'medium',
   };

  render() {
    const classSpinner = classNames(
      this.props.className,
      styles.spinner,
      types[this.props.type],
      colors[this.props.color],
      sizes[this.props.size],
    );

    return (
      <div className={classSpinner}>Loading...</div>
    );
  }
}

export default Spinner;
