import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './ComponentViewer.css';
import Text from '../Text';
import TextInput from '../TextInput';
import Select from '../Select';



class ComponentViewerRow extends Component {
  static propTypes = {
    name: PropTypes.string.isRequired,
    value: PropTypes.string,
    description: PropTypes.string,
    type: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.arrayOf(PropTypes.string),
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
     if (typeof this.props.type === 'string') {
       return 'string';
     } else if (Array.isArray(this.props.type)) {
       return 'array';
     }
   }

   renderInput = () => {
     console.log(this.props.type.isArray);
     if (typeof this.props.type === 'string') {
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
     }
   };

  render() {
    return (
      <tr key={this.key}>
        <td><Text>{this.props.name}</Text></td>
        <td><Text>{this.getType()}</Text></td>
        <td><Text>{this.props.description}</Text></td>
        <td>
          {this.renderInput()}
        </td>
      </tr>
    );
  }
}
export default ComponentViewerRow;
