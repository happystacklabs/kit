import React from 'react';

// Components import
import {
  Text,
  Button,
  Icon,
  Select,
  Switch,
  TextInput,
  Checkbox,
  ChoiceList,
  Spinner,
  Paginator,
  Tooltip,
  Avatar,
  Thumbnail,
  ButtonGroup,
  Skeleton,
  Progress,
  ActionList,
} from './components';

// Components options import
import {
  buttonViewerOptions,
  iconViewerOptions,
  selectViewerOptions,
  switchViewerOptions,
  textViewerOptions,
  textInputViewerOptions,
  checkboxViewerOptions,
  choiceListViewerOptions,
  spinnerViewerOptions,
  paginatorViewerOptions,
  tooltipViewerOptions,
  avatarViewerOptions,
  thumbnailViewerOptions,
  buttonGroupViewerOptions,
  skeletonViewerOptions,
  progressViewerOptions,
  actionListViewerOptions,
} from './components/viewerOptions';

// Components configuration
const components = [
  {
    path: '/actionlist',
    name: 'Action List',
    options: actionListViewerOptions,
    code: (
      <ActionList />
    ),
  },
  {
    path: '/progress',
    name: 'Progress',
    options: progressViewerOptions,
    code: (
      <Progress />
    ),
  },
  {
    path: '/skeleton',
    name: 'Skeleton',
    options: skeletonViewerOptions,
    code: (
      <Skeleton />
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
      <Thumbnail alt="" />
    ),
  },
  {
    path: '/avatar',
    name: 'Avatar',
    options: avatarViewerOptions,
    code: (
      <Avatar />
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
      <Paginator />
    ),
  },
  {
    path: '/spinner',
    name: 'Spinner',
    options: spinnerViewerOptions,
    code: (
      <Spinner />
    ),
  },
  {
    path: '/choicelist',
    name: 'Choice List',
    options: choiceListViewerOptions,
    code: (
      <ChoiceList
        name=""
        choices={[]}
      />
    ),
  },
  {
    path: '/checkbox',
    name: 'Checkbox',
    options: checkboxViewerOptions,
    code: (
      <Checkbox name="" />
    ),
  },
  {
    path: '/button',
    name: 'Button',
    options: buttonViewerOptions,
    code: (
      <Button />
    ),
  },
  {
    path: '/icon',
    name: 'Icon',
    options: iconViewerOptions,
    code: (
      <Icon />
    ),
  },
  {
    path: '/select',
    name: 'Select',
    options: selectViewerOptions,
    code: (
      <Select
        options={[]}
        name=""
        value=""
      />
    ),
  },
  {
    path: '/switch',
    name: 'Switch',
    options: switchViewerOptions,
    code: (
      <Switch />
    ),
  },
  {
    path: '/text',
    name: 'Text',
    options: textViewerOptions,
    code: (
      <Text />
    ),
  },
  {
    path: '/textinput',
    name: 'Text Input',
    options: textInputViewerOptions,
    code: (
      <TextInput name="" />
    ),
  },
];

export default components;
