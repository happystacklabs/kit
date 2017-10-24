import React, { Component } from 'react';
import Text from './components/Text';
import Icon from './components/Icon';
import TextInput from './components/TextInput';
import './App.css';

class App extends Component {

  state = {
    value: 'Lorem ipsum',
  }

  onInputChange = (event) => {
    this.setState({value: event.target.value});
  };

  render() {
    return (
      <div className="App">
        <Text element="p" size="small">{this.state.value}</Text>
        <Text element="p" size="regular">{this.state.value}</Text>
        <Text element="p" size="medium">{this.state.value}</Text>
        <Text element="h2" size="large">{this.state.value}</Text>
        <Text element="h1" size="extraLarge" weight="bold">{this.state.value}</Text>
        <Text element="h5" size="extraSmall" weight="bold">{this.state.value}</Text>
        <br />
        <TextInput
          name="Foo"
          placeholder="This input rocks"
          value={this.state.value}
          onChange={this.onInputChange}
          error="This is an error."
          maxLength="10"
        />
      </div>
    );
  }
}

export default App;
