import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './ButtonGroup.css';
import styles from './ButtonGroup.styles';
import classNames from 'classnames/bind';


let cx = classNames.bind(styles);

class ButtonGroup extends Component {
  static propTypes = {
      children: PropTypes.node,
      segmented: PropTypes.bool,
  };

  render() {
    const classButtonGroup = cx({
      segmented: this.props.segmented},
      this.props.className,
      styles.buttonGroup,
    );

    return (
      <div className={classButtonGroup}>
        {this.props.children}
      </div>
    );
  }
}

export default ButtonGroup;
