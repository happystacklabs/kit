const textInputViewerOptions = [
  {
    name: 'shake',
    value: false,
    type: 'bool',
    description: 'Shake animation to the input',
  },
  {
    name: 'disabled',
    value: false,
    type: 'bool',
    description: 'Disable the input',
  },
  {
    name: 'readOnly',
    value: false,
    type: 'bool',
    description: 'make the input read only',
  },
  {
    name: 'name',
    value: 'firstname',
    type: 'string',
    description: 'Name of the text input',
  },
  {
    name: 'value',
    value: '',
    type: 'string',
    description: 'Value of the text input',
  },
  {
    name: 'placeholder',
    value: 'Enter your first name',
    type: 'string',
    description: 'Placeholder of the text input',
  },
  {
    name: 'label',
    value: '',
    type: 'string',
    description: 'Add a label to the input',
  },
  {
    name: 'helpText',
    value: '',
    type: 'string',
    description: 'Add a help text to the input',
  },
  {
    name: 'maxLength',
    value: undefined,
    type: 'number',
    description: 'Set a max length to the input',
  },
  {
    name: 'error',
    value: '',
    type: 'string',
    description: 'Set an error message',
  },
  {
    name: 'type',
    value: 'text',
    type: [
      'email',
      'text',
      'number',
      'password',
      'search',
      'url',
    ],
    description: 'The type of input',
  },
  {
    name: 'onChange',
    value: 'value',
    type: 'function',
    description: 'Function to be called on change',
  },
];

export default textInputViewerOptions;
