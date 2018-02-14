import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import './Checkbox.css';
import Text from '../Text/Text';


export const types = ['checkbox', 'radio'];


function renderLabel(id, labelText) {
  return (
    <label htmlFor={id} className="kit-checkbox__label">
      <Text size="body">{ labelText }</Text>
    </label>
  );
}


function renderHelpText(helpText) {
  if (!helpText) { return undefined; }
  return (
    <div className="kit-checkbox__help-text">
      <Text color="ink-light" element="span" size="caption">{ helpText }</Text>
    </div>
  );
}


const propTypes = {
  name: PropTypes.string.isRequired,
  checked: PropTypes.bool,
  disabled: PropTypes.bool,
  error: PropTypes.bool,
  label: PropTypes.string,
  value: PropTypes.string,
  id: PropTypes.string,
  helpText: PropTypes.string,
  type: PropTypes.oneOf(types),
  onChange: PropTypes.func,
  className: PropTypes.string,
};


const defaultProps = {
  checked: false,
  disabled: false,
  error: false,
  label: undefined,
  value: undefined,
  id: undefined,
  helpText: undefined,
  type: 'checkbox',
  onChange: undefined,
  className: undefined,
};


function Checkbox(props) {
  function handleChange() {
    if (props.onChange === null) { return; }
    props.onChange({ value: !props.checked, id: props.id });
  }

  const checkboxClassName = classNames(
    {
      'kit-checkbox--radio': props.type === 'radio',
      'kit-checkbox--error': props.error,
    },
    props.className,
    'kit-checkbox',
  );

  return (
    <div className={checkboxClassName}>
      <input
        name={props.name}
        type={props.type}
        id={props.id}
        value={props.value}
        checked={props.checked}
        onChange={handleChange}
        disabled={props.disabled}
        className="kit-checkbox__input"
      />
      {renderLabel(props.id, props.label)}
      {renderHelpText(props.helpText)}
    </div>
  );
}


Checkbox.propTypes = propTypes;
Checkbox.defaultProps = defaultProps;


export default Checkbox;
