import React from 'react';
import PropTypes from 'prop-types';
import './Checkbox.css';
import styles from './Checkbox.styles';
import classNames from 'classnames/bind';
import Icon from '../Icon';
import Text from '../Text';


let cx = classNames.bind(styles);

export const type = [
  'checkbox',
  'radio',
];

const propTypes = {
  name: PropTypes.string.isRequired,
  checked: PropTypes.bool,
  disabled: PropTypes.bool,
  error: PropTypes.bool,
  label: PropTypes.string,
  value: PropTypes.string,
  id: PropTypes.string,
  helpText: PropTypes.string,
  type: PropTypes.oneOf(type),
};

const defaultProps = {
  type: 'checkbox',
  checked: false,
 };

function Checkbox(props) {
  function handleChange(event) {
    if (props.onChange === null) { return; }
    props.onChange({value: !props.checked, id: props.id});
  };

  const classes = cx({
    radioInput: props.type === 'radio',
    error: props.error,
    checked: props.checked},
    styles.innerWrapper,
  );

  return (
    <div className={classNames(props.className, styles.wrapper)}>
      {renderLabel(props.id, props.label)}
      <div className={classes}>
        <input
          name={props.name}
          type={props.type}
          id={props.id}
          value={props.value}
          checked={props.checked}
          onChange={handleChange}
          disabled={props.disabled}
          className={styles.input}
        />
        {renderCheckmark(props.type)}
      </div>
      {renderHelpText(props.helpText)}
    </div>
  );
}

function renderLabel(name, labelText) {
  if (labelText) {
    return (
      <label htmlFor={name} className={styles.label}>
        <Text size='regular'>{ labelText }</Text>
      </label>
    );
  }
};

function renderHelpText(helpText) {
  if (helpText) {
    return (
      <div className={styles.helpText}>
        <Text color='inkLight' element='span' size='small'>{ helpText }</Text>
      </div>
    );
  }
};

function renderCheckmark(type) {
  if (type === 'checkbox') {
    return (
      <Icon name='check' color='white' className={styles.checkmark}/>
    );
  } else {
    return (
      <div className={styles.radioMiddle}></div>
    );
  }
}

Checkbox.propTypes = propTypes;
Checkbox.defaultProps = defaultProps;

export default Checkbox;
