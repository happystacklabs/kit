const dropdownViewerOptions = [
  {
    name: 'width',
    value: 200,
    type: 'number',
    description: 'Panel width',
  },
  {
    name: 'right',
    value: false,
    type: 'bool',
    description: 'Align the panel on right of the button',
  },
  {
    name: 'onSelect',
    value: null,
    type: 'function',
    description: 'Function to be called on change',
  },
  {
    name: 'children',
    value: '',
    type: 'node',
    description: 'Text of the dropdown button',
  },
  {
    name: 'data',
    value: ['option 1', 'option 2', 'option 3'],
    type: 'array',
    description: 'Data for the drop list',
  },
];

export default dropdownViewerOptions;
