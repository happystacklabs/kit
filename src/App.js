import React, { Component } from 'react';
import ComponentViewer from './components/ComponentViewer';
import './App.css';
import Button from './components/Button';
import buttonViewerOptions from './components/Button/buttonViewerOptions';
import Icon from './components/Icon';
import iconViewerOptions from './components/Icon/iconViewerOptions';
import Select from './components/Select';
import selectViewerOptions from './components/Select/selectViewerOptions';
import Switch from './components/Switch';
import switchViewerOptions from './components/Switch/switchViewerOptions';
import Text from './components/Text';
import textViewerOptions from './components/Text/textViewerOptions';


class App extends Component {
  render() {
    return (
      <div className="App">
        <br />
        <ComponentViewer options={buttonViewerOptions}>
          <Button/>
        </ComponentViewer>
        <br/>
        <ComponentViewer options={iconViewerOptions}>
          <Icon/>
        </ComponentViewer>
        <br/>
        <ComponentViewer options={selectViewerOptions}>
          <Select
            options={[]}
            name=''
            value=''
          />
        </ComponentViewer>
        <ComponentViewer options={switchViewerOptions}>
          <Switch/>
        </ComponentViewer>
        <ComponentViewer options={textViewerOptions}>
          <Text/>
        </ComponentViewer>
      </div>
    );
  }
}

export default App;
