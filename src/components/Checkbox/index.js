import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './Checkbox.css';
import Icon from '../Icon';
import Text from '../Text';


const renderLabel = (name, labelText) => {
  if (labelText) {
    return (
      <label htmlFor={name}>
        <Text size='regular'>{ labelText }</Text>
      </label>
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

const renderCheckmark = (type) => {
  if (type === 'checkbox') {
    return (
      <Icon name='check' color='white' className='checkmark'/>
    );
  } else {
    return (
      <div className='radioMiddle'></div>
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
    const classes = ['checkboxInnerWrapper'];

    if (this.props.checked) {
      classes.push('checked');
    }

    if (this.props.error) {
      classes.push('checkboxError');
    }

    if (this.props.type === 'radio') {
      classes.push('radioInput');
    }

    return (
      <div className='checkboxWrapper'>
        {renderLabel(this.props.id, this.props.label)}
        <div className={classes.join(' ')}>
          <input
            name={this.props.name}
            type={this.props.type}
            id={this.props.id}
            value={this.props.value}
            checked={this.props.checked}
            onChange={this.handleChange}
            disabled={this.props.disabled}
          />
          {renderCheckmark(this.props.type)}
        </div>
        {renderHelpText(this.props.helpText)}
      </div>
    );
  }
}

export default Checkbox;
