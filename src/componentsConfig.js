import React from 'react';

// components import
import Text from './components/Text/Text';
import Button from './components/Button/Button';
import Select from './components/Select/Select';
import Switch from './components/Switch/Switch';
import TextInput from './components/TextInput/TextInput';
import Checkbox from './components/Checkbox/Checkbox';
import ChoiceList from './components/ChoiceList/ChoiceList';
import Spinner from './components/Spinner/Spinner';
import Paginator from './components/Paginator/Paginator';
import Avatar from './components/Avatar/Avatar';
import Thumbnail from './components/Thumbnail/Thumbnail';
import ButtonGroup from './components/ButtonGroup/ButtonGroup';
import Skeleton from './components/Skeleton/Skeleton';
import Progress from './components/Progress/Progress';
import Dropzone from './components/Dropzone/Dropzone';
import Modal from './components/Modal/Modal';
import Dropdown from './components/Dropdown/Dropdown';
import Tooltip from './components/Tooltip/Tooltip';
import DatePicker from './components/DatePicker/DatePicker';

// options import
import {
  buttonViewerOptions,
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
  dropzoneViewerOptions,
  datePickerViewerOptions,
  modalViewerOptions,
  dropdownViewerOptions,
} from './components/viewerOptions';


/*
* configuration
* -------------
* To add a component in the viewer settings, add a row in the components array:
*
* {
*   path: 'the path of the component',
*   name: 'the name of the component',
*   options: pass the option object,
*   code: (
*     // code of the component
*   )
* }
*/

const components = [
  {
    path: '/modal',
    name: 'Modal',
    options: modalViewerOptions,
    code: (
      <Modal />
    ),
  },
  {
    path: '/dropdown',
    name: 'Dropdown',
    options: dropdownViewerOptions,
    code: (
      <Dropdown>
        <Button>Dropdown</Button>
      </Dropdown>
    ),
  },
  {
    path: '/datepicker',
    name: 'DatePicker',
    options: datePickerViewerOptions,
    code: (
      <DatePicker />
    ),
  },
  {
    path: '/dropzone',
    name: 'Dropzone',
    options: dropzoneViewerOptions,
    code: (
      <Dropzone />
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
