import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './Checkbox.css';
import Icon from '../Icon';



class Checkbox extends Component {
  static propTypes = {
    name: PropTypes.string.isRequired,
    checked: PropTypes.bool,
    disabled: PropTypes.bool,
    error: PropTypes.bool,
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
      </div>
    );
  }
}

export default Checkbox;
