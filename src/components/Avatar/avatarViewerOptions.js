const avatarViewerOptions = [
  {
    value: 'http://via.placeholder.com/350x350',
    name: 'source',
    type: 'string',
    description: 'Source of the image of the avatar',
  },
  {
    value: '',
    name: 'initial',
    type: 'string',
    description: 'Show initial instead of image',
  },
  {
    value: 'medium',
    name: 'size',
    type: [
      'small',
      'medium',
      'large',
    ],
    description: 'Size of the image of the avatar',
  },
];

export default avatarViewerOptions;
