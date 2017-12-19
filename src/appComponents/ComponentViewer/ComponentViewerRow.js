import React from 'react';
import PropTypes from 'prop-types';
import './ComponentViewer.css';
import styles from './ComponentViewer.styles';
import Text from '../../components/Text';
import TextInput from '../../components/TextInput';
import Select from '../../components/Select';
import Switch from '../../components/Switch';


const propTypes = {
  name: PropTypes.string.isRequired,
  value: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.array,
    PropTypes.bool,
    PropTypes.func,
    PropTypes.number,
  ]),
  description: PropTypes.string,
  type: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.array,
    PropTypes.bool,
    PropTypes.func,
  ]).isRequired,
};

function ComponentViewerRow(props) {
  return (
    <tr key={props.name}>
      <td className={styles.bottomLine}><Text color="purple" size="small">{props.name}</Text></td>
      <td className={styles.bottomLine}><Text color="inkLight" size="small">{getType(props)}</Text></td>
      <td className={styles.bottomLine}><Text>{props.description}</Text></td>
      <td>
        {renderInput(props)}
      </td>
    </tr>
  );
}

function getOptions(props) {
  const options = props.type.map((option, index) => {
    return {label: option, value: option};
  });
  return options;
}

function getType(props) {
  if (props.type === 'string') {
    return 'string';
  } else if (Array.isArray(props.type) || props.type === 'array') {
    return 'array';
  } else if (props.type === 'bool') {
    return 'bool';
  } else if (props.type === 'function') {
    return 'function';
  } else if (props.type === 'number') {
    return 'number';
  } else if (props.type === 'object') {
    return 'object';
  } else if (props.type === 'node') {
    return 'node';
  }
}

function renderInput(props) {
  if (props.type === 'string') {
    return (
      <TextInput
       name={props.name}
       onChange={props.onChange}
       value={props.value}
      />
    );
  } else if (Array.isArray(props.type)) {
    return (
      <Select
       name={props.name}
       onChange={props.onChange}
       value={props.value}
       options={getOptions(props)}
      />
    );
  } else if (props.type === 'bool') {
    return (
      <Switch
        name={props.name}
        onClick={props.onClick}
        on={props.value}
      />
    );
  } else if (props.type === 'function') {
    return;
  } else if (props.type === 'node') {
    return;
  } else if (props.type === 'number') {
    return (
      <TextInput
       name={props.name}
       onChange={props.onChange}
       value={props.value}
       type="number"
      />
    );
  }
};

ComponentViewerRow.propTypes = propTypes;

export default ComponentViewerRow;
