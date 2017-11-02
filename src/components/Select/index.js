import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './Select.css';
import Icon from '../Icon';
import Text from '../Text'


const renderOptions = (options) => {
  if (options) {
    return (
      options.map(option =>
        <option key={option.value.toString()} value={option.value}>{option.label}</option>
      )
    );
  }
};

const renderPlaceholder = (placeholder, value) => {
  if (placeholder) {
    return (
      <option value='' disabled hidden>{placeholder}</option>
    );
  }
}

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

class Select extends Component {
  static propTypes = {
    name: PropTypes.string.isRequired,
    placeholder: PropTypes.string,
    value: PropTypes.string.isRequired,
    options: PropTypes.arrayOf(PropTypes.shape({
      label: PropTypes.string,
      value: PropTypes.string,
    })).isRequired,
    error: PropTypes.bool,
    helpText: PropTypes.string,
    label: PropTypes.string,
    disabled: PropTypes.bool,
  };

  static defaultProps = {
   };

   handleChange = (event) => {
     if (this.props.onChange === null) { return; }
     this.props.onChange({value: event.target.value, name: this.props.name});
   };

  render() {
    const classes = ['selectInput'];

    if (this.props.error) {
      classes.push('error');
    }

    return (
      <div>
        {renderLabel(this.props.name, this.props.label)}
        <div className='selectWrapper'>
          <select
            name={this.props.name}
            value={this.props.value}
            disabled={this.props.disabled}
            onChange={this.handleChange}
            className={classes.join(' ')}
          >
          {renderPlaceholder(this.props.placeholder)}
          {renderOptions(this.props.options)}
          </select>
          <div className='selectArrow'>
            <Icon
              name='angle-down'
              color='inkLight'
            />
          </div>
        </div>
        {renderHelpText(this.props.helpText)}
      </div>
    );
  }
}

export default Select;
