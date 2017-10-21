import React, { Component } from 'react';
import Text from './components/Text'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Text element="h1">Heading h1</Text>
        <Text element="h2">Heading h2</Text>
        <Text element="h3">Heading h3</Text>
        <Text element="h4">Heading h4</Text>
        <Text element="h5">Heading h5</Text>
        <Text element="h6">Heading h6</Text>
        <Text element="p">Paragraph</Text>
        <Text element="span">Span</Text>
      </div>
    );
  }
}

export default App;
