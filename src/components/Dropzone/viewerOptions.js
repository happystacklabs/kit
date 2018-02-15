const dropzoneViewerOptions = [
  {
    value: 'avatar',
    name: 'name',
    type: 'string',
    description: 'Name of the dropzone',
  },
  {
    value: false,
    name: 'multiple',
    type: 'bool',
    description: 'Allow multiple files',
  },
  {
    name: 'onChange',
    value: null,
    type: 'function',
    description: 'Function to be called on change',
  },
];

export default dropzoneViewerOptions;
