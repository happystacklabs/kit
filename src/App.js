import React, { Component } from 'react';
import Text from './components/Text'
import Icon from './components/Icon'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Text element="p" size="small">Paragraph small</Text>
        <Text element="p" size="regular">Paragraph regular</Text>
        <Text element="p" size="medium">Paragraph medium</Text>
        <Text element="h2" size="large">Paragraph large</Text>
        <Text element="h1" size="extraLarge">Paragraph extra large</Text>
        <Text element="h5" size="extraSmall" weight="bold">Paragraph small</Text>
        <Icon name="plus"></Icon>
        <Icon name="chevron-circle-left" color="positive"></Icon>
        <Icon name="plus" color="negative"></Icon>
      </div>
    );
  }
}

export default App;
