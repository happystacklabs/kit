const modalViewerOptions = [
  {
    value: false,
    name: 'open',
    type: 'bool',
    description: 'show the modal window',
  },
  {
    name: 'width',
    value: null,
    type: 'number',
    description: 'Width of the modal',
  },
  {
    name: 'height',
    value: null,
    type: 'number',
    description: 'Height of the modal',
  },
  {
    name: 'children',
    value: 'Modal Content',
    type: 'node',
    description: 'Content of the modal',
  },
  {
    name: 'closeModal',
    value: 'open',
    type: 'function',
    description: 'Callback when modal is closed',
  },
];

export default modalViewerOptions;
