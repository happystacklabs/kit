import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './Switch.css';
import styles from './Switch.styles';
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
    const classSwitch = cx({
      on: this.props.on,
      round: this.props.round },
      styles.switch,
      sizes[this.props.size],
      colors[this.props.color]
    );

    const classToggle = cx({
      on: this.props.on,
      round: this.props.round },
      styles.toggle,
      sizes[this.props.size],
    );

    return (
      <div className={this.props.className}>
        <div
          className={classSwitch}
          onClick={this.handleClick}
        >
          <div className={classToggle}></div>
        </div>
      </div>
    );
  }
}

export default Switch;
