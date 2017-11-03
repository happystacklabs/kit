const checkboxViewerOptions = [
  {
    value: 'emailNotification',
    name: 'name',
    type: 'string',
    description: 'Name of the checkbox',
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
