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
import TextInput from './components/TextInput';
import textInputViewerOptions from './components/TextInput/textInputViewerOptions';
import Checkbox from './components/Checkbox';
import checkboxViewerOptions from './components/Checkbox/checkboxViewerOptions';
import ChoiceList from './components/ChoiceList';
import choiceListViewerOptions from './components/ChoiceList/choiceListViewerOptions';
import Spinner from './components/Spinner';
import spinnerViewerOptions from './components/Spinner/spinnerViewerOptions';


class App extends Component {
  render() {
    return (
      <div className="App">
        <ComponentViewer options={spinnerViewerOptions}>
          <Spinner/>
        </ComponentViewer>
        <ComponentViewer options={choiceListViewerOptions}>
          <ChoiceList
            name=''
            choices={[]}
          />
        </ComponentViewer>
        <ComponentViewer options={checkboxViewerOptions}>
          <Checkbox name=''/>
        </ComponentViewer>
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
        <ComponentViewer options={textInputViewerOptions}>
          <TextInput name=''/>
        </ComponentViewer>
      </div>
    );
  }
}

export default App;
