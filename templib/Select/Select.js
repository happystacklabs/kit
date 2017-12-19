import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './Select.css';
import styles from './Select.styles';
import Icon from '../Icon';
import Text from '../Text'
import classNames from 'classnames/bind';


let cx = classNames.bind(styles);

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
      <div className={styles.helpText}>
        <Text color='inkLight' element='span' size='small'>{ helpText }</Text>
      </div>
    );
  }
};

const renderLabel = (name, labelText) => {
  if (labelText) {
    return (
      <div className={styles.label}>
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

  handleChange = (event) => {
    if (this.props.onChange === null) { return; }
    this.props.onChange({value: event.target.value, name: this.props.name});
  };

  render() {
    const classSelect = cx({
      error: this.props.error},
      styles.input
    );

    return (
      <div className={this.props.className}>
        {renderLabel(this.props.name, this.props.label)}
        <div className={styles.wrapper}>
          <select
            name={this.props.name}
            value={this.props.value}
            disabled={this.props.disabled}
            onChange={this.handleChange}
            className={classSelect}
          >
          {renderPlaceholder(this.props.placeholder)}
          {renderOptions(this.props.options)}
          </select>
          <div className={styles.arrow}>
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
