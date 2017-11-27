import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styles from './Switch.css';
import classNames from 'classnames/bind';


let cx = classNames.bind(styles);

export const colors = {
  'positive': styles.positive,
  'negative': styles.negative,
  'purple': styles.purple,
};

export const sizes = {
  'slim': styles.slim,
  'regular': styles.regular,
  'large': styles.large,
};

class Switch extends Component {
  static propTypes = {
    on: PropTypes.bool.isRequired,
    round: PropTypes.bool,
    color: PropTypes.oneOf(Object.keys(colors)),
    size: PropTypes.oneOf(Object.keys(sizes)),
  };

  static defaultProps = {
    on: false,
   };

   handleClick = (event) => {
     if (this.props.onClick === null) { return; }
     this.props.onClick({value: !this.props.on, name: this.props.name});
   };

  render() {
    const classes = cx(
      styles.switch,
      {
        on: this.props.on,
        round: this.props.round,
      }
    );

    const wrapper = cx(
      this.props.className,
      sizes[this.props.size],
      colors[this.props.color],
    )

    return (
      <div className={wrapper}>
        <div
          className={classes}
          onClick={this.handleClick}
        >
          <div className={styles.toggle}></div>
        </div>
      </div>
    );
  }
}

export default Switch;
