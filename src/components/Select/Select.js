import React from 'react';
import PropTypes from 'prop-types';
import './Select.css';
import styles from './Select.styles';
import Icon from '../Icon';
import Text from '../Text'
import classNames from 'classnames/bind';


let cx = classNames.bind(styles);

const propTypes = {
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

function Select(props) {
  function handleChange(event) {
    if (props.onChange === null) { return; }
    props.onChange({value: event.target.value, name: props.name});
  };

  const classSelect = cx({
    error: props.error},
    styles.input
  );

  return (
    <div className={props.className}>
      {renderLabel(props.name, props.label)}
      <div className={styles.wrapper}>
        <select
          name={props.name}
          value={props.value}
          disabled={props.disabled}
          onChange={handleChange}
          className={classSelect}
        >
        {renderPlaceholder(props.placeholder)}
        {renderOptions(props.options)}
        </select>
        <div className={styles.arrow}>
          <Icon
            name='angle-down'
            color='inkLight'
          />
        </div>
      </div>
      {renderHelpText(props.helpText)}
    </div>
  );
}

function renderOptions(options) {
  if (options) {
    return (
      options.map(option =>
        <option key={option.value.toString()} value={option.value}>{option.label}</option>
      )
    );
  }
};

function renderPlaceholder(placeholder, value) {
  if (placeholder) {
    return (
      <option value='' disabled hidden>{placeholder}</option>
    );
  }
}

function renderHelpText(helpText) {
  if (helpText) {
    return (
      <div className={styles.helpText}>
        <Text color='inkLight' element='span' size='small'>{ helpText }</Text>
      </div>
    );
  }
};

function renderLabel(name, labelText) {
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

Select.propTypes = propTypes;

export default Select;
