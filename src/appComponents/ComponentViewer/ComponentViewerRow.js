import React from 'react';
import PropTypes from 'prop-types';
import './ComponentViewer.css';
import styles from './ComponentViewer.styles';
import Text from '../../components/Text/Text';
import TextInput from '../../components/TextInput/TextInput';
import Select from '../../components/Select/Select';
import Switch from '../../components/Switch/Switch';


function getOptions(type) {
  const options = type.map(option => ({ label: option, value: option }));
  return options;
}


function renderInput(type, name, onChange, onClick, value) {
  if (type === 'string') {
    return (
      <TextInput
        name={name}
        onChange={onChange}
        value={value}
      />
    );
  } else if (Array.isArray(type)) {
    return (
      <Select
        name={name}
        onChange={onChange}
        value={value}
        options={getOptions(type)}
      />
    );
  } else if (type === 'bool') {
    return (
      <Switch
        name={name}
        onClick={onClick}
        on={value}
      />
    );
  } else if (type === 'function') {
    return undefined;
  } else if (type === 'node') {
    return undefined;
  } else if (type === 'number') {
    return (
      <TextInput
        name={name}
        onChange={onChange}
        value={value}
        type="number"
      />
    );
  }

  return undefined;
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
  return undefined;
}


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
  onChange: PropTypes.func,
  onClick: PropTypes.func,
};


const defaultProps = {
  value: undefined,
  description: undefined,
  type: undefined,
  onChange: undefined,
  onClick: undefined,
};


function ComponentViewerRow(props) {
  return (
    <tr key={props.name}>
      <td className={styles.bottomLine}><Text color="purple" size="small">{props.name}</Text></td>
      <td className={styles.bottomLine}><Text color="inkLight" size="small">{getType(props)}</Text></td>
      <td className={styles.bottomLine}><Text>{props.description}</Text></td>
      <td>
        {renderInput(props.type, props.name, props.onChange, props.onClick, props.value)}
      </td>
    </tr>
  );
}


ComponentViewerRow.propTypes = propTypes;
ComponentViewerRow.defaultProps = defaultProps;


export default ComponentViewerRow;
