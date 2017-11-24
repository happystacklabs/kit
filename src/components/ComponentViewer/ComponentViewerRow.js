import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './ComponentViewer.css';
import Text from '../Text';
import TextInput from '../TextInput';
import Select from '../Select';
import Switch from '../Switch';



class ComponentViewerRow extends Component {
  static propTypes = {
    name: PropTypes.string.isRequired,
    value: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.array,
      PropTypes.bool,
      PropTypes.func,
      PropTypes.number,
    ]),
    description: PropTypes.string,
    type: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.array,
      PropTypes.bool,
      PropTypes.func,
    ]).isRequired,
  };

  static defaultProps = {
   };

   getOptions = () => {
     const options = this.props.type.map((option, index) => {
       return {label: option, value: option};
     });
     return options;
   }

   getType = () => {
     if (this.props.type === 'string') {
       return 'string';
     } else if (Array.isArray(this.props.type) || this.props.type === 'array') {
       return 'array';
     } else if (this.props.type === 'bool') {
       return 'bool';
     } else if (this.props.type === 'function') {
       return 'function';
     } else if (this.props.type === 'number') {
       return 'number';
     } else if (this.props.type === 'object') {
       return 'object';
     } else if (this.props.type === 'node') {
       return 'node';
     }
   }

   renderInput = () => {
     if (this.props.type === 'string') {
       return (
         <TextInput
          name={this.props.name}
          onChange={this.props.onChange}
          value={this.props.value}
         />
       );
     } else if (Array.isArray(this.props.type)) {
       return (
         <Select
          name={this.props.name}
          onChange={this.props.onChange}
          value={this.props.value}
          options={this.getOptions()}
         />
       );
     } else if (this.props.type === 'bool') {
       return (
         <Switch
           name={this.props.name}
           onClick={this.props.onClick}
           on={this.props.value}
         />
       );
     } else if (this.props.type === 'function') {
       return;
     } else if (this.props.type === 'node') {
       return;
     } else if (this.props.type === 'number') {
       return (
         <TextInput
          name={this.props.name}
          onChange={this.props.onChange}
          value={this.props.value}
          type='number'
         />
       );
     }
   };

  render() {
    return (
      <tr key={this.key}>
        <td className='bottomLine'><Text color='purple' size='small'>{this.props.name}</Text></td>
        <td className='bottomLine'><Text color='inkLight' size='small'>{this.getType()}</Text></td>
        <td className='bottomLine'><Text>{this.props.description}</Text></td>
        <td>
          {this.renderInput()}
        </td>
      </tr>
    );
  }
}
export default ComponentViewerRow;
