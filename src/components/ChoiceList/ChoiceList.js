import React from 'react';
import PropTypes from 'prop-types';
import './ChoiceList.css';
import styles from './ChoiceList.styles';
import Text from '../Text';
import Checkbox from '../Checkbox';
import classNames from 'classnames';


const propTypes = {
  name: PropTypes.string.isRequired,
  title: PropTypes.string,
  choices: PropTypes.arrayOf(PropTypes.shape({
    label: PropTypes.string,
    value: PropTypes.string,
    helpText: PropTypes.string,
  })).isRequired,
  multiple: PropTypes.bool,
  selected: PropTypes.arrayOf(PropTypes.string).isRequired,
  onChange: PropTypes.func,
  disabled: PropTypes.bool,
};

const defaultProps = {
  selected: [],
};

function ChoiceList(props) {
  function handleChange(event) {
    if (props.onChange === null) { return; }

    let selectedArray = props.multiple ? [...props.selected, event.id] : [event.id];

    if (props.multiple && !event.value) {
      selectedArray = selectedArray.filter(item => item !== event.id);
    }

    props.onChange({value: selectedArray, name: props.name});
  };

  return (
    <div className={classNames(props.className, styles.choiceList)}>
      <fieldset>
        <legend><Text size="regular">{props.title}</Text></legend>
        <ul>
          {renderInputs(props, handleChange)}
        </ul>
      </fieldset>
    </div>
  );
}

function renderInputs(props, handleChange) {
  if (props.choices) {
    const type = props.multiple ? 'checkbox' : 'radio';

    return props.choices.map(choice => (
      <li key={choice['value']}>
        <Checkbox
          name={props.name}
          value={choice['value']}
          id={choice['value']}
          label={choice['label']}
          helpText={choice['helpText']}
          type={type}
          checked={props.selected.includes(choice['value'])}
          onChange={handleChange}
          disabled={props.disabled}
        />
      </li>
    ));
  }
};

ChoiceList.propTypes = propTypes;
ChoiceList.defaultProps = defaultProps;

export default ChoiceList;
