import React from 'react';
import PropTypes from 'prop-types';
import './ComponentViewer.css';
import styles from './ComponentViewer.styles';
import ComponentViewerRow from './ComponentViewerRow';


function renderOptions(options, onChange, onClick) {
  if (!options) { return undefined; }
  return options.map(option => (
    <ComponentViewerRow
      key={option.name}
      name={option.name}
      type={option.type}
      value={option.value}
      description={option.description}
      onChange={onChange}
      onClick={onClick}
    />
  ));
}


const propTypes = {
  options: PropTypes.array.isRequired, // eslint-disable-line react/forbid-prop-types
  onChange: PropTypes.func,
  onClick: PropTypes.func,
};


const defaultProps = {
  onChange: undefined,
  onClick: undefined,
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
          {renderOptions(props.options, props.onChange, props.onClick)}
        </tbody>
      </table>
    </div>
  );
}


ComponentViewerList.propTypes = propTypes;
ComponentViewerList.defaultProps = defaultProps;


export default ComponentViewerList;
