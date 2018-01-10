import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import './Select.css';
import styles from './Select.styles';
import Icon from '../Icon/Icon';
import Text from '../Text/Text';


const cx = classNames.bind(styles);


function renderOptions(options) {
  if (!options) { return undefined; }
  return ((
    options.map(option => (
      <option key={option.value.toString()} value={option.value}>{option.label}</option>
    ))
  ));
}


function renderPlaceholder(placeholder) {
  if (!placeholder) { return undefined; }
  return (
    <option value="" disabled hidden>{placeholder}</option>
  );
}


function renderHelpText(helpText) {
  if (!helpText) { return undefined; }
  return (
    <div className={styles.helpText}>
      <Text color="inkLight" element="span" size="small">{helpText}</Text>
    </div>
  );
}


function renderLabel(name, labelText) {
  if (!labelText) { return undefined; }
  return (
    <div className={styles.label}>
      <label htmlFor={name}>
        <Text size="regular">{labelText}</Text>
      </label>
    </div>
  );
}


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
  onChange: PropTypes.func,
  className: PropTypes.string,
};


const defaultProps = {
  placeholder: undefined,
  error: false,
  helpText: undefined,
  label: undefined,
  disabled: false,
  onChange: undefined,
  className: undefined,
};


function Select(props) {
  function handleChange(event) {
    if (props.onChange === null) { return; }
    props.onChange({ value: event.target.value, name: props.name });
  }

  const classSelect = cx(
    {
      error: props.error,
    },
    styles.input,
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
            name="angle-down"
            color="inkLight"
          />
        </div>
      </div>
      {renderHelpText(props.helpText)}
    </div>
  );
}


Select.propTypes = propTypes;
Select.defaultProps = defaultProps;


export default Select;
