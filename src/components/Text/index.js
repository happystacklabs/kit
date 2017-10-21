import React, { Component } from 'react';
import PropTypes from 'prop-types';


class Text extends Component {
  static propTypes = {
    children: PropTypes.node,
  };

  render() {
    return (
      <span>{this.props.children}</span>
    );
  }
}

export default Text;
