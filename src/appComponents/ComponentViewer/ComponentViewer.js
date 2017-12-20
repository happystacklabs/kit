import React from 'react';
import PropTypes from 'prop-types';
import './ComponentViewer.css';
import styles from './ComponentViewer.styles';
import Text from '../../components/Text';
import ComponentViewerList from './ComponentViewerList';
import ComponentViewerCode from './ComponentViewerCode';


const propTypes = {
  children: PropTypes.element,
  options: PropTypes.array,
  name: PropTypes.string,
};

class ComponentViewer extends React.Component {
   state = {
     options: this.props.options,
   }

   onInputChange = (event) => {
     // clone state
     const newState = Object.assign({}, this.state);
     // find the index of the onChange option
     const index = newState['options'].findIndex(x => x.name === event.name);
     newState['options'][index]['value'] = event.value;
     this.setState(newState);
   };

   onChildrenChange = (event) => {
     // make a clone of state
     const newState = Object.assign({}, this.state);
     // find the index of the onChange option
     const indexOnChange = newState['options'].findIndex(x => x.name === 'onChange');
     // get the value of the Onchange option, it contains the name of the option to update
     const fieldValue = newState['options'][indexOnChange]['value'];
     // find the index of the option to update
     const indexValue = newState['options'].findIndex(x => x.name === fieldValue);
     // update the option value with the event value
     newState['options'][indexValue]['value'] = event.value;
     // update the state
     this.setState(newState);
   };

   onChildrenClick = (event) => {
     // make a clone of state
     const newState = Object.assign({}, this.state);
     // find the index of the onClick option
     const indexOnClick = newState['options'].findIndex(x => x.name === 'onClick');
     // get the value of the Onclick option, it contains the name of the option to update
     const fieldValue = newState['options'][indexOnClick]['value'];
     // fail safe
     if (fieldValue === false) { return; }
     // find the index of the option to update
     const indexValue = newState['options'].findIndex(x => x.name === fieldValue);
     // update the option value with the event value
     newState['options'][indexValue]['value'] = event.value;
     // update the state
     this.setState(newState);
   };

  render() {
    const newProps = getNewProps(this, this.state.options);

    return (
      <div className={this.props.className}>
        <Text element="h1" className={styles.h1} size="extraLarge">{this.props.name}</Text>
        <div>
          <Text size="medium" element="h2">Example</Text>
          <div className={styles.element}>
            {React.cloneElement(this.props.children, newProps)}
          </div>
        </div>
        <ComponentViewerCode
          element={this.props.name.split(' ').join('')}
          options={this.state.options}
        />
        <ComponentViewerList
          options={this.state.options}
          onChange={this.onInputChange}
          onClick={this.onInputChange}
        />
      </div>
    );
  }
}

function getNewProps(_this) {
  // when cloning the element passed by children we want to init the props from options
  return _this.state.options.reduce(function(object, item) {
    if (item['name'] === 'onChange') {
      object[item['name']] = _this.onChildrenChange;
      return object;

    } else if (item['value'] === '' && Array.isArray(item['type'])) {
      return object;

    } else if (item['name'] === 'onClick') {
      object[item['name']] = _this.onChildrenClick;
      return object;

    } else if (item['type'] === 'node') {
      return object;

    } else {
      object[item['name']] = item['value'];
      return object;
    }
  }, {});
}

ComponentViewer.propTypes = propTypes;

export default ComponentViewer;
