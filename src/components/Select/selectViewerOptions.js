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
    name: 'value',
    value: 'wechat',
    type: 'string',
    description: 'The value',
  },
  {
    name: 'onChange',
    value: ()=>{},
    type: 'function',
    description: 'Function to be called on change',
  }
];

export default selectViewerOptions;
