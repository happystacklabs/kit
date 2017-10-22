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
        <Icon name="exclamation"></Icon>
        <Icon name="arrow-down"></Icon>
        <Icon name="arrow-left"></Icon>
        <Icon name="arrow-right"></Icon>
        <Icon name="arrow-up"></Icon>
        <Icon name="sort"></Icon>
        <Icon name="calendar"></Icon>
        <Icon name="times"></Icon>
        <Icon name="caret-down"></Icon>
        <Icon name="caret-up"></Icon>
        <Icon name="check"></Icon>
        <Icon name=""></Icon>
        <Icon name=""></Icon>
        <Icon name=""></Icon>
        <Icon name=""></Icon>
        <Icon name=""></Icon>
        <Icon name=""></Icon>
      </div>
    );
  }
}

export default App;
