import React from 'react';
import PropTypes from 'prop-types';
import './ComponentViewer.css';
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
    <div className="component-viewer__list">
      <table className="component-viewer__table">
        <tbody>
          <tr className="component-viewer__tr">
            <th className="component-viewer__th">Name</th>
            <th className="component-viewer__th">Type</th>
            <th className="component-viewer__th">Description</th>
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
