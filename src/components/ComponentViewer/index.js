import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Text from '../ComponentViewer';
import './ComponentViewer.css';



class ComponentViewer extends Component {
  static propTypes = {
    children: Proptypes.element,
  };

  static defaultProps = {
   };

  render() {
    const classes = [''];

    return (
      {children}
    );
  }
}

export default ComponentViewer;
