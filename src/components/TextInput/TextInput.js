import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import './TextInput.css';
import Text from '../Text/Text';
import Icon from '../Icon/Icon';


export const type = ['email', 'text', 'number', 'password', 'search', 'url'];


function renderError(error) {
  if (!error) { return undefined; }
  return (
    <div className="kit-textinput__error-message">
      <Icon name="exclamation" color="negative" className="kit-textinput__error-icon" />
      <Text color="negative" element="span" size="caption">{error}</Text>
    </div>
  );
}


function renderHelpText(helpText) {
  if (!helpText) { return undefined; }
  return (
    <div className="kit-textinput__help-text">
      <Text color="ink-light" element="span" size="caption">{helpText}</Text>
    </div>
  );
}


function renderLabel(name, labelText) {
  if (!labelText) { return undefined; }
  return (
    <div className="kit-textinput__label">
      <label htmlFor={name}>
        <Text size="body">{labelText}</Text>
      </label>
    </div>
  );
}


function renderAction(action) {
  if (!action) { return undefined; }
  return (
    <Text
      className="kit-textinput__action"
      size="body"
      onClick={action.onAction}
    >
      {action.title}
    </Text>
  );
}


const propTypes = {
  name: PropTypes.string.isRequired,
  value: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ]),
  placeholder: PropTypes.string,
  readOnly: PropTypes.bool,
  disabled: PropTypes.bool,
  maxLength: PropTypes.number,
  shake: PropTypes.bool,
  error: PropTypes.string,
  type: PropTypes.oneOf(type),
  label: PropTypes.string,
  helpText: PropTypes.string,
  action: PropTypes.shape({
    title: PropTypes.string,
    onAction: PropTypes.func,
  }),
  onChange: PropTypes.func,
  className: PropTypes.string,
};


const defaultProps = {
  type: 'text',
  value: '',
  placeholder: undefined,
  readOnly: false,
  disabled: false,
  maxLength: undefined,
  shake: false,
  error: undefined,
  label: undefined,
  helpText: undefined,
  action: undefined,
  onChange: undefined,
  className: undefined,
};


function TextInput(props) {
  function handleChange(event) {
    if (props.onChange === null) { return; }
    props.onChange({ name: props.name, value: event.target.value });
  }

  const inputClassName = classNames(
    {
      'kit-textinput__input--shake': props.shake || (props.maxLength && props.value.length >= props.maxLength),
      'kit-textinput__input--error': props.error,
    },
    'kit-textinput__input',
  );

  return (
    <div className={classNames(props.className, 'kit-textinput')}>
      {renderLabel(props.name, props.label)}
      {renderAction(props.action)}
      <input
        name={props.name}
        value={props.value}
        placeholder={props.placeholder}
        onChange={handleChange}
        readOnly={props.readOnly}
        disabled={props.disabled}
        className={inputClassName}
        maxLength={props.maxLength}
        type={props.type}
      />
      {renderError(props.error)}
      {renderHelpText(props.helpText)}
    </div>
  );
}


TextInput.propTypes = propTypes;
TextInput.defaultProps = defaultProps;


export default TextInput;
