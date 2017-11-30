import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './ChoiceList.css';
import styles from './ChoiceList.styles';
import Text from '../Text';
import Checkbox from '../Checkbox';
import classNames from 'classnames';



class ChoiceList extends Component {
  static propTypes = {
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

  static defaultProps = {
    selected: [],
  };

  renderInputs = (props) => {
    if (props.choices) {
      const type = props.multiple ? 'checkbox' : 'radio';
      return (
        props.choices.map(choice =>
          <li key={choice['value']}>
            <Checkbox
              name={props.name}
              value={choice['value']}
              id={choice['value']}
              label={choice['label']}
              helpText={choice['helpText']}
              type={type}
              checked={props.selected.includes(choice['value'])}
              onChange={this.handleChange}
              disabled={this.props.disabled}
            />
          </li>
        )
      );
    }
  };

  handleChange = (event) => {
    if (this.props.onChange === null) { return; }
    var selectedArray = this.props.multiple ? [...this.props.selected, event.id] : [event.id];
    if (this.props.multiple && !event.value) {
      selectedArray = selectedArray.filter(item => item !== event.id);
    }
    this.props.onChange({value: selectedArray, name: this.props.name});
  };

  render() {
    return (
      <div className={classNames(this.props.className, styles.choiceList)}>
        <fieldset>
          <legend><Text size='regular'>{this.props.title}</Text></legend>
          <ul>
            {this.renderInputs(this.props)}
          </ul>
        </fieldset>
      </div>
    );
  }
}

export default ChoiceList;
