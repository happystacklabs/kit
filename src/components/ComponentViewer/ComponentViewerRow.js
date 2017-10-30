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
    ]),
    description: PropTypes.string,
    type: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.array,
      PropTypes.bool,
      PropTypes.func,
    ]).isRequired,
    onSwitch: PropTypes.func,
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
     } else if (Array.isArray(this.props.type)) {
       return 'array';
     } else if (this.props.type === 'bool') {
       return 'bool';
     } else if (this.props.type === 'function') {
       return 'function';
     }
   }

   renderInput = () => {
     if (this.props.type === 'string') {
       return (
         <TextInput
          name={this.props.name}
          onChange={this.onInputChange}
          value={this.props.value}
         />
       );
     } else if (Array.isArray(this.props.type)) {
       return (
         <Select
          name={this.props.name}
          onChange={this.onInputChange}
          value={this.props.value}
          options={this.getOptions()}
         />
       );
     } else if (this.props.type === 'bool') {
       return (
         <Switch
           name={this.props.name}
           onClick={this.onSwitchChange}
           on={this.props.value}
         />
       );
     } else if (this.props.type === 'function') {
       return;
     }
   };

   onInputChange = (event) => {
     this.props.onChange({name: this.props.name, value: event.target.value});
   };

   onSwitchChange = (event) => {
     this.props.onChange({name: this.props.name, value: event.target.value});
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
