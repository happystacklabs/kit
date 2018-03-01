const datePickerViewerOptions = [
  {
    name: 'id',
    value: 'date',
    type: 'string',
    description: 'Name of the field',
  },
  {
    name: 'value',
    value: undefined,
    type: 'string',
    description: 'value of the date',
  },
  {
    name: 'from',
    value: undefined,
    type: 'string',
    description: 'value of the from date',
  },
  {
    name: 'to',
    value: undefined,
    type: 'string',
    description: 'value of the to date',
  },
  {
    name: 'range',
    value: false,
    type: 'bool',
    description: 'Date range',
  },
  {
    name: 'onChange',
    value: null,
    type: 'function',
    description: 'Function to be called on change',
  },
];

export default datePickerViewerOptions;
