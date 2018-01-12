const switchViewerOptions = [
  {
    name: 'color',
    value: 'main',
    type: [
      'positive',
      'negative',
      'main',
    ],
    description: 'Change the color',
  },
  {
    name: 'size',
    value: 'medium',
    type: [
      'small',
      'medium',
      'large',
    ],
    description: 'Change the color',
  },
  {
    name: 'on',
    value: false,
    type: 'bool',
    description: 'Make the switch on or off',
  },
  {
    name: 'round',
    value: false,
    type: 'bool',
    description: 'Make the switch round',
  },
  {
    name: 'onClick',
    value: 'on',
    type: 'function',
    description: 'When the switch is click',
  },
];

export default switchViewerOptions;
