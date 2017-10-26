import React, { Component } from 'react';
import Text from './components/Text';
import Icon from './components/Icon';
import TextInput from './components/TextInput';
import Select from './components/Select';
import Button from './components/Button';
import './App.css';

class App extends Component {

  state = {
    value: '',
  }

  onInputChange = (event) => {
    this.setState({value: event.target.value});
  };

  render() {
    const options = [
      {label: 'Christine Young', value: 'christine_young'},
      {label: 'Jada Fire', value: 'jada_fire'},
    ];

    return (
      <div className="App">
        <Text element="h5" size="extraSmall" weight="bold">{this.state.value}</Text>
        <Text element="p" size="small">{this.state.value}</Text>
        <Text element="p" size="regular">{this.state.value}</Text>
        <Text element="p" size="medium">{this.state.value}</Text>
        <Text element="h2" size="large">{this.state.value}</Text>
        <Text element="h1" size="extraLarge" weight="bold">{this.state.value}</Text>
        <br />

        <Select
          name='Foo'
          options={options}
          onChange={this.onInputChange}
          placeholder='Select'
          value={this.state.value}
          disabled
        />
      </div>
    );
  }
}

export default App;
