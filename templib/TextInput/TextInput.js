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
    <div
      onClick={action.onAction}
      onKeyPress={action.onAction}
      role="button"
      tabIndex="0"
      className="kit-textinput__action"
    >
      <Text size="body">{action.title}</Text>
    </div>
  );
}

function renderSearch(inputType) {
  if (inputType !== 'search') { return undefined; }
  return (
    <div className="kit-textinput__search" >
      <Icon name="search" color="ink-light" size="sm" />
    </div>
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
  textArea: PropTypes.bool,
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
  textArea: false,
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
      'kit-textinput__textarea': props.textArea,
    },
    'kit-textinput__input',
  );

  const textInputClassName = classNames(
    {
      'kit-textinput--search': props.type === 'search',
    },
    props.className, 'kit-textinput',
  );

  return (
    <div className={textInputClassName}>
      {renderLabel(props.name, props.label)}
      {renderAction(props.action)}
      { props.textArea ?
        (<textarea
          name={props.name}
          row={3}
          value={props.value}
          placeholder={props.placeholder}
          onChange={handleChange}
          readOnly={props.readOnly}
          disabled={props.disabled}
          className={inputClassName}
          maxLength={props.maxLength}
          type={props.type !== 'search' ? props.type : undefined}
        />)
      :
        (<input
          name={props.name}
          value={props.value}
          placeholder={props.placeholder}
          onChange={handleChange}
          readOnly={props.readOnly}
          disabled={props.disabled}
          className={inputClassName}
          maxLength={props.maxLength}
          type={props.type !== 'search' ? props.type : undefined}
        />)
      }
      {renderSearch(props.type)}
      {renderError(props.error)}
      {renderHelpText(props.helpText)}
    </div>
  );
}


TextInput.propTypes = propTypes;
TextInput.defaultProps = defaultProps;


export default TextInput;
