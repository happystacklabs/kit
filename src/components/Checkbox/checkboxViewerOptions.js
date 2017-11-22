const checkboxViewerOptions = [
  {
    value: 'emailNotification',
    name: 'name',
    type: 'string',
    description: 'Name of the checkbox',
  },
  {
    value: '',
    name: 'label',
    type: 'string',
    description: 'Label of the checkbox',
  },
  {
    value: '',
    name: 'value',
    type: 'string',
    description: 'Value of the checkbox',
  },
  {
    value: '',
    name: 'helpText',
    type: 'string',
    description: 'Helptext of the checkbox',
  },
  {
    value: 'checkbox',
    name: 'type',
    type: [
      'checkbox',
      'radio',
    ],
    description: 'the type of the input',
  },
  {
    value: false,
    name: 'checked',
    type: 'bool',
    description: 'Check the checkbox',
  },
  {
    value: false,
    name: 'disabled',
    type: 'bool',
    description: 'Disable the checkbox',
  },
  {
    value: false,
    name: 'error',
    type: 'bool',
    description: 'Set the error state of the checkbox',
  },
  {
    value: 'checked',
    name: 'onChange',
    type: 'function',
    description: 'Called when onChange checkbox',
  },
];

export default checkboxViewerOptions;
