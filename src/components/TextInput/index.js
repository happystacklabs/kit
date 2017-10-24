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
        <Text color='negative' type='element' size='small'>{ error }</Text>
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
    value: PropTypes.string,
    placeholder: PropTypes.string,
    readOnly: PropTypes.bool,
    disabled: PropTypes.bool,
    maxLength: PropTypes.string,
    shake: PropTypes.bool,
    error: PropTypes.string,
    type: PropTypes.oneOf(type),
  };

  static defaultProps = {
    type: 'text',
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
        <input
          name={this.props.name}
          value={this.props.value}
          placeholder={this.props.placeholder}
          onChange={this.props.onChange}
          readOnly={readOnly}
          disabled={this.props.disabled}
          className={classes.join(' ')}
          maxLength={this.props.maxLength}
          type={this.props.type}
        />
        {renderError(this.props.error)}
      </div>
    );
  }
}

export default TextInput;
