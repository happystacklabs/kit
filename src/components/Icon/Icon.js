import React, { Component } from 'react';
import PropTypes from 'prop-types';
import fontAwesome from 'font-awesome/css/font-awesome.min.css';
import styles from './Icon.css';
import classNames from 'classnames/bind';


let cx = classNames.bind(styles);

export const names = {
  'plus': fontAwesome['fa-plus'],
  'exclamation': fontAwesome['fa-exclamation'],
  'exclamation-triangle': fontAwesome['fa-exclamation-triangle'],
  'arrow-down': fontAwesome['fa-arrow-down'],
  'arrow-left': fontAwesome['fa-arrow-left'],
  'arrow-right': fontAwesome['fa-arrow-right'],
  'arrow-up': fontAwesome['fa-arrow-up'],
  'sort': fontAwesome['fa-sort'],
  'calendar': fontAwesome['fa-calendar'],
  'times': fontAwesome['fa-times'],
  'caret-down': fontAwesome['fa-caret-down'],
  'caret-up': fontAwesome['fa-caret-up'],
  'check': fontAwesome['fa-check'],
  'chevron-down': fontAwesome['fa-chevron-down'],
  'chevron-left': fontAwesome['fa-chevron-left'],
  'chevron-right': fontAwesome['fa-chevron-right'],
  'chevron-up': fontAwesome['fa-chevron-up'],
  'times-circle': fontAwesome['fa-times-circle'],
  'chevron-circle-down': fontAwesome['fa-chevron-circle-down'],
  'chevron-circle-left': fontAwesome['fa-chevron-circle-left'],
  'chevron-circle-right': fontAwesome['fa-chevron-circle-right'],
  'chevron-circle-up': fontAwesome['fa-chevron-circle-up'],
  'plus-circle': fontAwesome['fa-plus-circle'],
  'commenting': fontAwesome['fa-commenting'],
  'trash': fontAwesome['fa-trash'],
  'ban': fontAwesome['fa-ban'],
  'clone': fontAwesome['fa-clone'],
  'code': fontAwesome['fa-code'],
  'download': fontAwesome['fa-download'],
  'upload': fontAwesome['fa-upload'],
  'external-link': fontAwesome['fa-external-link'],
  'question-circle': fontAwesome['fa-question-circle'],
  'ellipsis-h': fontAwesome['fa-ellipsis-h'],
  'file-text': fontAwesome['fa-file-text'],
  'print': fontAwesome['fa-print'],
  'retweet': fontAwesome['fa-retweet'],
  'search': fontAwesome['fa-search'],
  'minus': fontAwesome['fa-minus'],
  'eye': fontAwesome['fa-eye'],
  'angle-down': fontAwesome['fa-angle-down'],
}

export const colors = {
  'ink': styles.ink,
  'inkLight': styles.inkLight,
  'positive': styles.positive,
  'negative': styles.negative,
  'purple': styles.purple,
  'white': styles.white,
}


class Icon extends Component {
  static propTypes = {
    name: PropTypes.oneOf(Object.keys(names)),
    color: PropTypes.oneOf(Object.keys(colors)),
  };

  static defaultProps = {
    color: 'ink',
   };

  render() {
    const classes = cx(
      this.props.className,
      fontAwesome.fa,
      names[this.props.name],
      colors[this.props.color],
    );

    return (
      <i className={classes} aria-hidden='true'></i>
    );
  }
}

export default Icon;
