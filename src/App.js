import React, { Component } from 'react';
import ComponentViewer from './components/ComponentViewer';
import './App.css';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'
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

const routes = [
  {
    path: '/actionlist',
    name: 'Action List',
  },
  {
    path: '/progress',
    name: 'Progress',
  },
  {
    path: '/skeleton',
    name: 'Skeleton',
  },
  {
    path: '/buttongroup',
    name: 'Button Group',
  },
  {
    path: '/thumbnail',
    name: 'Thumbnail',
  },
  {
    path: '/avatar',
    name: 'Avatar',
  },
  {
    path: '/tooltip',
    name: 'Tooltip',
  },
  {
    path: '/paginator',
    name: 'Paginator',
  },
  {
    path: '/spinner',
    name: 'Spinner',
  },
  {
    path: '/choicelist',
    name: 'Choice List',
  },
  {
    path: '/checkbox',
    name: 'Checkbox',
  },
  {
    path: '/button',
    name: 'Button',
  },
  {
    path: '/icon',
    name: 'Icon',
  },
  {
    path: '/select',
    name: 'Select',
  },
  {
    path: '/switch',
    name: 'Switch',
  },
  {
    path: '/text',
    name: 'Text',
  },
  {
    path: '/textinput',
    name: 'Text Input',
  },
];

class App extends Component {
  render() {
    return (
      <Router>
        <div className="app">
          <Navigation routes={routes}/>
          <div className='container'>

            <Route exact path='/actionlist' render={() => (
              <ComponentViewer options={actionListViewerOptions}>
                <ActionList></ActionList>
              </ComponentViewer>
            )}/>

            <Route exact path='/progress' render={() => (
              <ComponentViewer options={progressViewerOptions}>
                <Progress/>
              </ComponentViewer>
            )}/>

            <Route exact path='/skeleton' render={() => (
              <ComponentViewer options={skeletonViewerOptions}>
                <Skeleton/>
              </ComponentViewer>
            )}/>

            <Route exact path='/buttongroup' render={() => (
              <ComponentViewer options={buttonGroupViewerOptions}>
                <ButtonGroup>
                  <Button>Left</Button>
                  <Button>Center</Button>
                  <Button>Right</Button>
                </ButtonGroup>
              </ComponentViewer>
            )}/>

          <Route exact path='/thumbnail' render={() => (
              <ComponentViewer options={thumbnailViewerOptions}>
                <Thumbnail alt=''/>
              </ComponentViewer>
            )}/>

          <Route exact path='/avatar' render={() => (
              <ComponentViewer options={avatarViewerOptions}>
                <Avatar/>
              </ComponentViewer>
            )}/>

          <Route exact path='/tooltip' render={() => (
              <ComponentViewer options={tooltipViewerOptions}>
                <Tooltip>
                  <Button>Hover me!</Button>
                </Tooltip>
              </ComponentViewer>
            )}/>

          <Route exact path='/paginator' render={() => (
              <ComponentViewer options={paginatorViewerOptions}>
                <Paginator/>
              </ComponentViewer>
            )}/>

          <Route exact path='/spinner' render={() => (
              <ComponentViewer options={spinnerViewerOptions}>
                <Spinner/>
              </ComponentViewer>
            )}/>

          <Route exact path='/choicelist' render={() => (
              <ComponentViewer options={choiceListViewerOptions}>
                <ChoiceList
                  name=''
                  choices={[]}
                />
              </ComponentViewer>
            )}/>

          <Route exact path='/checkbox' render={() => (
              <ComponentViewer options={checkboxViewerOptions}>
                <Checkbox name=''/>
              </ComponentViewer>
            )}/>

          <Route exact path='/button' render={() => (
              <ComponentViewer options={buttonViewerOptions}>
                <Button/>
              </ComponentViewer>
            )}/>

          <Route exact path='/icon' render={() => (
              <ComponentViewer options={iconViewerOptions}>
                <Icon/>
              </ComponentViewer>
            )}/>

          <Route exact path='/select' render={() => (
              <ComponentViewer options={selectViewerOptions}>
                <Select
                  options={[]}
                  name=''
                  value=''
                />
              </ComponentViewer>
            )}/>

          <Route exact path='/switch' render={() => (
              <ComponentViewer options={switchViewerOptions}>
                <Switch/>
              </ComponentViewer>
            )}/>

          <Route exact path='/text' render={() => (
              <ComponentViewer options={textViewerOptions}>
                <Text/>
              </ComponentViewer>
            )}/>

          <Route exact path='/textinput' render={() => (
              <ComponentViewer options={textInputViewerOptions}>
                <TextInput name=''/>
              </ComponentViewer>
            )}/>
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
