import React, { Component } from 'react';
import PropTypes from 'prop-types';


export const tagsNames = ['span', 'p'];

class Text extends Component {
  static propTypes = {
    children: PropTypes.node,
    element: PropTypes.oneOf(tagsNames),
  };

  static defaultProps = {
      element: 'span',
   };

  render() {
    const Element = `${this.props.element}`;

    return (
      <Element>{this.props.children}</Element>
    );
  }
}

export default Text;
