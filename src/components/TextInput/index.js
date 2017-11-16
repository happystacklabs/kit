import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './TextInput.css';
import Text from '../Text';
import Icon from '../Icon';

const renderError = (error) => {
  if (error) {
    return (
      <div className='errorMessage'>
        <Icon name='exclamation' color='negative' className='errorIcon'/>
        <Text color='negative' element='span' size='small'>{ error }</Text>
      </div>
    );
  }
};

const renderHelpText = (helpText) => {
  if (helpText) {
    return (
      <div className='helpText'>
        <Text color='inkLight' element='span' size='small'>{ helpText }</Text>
      </div>
    );
  }
};

const renderLabel = (name, labelText) => {
  if (labelText) {
    return (
      <div className='label'>
        <label htmlFor={name}>
          <Text size='regular'>{ labelText }</Text>
        </label>
      </div>
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
    maxLength: PropTypes.string,
    shake: PropTypes.bool,
    error: PropTypes.string,
    type: PropTypes.oneOf(type),
    label: PropTypes.string,
    helpText: PropTypes.string,
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
    const classes = ['textInput'];

    classes.push(this.props.className);

    if (this.props.shake) {
      classes.push('shake');
    }

    if (this.props.maxLength && this.props.value.length >= this.props.maxLength) {
      classes.push('shake');
    }

    if (this.props.error) {
      classes.push('error');
    }
    return (
      <div>
        {renderLabel(this.props.name, this.props.label)}
        <input
          name={this.props.name}
          value={this.props.value}
          placeholder={this.props.placeholder}
          onChange={this.handleChange}
          readOnly={readOnly}
          disabled={this.props.disabled}
          className={classes.join(' ')}
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
