import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styles from './Checkbox.css';
import classNames from 'classnames/bind';
import Icon from '../Icon';
import Text from '../Text';


let cx = classNames.bind(styles);

const renderLabel = (name, labelText) => {
  if (labelText) {
    return (
      <label htmlFor={name} className={styles.label}>
        <Text size='regular'>{ labelText }</Text>
      </label>
    );
  }
};

const renderHelpText = (helpText) => {
  if (helpText) {
    return (
      <div className={styles.helpText}>
        <Text color='inkLight' element='span' size='small'>{ helpText }</Text>
      </div>
    );
  }
};

const renderCheckmark = (type) => {
  if (type === 'checkbox') {
    return (
      <Icon name='check' color='white' className={styles.checkmark}/>
    );
  } else {
    return (
      <div className={styles.radioMiddle}></div>
    );
  }
}

export const type = [
  'checkbox',
  'radio',
];

class Checkbox extends Component {
  static propTypes = {
    name: PropTypes.string.isRequired,
    checked: PropTypes.bool,
    disabled: PropTypes.bool,
    error: PropTypes.bool,
    label: PropTypes.string,
    value: PropTypes.string,
    id: PropTypes.string,
    helpText: PropTypes.string,
    type: PropTypes.oneOf(type),
  };

  static defaultProps = {
    type: 'checkbox',
    checked: false,
   };

   handleChange = (event) => {
     if (this.props.onChange === null) { return; }
     this.props.onChange({value: !this.props.checked, id: this.props.id});
   };

  render() {
    const classes = cx(
      styles.innerWrapper,
      {
        radioInput: this.props.type === 'radio',
        error: this.props.error,
        checked: this.props.checked,
      }
    );

    return (
      <div className={classNames(this.props.className, styles.wrapper)}>
        {renderLabel(this.props.id, this.props.label)}
        <div className={classes}>
          <input
            name={this.props.name}
            type={this.props.type}
            id={this.props.id}
            value={this.props.value}
            checked={this.props.checked}
            onChange={this.handleChange}
            disabled={this.props.disabled}
            className={styles.input}
          />
          {renderCheckmark(this.props.type)}
        </div>
        {renderHelpText(this.props.helpText)}
      </div>
    );
  }
}

export default Checkbox;
