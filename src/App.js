import React, { Component } from 'react';
import ComponentViewer from './components/ComponentViewer';
import './App.css';
import Navigation from './appComponents/Navigation';

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
import Paginator from './components/Paginator';
import paginatorViewerOptions from './components/Paginator/paginatorViewerOptions';
import Tooltip from './components/Tooltip';
import tooltipViewerOptions from './components/Tooltip/tooltipViewerOptions';
import Avatar from './components/Avatar';
import avatarViewerOptions from './components/Avatar/avatarViewerOptions';
import Thumbnail from './components/Thumbnail';
import thumbnailViewerOptions from './components/Thumbnail/thumbnailViewerOptions';
import ButtonGroup from './components/ButtonGroup';
import buttonGroupViewerOptions from './components/ButtonGroup/buttonGroupViewerOptions';
import Skeleton from './components/Skeleton';
import skeletonViewerOptions from './components/Skeleton/skeletonViewerOptions';
import Progress from './components/Progress';
import progressViewerOptions from './components/Progress/progressViewerOptions';
import ActionList from './components/ActionList';
import actionListViewerOptions from './components/ActionList/actionListViewerOptions';


class App extends Component {
  render() {
    return (
      <div className="app">
        <Navigation/>
        <div className='container'>
          <ComponentViewer options={actionListViewerOptions}>
            <ActionList></ActionList>
          </ComponentViewer>
          <ComponentViewer options={progressViewerOptions}>
            <Progress/>
          </ComponentViewer>
          <ComponentViewer options={skeletonViewerOptions}>
            <Skeleton/>
          </ComponentViewer>
          <ComponentViewer options={buttonGroupViewerOptions}>
            <ButtonGroup>
              <Button>Left</Button>
              <Button>Center</Button>
              <Button>Right</Button>
            </ButtonGroup>
          </ComponentViewer>
          <ComponentViewer options={thumbnailViewerOptions}>
            <Thumbnail alt=''/>
          </ComponentViewer>
          <ComponentViewer options={avatarViewerOptions}>
            <Avatar/>
          </ComponentViewer>
          <ComponentViewer options={tooltipViewerOptions}>
            <Tooltip>
              <Button>Hover me!</Button>
            </Tooltip>
          </ComponentViewer>
          <ComponentViewer options={paginatorViewerOptions}>
            <Paginator/>
          </ComponentViewer>
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
      </div>
    );
  }
}

export default App;
