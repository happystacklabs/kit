import React from 'react';
import PropTypes from 'prop-types';
import './ComponentViewer.css';
import styles from './ComponentViewer.styles';
import ComponentViewerRow from './ComponentViewerRow';


const propTypes = {
  options: PropTypes.array.isRequired,
};

function ComponentViewerList(props) {
  return (
    <div className={styles.list}>
      <table>
        <tbody>
          <tr>
            <th>Name</th>
            <th>Type</th>
            <th>Description</th>
          </tr>
          {renderOptions(props)}
        </tbody>
      </table>
    </div>
  );
}

function renderOptions(props) {
  if (props.options) {
    return props.options.map(option => (
      <ComponentViewerRow
        key={option.name}
        name={option.name}
        type={option.type}
        value={option.value}
        description={option.description}
        onChange={props.onChange}
        onClick={props.onClick}
      />
    ));
  }
};

ComponentViewerList.propTypes = propTypes;

export default ComponentViewerList;
