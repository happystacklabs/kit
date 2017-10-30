const selectViewerOptions = [
  {
    name: 'name',
    value: 'provider',
    type: 'string',
    description: 'Name of the Select input',
  },
  {
    name: 'placeholder',
    value: 'Select a payment provider',
    type: 'string',
    description: 'Add a placeholder',
  },
  {
    name: 'value',
    value: 'wechat',
    type: 'string',
    description: 'The value of the input',
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
    description: 'Add an help text label',
  },
  {
    name: 'error',
    value: false,
    type: 'bool',
    description: 'Add an error state to the input',
  },
  {
    name: 'disabled',
    value: false,
    type: 'bool',
    description: 'Disable the input',
  },
  {
    name: 'options',
    value: [
      {label: 'wechat', value: 'wechat'},
      {label: 'alipay', value: 'alipay'},
      {label: 'paypal', value: 'paypal'},
    ],
    type: 'array',
    description: 'The options of the select input',
  },
  {
    name: 'onChange',
    value: ()=>{},
    type: 'function',
    description: 'Function to be called on change',
  }
];

export default selectViewerOptions;
