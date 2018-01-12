const textViewerOptions = [
  {
    name: 'children',
    value: 'This is an headline',
    type: 'string',
    description: 'Content of the text',
  },
  {
    name: 'element',
    value: 'span',
    type: [
      'span',
      'p',
      'h1',
      'h2',
      'h3',
      'h4',
      'h5',
      'h6',
    ],
    description: 'Change the type of the text',
  },
  {
    name: 'size',
    value: 'body',
    type: [
      'display-xlarge',
      'display-large',
      'display-medium',
      'display-small',
      'heading',
      'sub-heading',
      'body',
      'caption',
    ],
    description: 'Change the size of the text',
  },
  {
    name: 'color',
    value: 'ink',
    type: [
      'white',
      'ink',
      'ink-light',
      'positive',
      'negative',
      'main',
    ],
    description: 'Change the color of the text',
  },
  {
    name: 'bold',
    value: false,
    type: 'bool',
    description: 'Make the text bold',
  },
];

export default textViewerOptions;
