import React from 'react';
import PropTypes from 'prop-types';
import './TextInput.css';
import styles from './TextInput.styles';
import Text from '../Text';
import Icon from '../Icon';
import Button from '../Button';
import classNames from 'classnames/bind';


let cx = classNames.bind(styles);

export const type = [
  'email',
  'text',
  'number',
  'password',
  'search',
  'url',
];

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
};

const defaultProps = {
  type: 'text',
};

function TextInput(props) {
  function handleChange(event) {
    if (props.onChange === null) { return; }
    props.onChange({name: props.name, value: event.target.value});
  };

  const readOnly = !props.readOnly && props.onChange ? false : true;

  const classInput = cx({
    shake: props.shake || (props.maxLength && props.value.length >= props.maxLength),
    error: props.error },
    styles.input
  );

  return (
    <div className={props.className}>
      {renderLabel(props.name, props.label)}
      {renderAction(props.action)}
      <input
        name={props.name}
        value={props.value}
        placeholder={props.placeholder}
        onChange={handleChange}
        readOnly={readOnly}
        disabled={props.disabled}
        className={classInput}
        maxLength={props.maxLength}
        type={props.type}
      />
      {renderError(props.error)}
      {renderHelpText(props.helpText)}
    </div>
  );
}

function renderError(error) {
  if (error) {
    return (
      <div className={styles.errorMessage}>
        <Icon name='exclamation' color='negative' className={styles.errorIcon}/>
        <Text color='negative' element='span' size='small'>{error}</Text>
      </div>
    );
  }
}

function renderHelpText(helpText) {
  if (helpText) {
    return (
      <div className={styles.helpText}>
        <Text color='inkLight' element='span' size='small'>{helpText}</Text>
      </div>
    );
  }
}

function renderLabel(name, labelText) {
  if (labelText) {
    return (
      <div className={styles.label}>
        <label htmlFor={name}>
          <Text size='regular'>{labelText}</Text>
        </label>
      </div>
    );
  }
}

function renderAction(action) {
  if (action) {
    return (
      <Button
        plain
        className={styles.action}
        onClick={action.onAction}
      >
        {action.title}
      </Button>
    );
  }
}

TextInput.propTypes = propTypes;
TextInput.defaultProps = defaultProps;

export default TextInput;
