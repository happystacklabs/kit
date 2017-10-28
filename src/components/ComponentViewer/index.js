import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './ComponentViewer.css';
import Text from '../Text';
import ComponentViewerList from './ComponentViewerList';
import ComponentViewerCode from './ComponentViewerCode';
import Icon from '../Icon';
import Button from '../Button';
import * as copy from 'copy-to-clipboard';


class ComponentViewer extends Component {
  static propTypes = {
    children: PropTypes.element,
    options: PropTypes.array,
  };

  static defaultProps = {
   };

   state = {
     options: this.props.options,
   }

   onInputChange = (event) => {
     // Change the option
     const newState = Object.assign({}, this.state);
     const index = newState['options'].findIndex(x => x.name === event.target.name);
     newState['options'][index]['value'] = event.target.value;
     this.setState(newState);
   };

   onClickCopy = (event) => {
     copy(this.getCode());
   }

  render() {
    const newProps = this.state.options.reduce(function(object, item) {
      if (item['value'] === '' && Array.isArray(item['type'])) {
        return object;
      }
      object[item['name']] = item['value'];
      return object;
    }, {});

    return (
      <div>
        <div className='viewerExample'>
          <Text size='large' element='h2'>Example</Text>
          <div className='viewerElement'>
            {React.cloneElement(this.props.children, newProps)}
          </div>
        </div>
        <ComponentViewerCode></ComponentViewerCode>
        <ComponentViewerList
          options={this.state.options}
          onChange={this.onInputChange}
        />
      </div>
    );
  }
}
export default ComponentViewer;
