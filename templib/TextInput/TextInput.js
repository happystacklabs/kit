import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './TextInput.css';
import styles from './TextInput.styles';
import Text from '../Text';
import Icon from '../Icon';
import Button from '../Button';
import classNames from 'classnames/bind';


let cx = classNames.bind(styles);

const renderError = (error) => {
  if (error) {
    return (
      <div className={styles.errorMessage}>
        <Icon name='exclamation' color='negative' className={styles.errorIcon}/>
        <Text color='negative' element='span' size='small'>{error}</Text>
      </div>
    );
  }
};

const renderHelpText = (helpText) => {
  if (helpText) {
    return (
      <div className={styles.helpText}>
        <Text color='inkLight' element='span' size='small'>{helpText}</Text>
      </div>
    );
  }
};

const renderLabel = (name, labelText) => {
  if (labelText) {
    return (
      <div className={styles.label}>
        <label htmlFor={name}>
          <Text size='regular'>{labelText}</Text>
        </label>
      </div>
    );
  }
};

const renderAction = (action) => {
  if (action) {
    return (
      <Button
        plain
        className={styles.action}
        onClick={action.onAction}
      >
        {action.title}
      </Button>
    );
  }
};

export const type = [
  'email',
  'text',
  'number',
  'password',
  'search',
  'url',
];

class TextInput extends Component {
  static propTypes = {
    name: PropTypes.string.isRequired,
    value: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.number,
    ]),
    placeholder: PropTypes.string,
    readOnly: PropTypes.bool,
    disabled: PropTypes.bool,
    maxLength: PropTypes.number,
    shake: PropTypes.bool,
    error: PropTypes.string,
    type: PropTypes.oneOf(type),
    label: PropTypes.string,
    helpText: PropTypes.string,
    action: PropTypes.shape({
      title: PropTypes.string,
      onAction: PropTypes.function,
    }),
  };

  static defaultProps = {
    type: 'text',
  };

  handleChange = (event) => {
    if (this.props.onChange === null) { return; }
    this.props.onChange({name: this.props.name, value: event.target.value});
  };

  render() {
    const readOnly = !this.props.readOnly && this.props.onChange ? false : true;

    const classInput = cx({
      shake: this.props.shake || (this.props.maxLength && this.props.value.length >= this.props.maxLength),
      error: this.props.error },
      styles.input
    );

    return (
      <div className={this.props.className}>
        {renderLabel(this.props.name, this.props.label)}
        {renderAction(this.props.action)}
        <input
          name={this.props.name}
          value={this.props.value}
          placeholder={this.props.placeholder}
          onChange={this.handleChange}
          readOnly={readOnly}
          disabled={this.props.disabled}
          className={classInput}
          maxLength={this.props.maxLength}
          type={this.props.type}
        />
        {renderError(this.props.error)}
        {renderHelpText(this.props.helpText)}
      </div>
    );
  }
}

export default TextInput;
