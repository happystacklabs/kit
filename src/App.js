import React, { Component } from 'react';
import Text from './components/Text';
import TextInput from './components/TextInput';
import Button from './components/Button';
import ComponentViewer from './components/ComponentViewer';
import './App.css';

const options = [
  {
    value: 'foo',
    name: 'children',
    type: 'string',
    description: 'Text of the object',
  },
  {
    value: 'large',
    name: 'size',
    type: 'string',
    description: 'Change the size',
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
        <Text element="h5" size="extraSmall" weight="bold">{this.state.value}</Text>
        <Text element="p" size="small">{this.state.value}</Text>
        <Text element="p" size="regular">{this.state.value}</Text>
        <Text element="p" size="medium">{this.state.value}</Text>
        <Text element="h2" size="large">{this.state.value}</Text>
        <Text element="h1" size="extraLarge" weight="bold">{this.state.value}</Text>
        <br />
        <TextInput name="f" value={this.state.value} onChange={this.onInputChange}/>
        <br />
        <Button onClick={this.handleSubmit}>Reset</Button>
        <br />
        <ComponentViewer options={options}>
          <Button/>
        </ComponentViewer>
      </div>
    );
  }
}

export default App;
