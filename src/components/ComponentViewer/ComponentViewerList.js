import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './ComponentViewer.css';
import ComponentViewerRow from './ComponentViewerRow';



class ComponentViewerList extends Component {
  static propTypes = {
    options: PropTypes.array.isRequired,
  };

  static defaultProps = {
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
              onChange={this.props.onChange}
            />
          )
        );
      }
    };

    render() {
    return (
      <div className='viewerList'>
        <table>
          <tbody>
            <tr>
              <th>Name</th>
              <th>Type</th>
              <th>Description</th>
            </tr>
            {this.renderOptions(this.props.options)}
          </tbody>
        </table>
      </div>
    );
  }
}

export default ComponentViewerList;
