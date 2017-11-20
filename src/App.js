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

const components = [
  {
    path: '/actionlist',
    name: 'Action List',
    options: actionListViewerOptions,
    code: (
      <ActionList/>
    ),
  },
  {
    path: '/progress',
    name: 'Progress',
    options: progressViewerOptions,
    code: (
      <Progress/>
    ),
  },
  {
    path: '/skeleton',
    name: 'Skeleton',
    options: skeletonViewerOptions,
    code: (
      <Skeleton/>
    ),
  },
  {
    path: '/buttongroup',
    name: 'Button Group',
    options: buttonGroupViewerOptions,
    code: (
      <ButtonGroup>
        <Button>Left</Button>
        <Button>Center</Button>
        <Button>Right</Button>
      </ButtonGroup>
    ),
  },
  {
    path: '/thumbnail',
    name: 'Thumbnail',
    options: thumbnailViewerOptions,
    code: (
      <Thumbnail alt=''/>
    ),
  },
  {
    path: '/avatar',
    name: 'Avatar',
    options: avatarViewerOptions,
    code: (
      <Avatar/>
    ),
  },
  {
    path: '/tooltip',
    name: 'Tooltip',
    options: tooltipViewerOptions,
    code: (
      <Tooltip>
        <Button>Hover me!</Button>
      </Tooltip>
    ),
  },
  {
    path: '/paginator',
    name: 'Paginator',
    options: paginatorViewerOptions,
    code: (
      <Paginator/>
    ),
  },
  {
    path: '/spinner',
    name: 'Spinner',
    options: spinnerViewerOptions,
    code: (
      <Spinner/>
    ),
  },
  {
    path: '/choicelist',
    name: 'Choice List',
    options: choiceListViewerOptions,
    code: (
      <ChoiceList
        name=''
        choices={[]}
      />
    ),
  },
  {
    path: '/checkbox',
    name: 'Checkbox',
    options: checkboxViewerOptions,
    code: (
      <Checkbox name=''/>
    ),
  },
  {
    path: '/button',
    name: 'Button',
    options: buttonViewerOptions,
    code: (
      <Button/>
    ),
  },
  {
    path: '/icon',
    name: 'Icon',
    options: iconViewerOptions,
    code: (
      <Icon/>
    ),
  },
  {
    path: '/select',
    name: 'Select',
    options: selectViewerOptions,
    code: (
      <Select
        options={[]}
        name=''
        value=''
      />
    ),
  },
  {
    path: '/switch',
    name: 'Switch',
    options: switchViewerOptions,
    code: (
      <Switch/>
    ),
  },
  {
    path: '/text',
    name: 'Text',
    options: textViewerOptions,
    code: (
      <Text/>
    ),
  },
  {
    path: '/textinput',
    name: 'Text Input',
    options: textInputViewerOptions,
    code: (
      <TextInput name=''/>
    ),
  },
];

class App extends Component {
  render() {
    const routes =  components.map((component) => {
      return {name: component.name, path: component.path};
    });
    return (
      <Router>
        <div className="app">
          <Navigation routes={routes}/>
          <div className='container'>
            {components.map((component, index) => (
              <Route key={index} exact path={component.path} render={() => (
                <ComponentViewer options={component.options}>
                  {component.code}
                </ComponentViewer>
              )}/>
            ))}
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
