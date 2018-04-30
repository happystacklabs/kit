import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import faAngleDown from '@fortawesome/fontawesome-free-solid/faAngleDown';
import './Select.css';
import Text from '../Text/Text';


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
    <div className="kit-select__help-text">
      <Text color="ink-light" element="span" size="caption">{helpText}</Text>
    </div>
  );
}


function renderLabel(name, labelText) {
  if (!labelText) { return undefined; }
  return (
    <div className="kit-select__label">
      <label htmlFor={name}>
        <Text size="body">{labelText}</Text>
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

  const selectClassName = classNames({ 'kit-select--error': props.error }, 'kit-select');

  return (
    <div className={props.className}>
      {renderLabel(props.name, props.label)}
      <div className="kit-select__wrapper">
        <select
          name={props.name}
          value={props.value}
          disabled={props.disabled}
          onChange={handleChange}
          className={selectClassName}
        >
          {renderPlaceholder(props.placeholder)}
          {renderOptions(props.options)}
        </select>
        <div className="kit-select__arrow">
          <FontAwesomeIcon icon={faAngleDown} className="kit-select__icon" fixedWidth />
        </div>
      </div>
      {renderHelpText(props.helpText)}
    </div>
  );
}


Select.propTypes = propTypes;
Select.defaultProps = defaultProps;


export default Select;
