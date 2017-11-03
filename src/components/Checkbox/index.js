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

class Checkbox extends Component {
  static propTypes = {
    name: PropTypes.string.isRequired,
    checked: PropTypes.bool,
    disabled: PropTypes.bool,
    error: PropTypes.bool,
    label: PropTypes.string,
    helpText: PropTypes.string,
  };

  static defaultProps = {
   };

   handleChange = (event) => {
     if (this.props.onChange === null) { return; }
     this.props.onChange({value: event.target.checked, name: this.props.name});
   };

  render() {
    const classes = ['checkboxInnerWrapper'];

    if (this.props.checked) {
      classes.push('checked');
    }

    if (this.props.error) {
      classes.push('checkboxError');
    }

    return (
      <div className='checkboxWrapper'>
        {renderLabel(this.props.name, this.props.label)}
        <div className={classes.join(' ')}>
          <input
            name={this.props.name}
            type='checkbox'
            checked={this.props.checked}
            onChange={this.handleChange}
            disabled={this.props.disabled}
          />
          <Icon name='check' color='white' className='checkmark'/>
        </div>
        {renderHelpText(this.props.helpText)}
      </div>
    );
  }
}

export default Checkbox;
