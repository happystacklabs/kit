import React, { Component } from 'react';
import PropTypes from 'prop-types';
import 'font-awesome/css/font-awesome.min.css';
import './Icon.css';


export const iconNames = {
  'plus': 'fa-plus',
  'exclamation': 'fa-exclamation',
  'exclamation-triangle': 'fa-exclamation-triangle',
  'arrow-down': 'fa-arrow-down',
  'arrow-left': 'fa-arrow-left',
  'arrow-right': 'fa-arrow-right',
  'arrow-up': 'fa-arrow-up',
  'sort': 'fa-sort',
  'calendar': 'fa-calendar',
  'times': 'fa-times',
  'caret-down': 'fa-caret-down',
  'caret-up': 'fa-caret-up',
  'check': 'fa-check',
  'chevron-down': 'fa-chevron-down',
  'chevron-left': 'fa-chevron-left',
  'chevron-right': 'fa-chevron-right',
  'chevron-up': 'fa-chevron-up',
  'times-circle': 'fa-times-circle',
  'chevron-circle-down': 'fa-chevron-circle-down',
  'chevron-circle-left': 'fa-chevron-circle-left',
  'chevron-circle-right': 'fa-chevron-circle-right',
  'chevron-circle-up': 'fa-chevron-circle-up',
  'plus-circle': 'fa-plus-circle',
  'commenting': 'fa-commenting',
  'trash': 'fa-trash',
  'ban': 'fa-ban',
  'clone': 'fa-clone',
  'code': 'fa-code',
  'download': 'fa-download',
  'upload': 'fa-upload',
  'external-link': 'fa-external-link',
  'question-circle': 'fa-question-circle',
  'ellipsis-h': 'fa-ellipsis-h',
  'file-text': 'fa-file-text',
  'print': 'fa-print',
  'retweet': 'fa-retweet',
  'search': 'fa-search',
  'minus': 'fa-minus',
  'eye': 'fa-eye',
}

export const iconColors = {
  'ink': 'colorInk',
  'inkLight': 'colorInkLight',
  'positive': 'colorPositive',
  'negative': 'colorNegative',
  'purple': 'colorPurple',
}


class Icon extends Component {
  static propTypes = {
    name: PropTypes.oneOf(Object.keys(iconNames)),
  };

  static defaultProps = {
    color: 'ink',
   };

  render() {
    const classes = ['fa'];
    classes.push(this.props.className);
    classes.push(iconNames[this.props.name]);
    classes.push(iconColors[this.props.color]);

    return (
      <i className={classes.join(' ')} aria-hidden='true'></i>
    );
  }
}

export default Icon;
