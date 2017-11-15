import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './ButtonGroup.css';


class ButtonGroup extends Component {
  static propTypes = {
      children: PropTypes.node,
      segmented: PropTypes.bool,
  };

  static defaultProps = {
   };

  render() {
    const classes = ['buttonGroup'];
    if (this.props.segmented) {
      classes.push('segmented');
    }
    return (
      <div className={classes.join(' ')}>
        {this.props.children}
      </div>
    );
  }
}

export default ButtonGroup;
