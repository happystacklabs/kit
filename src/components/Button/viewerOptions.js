const buttonViewerOptions = [
  {
    value: 'Add to cart',
    name: 'children',
    type: 'string',
    description: 'Text of the object',
  },
  {
    value: 'medium',
    name: 'size',
    type: [
      'small',
      'medium',
      'large',
    ],
    description: 'Change the size',
  },
  {
    value: 'default',
    name: 'color',
    type: [
      'positive',
      'negative',
      'main',
      'default',
    ],
    description: 'Change the color',
  },
  {
    value: false,
    name: 'loading',
    type: 'bool',
    description: 'Change the state of the button to loading',
  },
  {
    value: false,
    name: 'disabled',
    type: 'bool',
    description: 'Disabled the button',
  },
  {
    value: false,
    name: 'square',
    type: 'bool',
    description: 'Square shape of button',
  },
  {
    value: false,
    name: 'fullWidth',
    type: 'bool',
    description: 'Make the button full width',
  },
  {
    value: false,
    name: 'plain',
    type: 'bool',
    description: 'Make the button plain',
  },
  {
    value: false,
    name: 'outline',
    type: 'bool',
    description: 'Make the button outline',
  },
  {
    value: false,
    name: 'onClick',
    type: 'function',
    description: 'call the parent when clicked',
  },
];

export default buttonViewerOptions;
