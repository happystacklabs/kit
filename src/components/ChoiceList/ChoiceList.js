import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import './ChoiceList.css';
import Text from '../Text/Text';
import Checkbox from '../Checkbox/Checkbox';


function renderInputs(name, choices, multiple, disabled, selected, handleChange) {
  if (!choices) { return undefined; }
  const type = multiple ? 'checkbox' : 'radio';

  return choices.map(choice => (
    <li className="kit-choicelist__li" key={choice.value}>
      <Checkbox
        name={name}
        value={choice.value}
        id={choice.value}
        label={choice.label}
        helpText={choice.helpText}
        type={type}
        checked={selected.includes(choice.value)}
        onChange={handleChange}
        disabled={disabled}
      />
    </li>
  ));
}


const propTypes = {
  name: PropTypes.string.isRequired,
  title: PropTypes.string,
  choices: PropTypes.arrayOf(PropTypes.shape({
    label: PropTypes.string,
    value: PropTypes.string,
    helpText: PropTypes.string,
  })).isRequired,
  multiple: PropTypes.bool,
  selected: PropTypes.arrayOf(PropTypes.string),
  onChange: PropTypes.func,
  disabled: PropTypes.bool,
  className: PropTypes.string,
};


const defaultProps = {
  title: undefined,
  multiple: false,
  selected: [],
  onChange: undefined,
  disabled: false,
  className: undefined,
};


function ChoiceList(props) {
  function handleChange(event) {
    if (props.onChange === null) { return; }

    let selectedArray = props.multiple ? [...props.selected, event.id] : [event.id];

    if (props.multiple && !event.value) {
      selectedArray = selectedArray.filter(item => item !== event.id);
    }

    props.onChange({ value: selectedArray, name: props.name });
  }

  return (
    <div className={classNames(props.className, 'kit-choicelist')}>
      <fieldset className="kit-choicelist__fieldset">
        <legend className="kit-choicelist__legend"><Text size="regular">{props.title}</Text></legend>
        <ul className="kit-choicelist__ul">
          {renderInputs(
            props.name,
            props.choices,
            props.multiple,
            props.disabled,
            props.selected,
            handleChange,
          )}
        </ul>
      </fieldset>
    </div>
  );
}


ChoiceList.propTypes = propTypes;
ChoiceList.defaultProps = defaultProps;


export default ChoiceList;
