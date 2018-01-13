import solid from '@fortawesome/fontawesome-free-solid';

const icons = Object.keys(solid).map(icon => solid[icon].iconName);

const iconViewerOptions = [
  {
    name: 'name',
    value: 'coffee',
    type: icons,
    description: 'Name of the icon',
  },
  {
    name: 'color',
    value: 'ink',
    type: [
      'ink',
      'ink-light',
      'negative',
      'positive',
      'main',
      'white',
    ],
    description: 'Change the color',
  },
  {
    name: 'size',
    value: 'sm',
    type: [
      'xs',
      'sm',
      'lg',
      '2x',
      '3x',
      '5x',
      '7x',
      '10x',
    ],
    description: 'Size of the icon',
  },
  {
    value: false,
    name: 'regular',
    type: 'bool',
    description: 'Switch to the regular version of the icon',
  },
  {
    value: false,
    name: 'spin',
    type: 'bool',
    description: 'Spin the icon',
  },
  {
    value: false,
    name: 'fixedWidth',
    type: 'bool',
    description: 'Give a fixed width to the icon',
  },
];

export default iconViewerOptions;
