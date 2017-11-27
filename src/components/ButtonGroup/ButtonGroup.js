import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styles from './ButtonGroup.css';
import classNames from 'classnames/bind';


let cx = classNames.bind(styles);

class ButtonGroup extends Component {
  static propTypes = {
      children: PropTypes.node,
      segmented: PropTypes.bool,
  };

  render() {
    const classes = cx(
      this.props.className,
      styles.buttonGroup,
      {
        segmented: this.props.segmented,
      }
    );

    return (
      <div className={classes}>
        {this.props.children}
      </div>
    );
  }
}

export default ButtonGroup;
