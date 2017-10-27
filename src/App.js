import React, { Component } from 'react';
import Button from './components/Button';
import ComponentViewer from './components/ComponentViewer';
import './App.css';

const options = [
  {
    value: 'Add to cart',
    name: 'children',
    type: 'string',
    description: 'Text of the object',
  },
  {
    value: 'large',
    name: 'size',
    type: [
      'small',
      'regular',
      'large',
    ],
    description: 'Change the size',
  },
  {
    value: '',
    name: 'color',
    type: [
      'positive',
      'negative',
      'purple',
      '',
    ],
    description: 'Change the color',
  },
  {
    value: false,
    name: 'disabled',
    type: 'bool',
    description: 'Disabled the button',
  },
  {
    value: false,
    name: 'square',
    type: 'bool',
    description: 'Square shape of button',
  },
  {
    value: false,
    name: 'fullWidth',
    type: 'bool',
    description: 'Make the button full width',
  },
  {
    value: false,
    name: 'plain',
    type: 'bool',
    description: 'Make the button plain',
  },
  {
    value: false,
    name: 'outline',
    type: 'bool',
    description: 'Make the button outline',
  },
  {
    value: ()=>{},
    name: 'onClick',
    type: 'function',
    description: 'call the parent when clicked',
  }
];

class App extends Component {

  state = {
    value: '',
  }

  onInputChange = (event) => {
    this.setState({value: event.target.value});
  };

  handleSubmit = (event) => {
    this.setState({value: ''});
  }

  render() {
    return (
      <div className="App">
        <br />
        <ComponentViewer options={options}>
          <Button/>
        </ComponentViewer>
      </div>
    );
  }
}

export default App;
