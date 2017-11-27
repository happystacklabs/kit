import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styles from './Button.css';
import Spinner from '../Spinner';
import classNames from 'classnames/bind';


let cx = classNames.bind(styles);

const sizes = {
  'slim': styles.slim,
  'regular': styles.regular,
  'large': styles.large,
};

const colors = {
  'positive': styles.positive,
  'negative': styles.negative,
  'purple': styles.purple,
};

const renderContent = (props) => {
  if (props.loading) {
    const size = props.size === 'slim' || props.size === 'regular' ? 'small' : 'regular';
    const type = props.size === 'slim' ? 'loader2' : 'loader1';

    return (
      <div className={styles.loading}>
        <span className={styles.spinner}>
          <Spinner color='inkLight' size={size} type={type}></Spinner>
        </span>
        <span className={styles.hidden}>{props.children}</span>
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
    size: PropTypes.oneOf(Object.keys(sizes)),
    color: PropTypes.oneOf(Object.keys(colors)),
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

    const classes = cx(
      this.props.classNames,
      styles.button,
      colors[this.props.color],
      sizes[this.props.size],
      {
        loading: this.props.loading,
        outline: this.props.outline,
        plain: this.props.plain,
        fullWidth: this.props.fullWidth,
        square: this.props.square,
      }
    );

    const disabled = this.props.loading ? true : this.props.disabled;

    return (
      <button
        onClick={this.props.onClick}
        disabled={disabled}
        className={classes}
        size={this.props.size}
      >
        {renderContent(this.props)}
      </button>
    );
  }
}

export default Button;
