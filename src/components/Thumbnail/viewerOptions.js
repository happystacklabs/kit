const avatarViewerOptions = [
  {
    value: 'http://via.placeholder.com/350x350',
    name: 'source',
    type: 'string',
    description: 'Source of the image of the thumbnail',
  },
  {
    value: 'Placeholder',
    name: 'alt',
    type: 'string',
    description: 'Alternative text for the image',
  },
  {
    value: 'medium',
    name: 'size',
    type: [
      'small',
      'medium',
      'large',
    ],
    description: 'Size of the thumbnail',
  },
];

export default avatarViewerOptions;
