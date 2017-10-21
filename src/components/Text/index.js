import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './Text.css';


export const tagNames = [
  'span',
  'p',
  'h1',
  'h2',
  'h3',
  'h4',
  'h5',
  'h6',
];

export const tagSizes = [
  'extraSmall',
  'small',
  'regular',
  'medium',
  'large',
  'extraLarge'
]

class Text extends Component {
  static propTypes = {
    children: PropTypes.node,
    element: PropTypes.oneOf(tagNames),
    size: PropTypes.oneOf(tagSizes),
  };

  static defaultProps = {
      element: 'span',
      size: 'regular',
      weight: 'normal',
   };

  render() {
    const Element = `${this.props.element}`;
    const classes = ['fontFamily'];

    switch (this.props.size) {
      case "extraSmall":
        classes.push('sizeExtraSmall');
        break;
      case "small":
        classes.push('sizeSmall');
        break;
      case "regular":
        classes.push('sizeRegular');
        break;
      case "medium":
        classes.push('sizeMedium');
        break;
      case "large":
        classes.push('sizeLarge');
        break;
      case "extraLarge":
        classes.push('sizeExtraLarge');
        break;
      default:
        classes.push('sizeRegular');
    }

    switch (this.props.weight) {
      case "normal":
        classes.push('normalWeight');
        break;
      case "bold":
        classes.push('boldWeight');
        break;
      default:
        classes.push('normalWeight');
    }

    return (
      <Element className={classes.join(' ')}>{this.props.children}</Element>
    );
  }
}

export default Text;
