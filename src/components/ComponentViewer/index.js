import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './ComponentViewer.css';
import Text from '../Text';
import ComponentViewerRow from './ComponentViewerRow';



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
     console.log(newState['options'][index]);
     newState['options'][index]['value'] = event.target.value;
     this.setState(newState);
   };

  renderOptions = (options) => {
     if (options) {
       return (
         options.map(option =>
           <ComponentViewerRow
             key={option.name}
             name={option.name}
             type={option.type}
             value={option.value}
             description={option.description}
             onChange={this.onInputChange}
           />
         )
       );
     }
   };

  render() {
    const newProps = this.state.options.reduce(function(object, item) {
      object[item['name']] = item['value'].toLowerCase();
      return object;
    }, {});

    return (
      <div>
        <div className='viewerExample'>
          <Text size='large' element='h2'>Example</Text>
          {React.cloneElement(this.props.children, newProps)}
        </div>
        <div className='viewerForm'>
          <table>
            <tbody>
              <tr>
                <th>Name</th>
                <th>Type</th>
                <th>Description</th>
              </tr>
              {this.renderOptions(this.state.options)}
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}
export default ComponentViewer;
