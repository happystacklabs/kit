import React from 'react';
import PropTypes from 'prop-types';
import copy from 'copy-to-clipboard';
import './ComponentViewer.css';
import styles from './ComponentViewer.styles';
import Icon from '../../components/Icon/Icon';
import Button from '../../components/Button/Button';
import Text from '../../components/Text/Text';


// build and return a string with the code of the component
function getCode(props) {
  const newProps = [];
  let children = '';

  props.options.forEach((item) => {
    if (item.name === 'children') {
      children = item.value;
    }
    // generate the new props array with props that are not the children or a function
    if (item.value && item.type !== 'function' && item.name !== 'children') {
      newProps.push({ name: item.name, value: item.value });
    }
  });

  // build the array of caracters needed to create the code string
  const stringArray = [];
  stringArray.push('<');
  stringArray.push(props.element);
  newProps.forEach((prop) => {
    stringArray.push(' ');
    stringArray.push(prop.name);
    stringArray.push('=');
    if (Array.isArray(prop.value)) {
      stringArray.push('{[');
      prop.value.forEach((row) => {
        if (typeof row === 'string') {
          stringArray.push("'");
          stringArray.push(row);
          stringArray.push("', ");
        } else {
          stringArray.push("{label: '");
          stringArray.push(row.label);
          stringArray.push("', value: '");
          stringArray.push(row.value);
          stringArray.push("'}, ");
        }
      });
      stringArray.push(']}');
    } else {
      stringArray.push(prop.value);
    }
  });
  stringArray.push('>');
  stringArray.push(children);
  stringArray.push('</');
  stringArray.push(props.element);
  stringArray.push('>');

  return stringArray.join('');
}


function renderProps(newProps) {
  const arr = [];
  newProps.forEach((prop) => {
    if (typeof prop.value === 'boolean') {
      arr.push((
        <span key={prop.name}>
          <span className="codeColorGreen"> {prop.name}</span>
        </span>
      ));
    } else if (Array.isArray(prop.value)) {
      arr.push((
        <span key={prop.name}>
          <span className={styles.green}> {prop.name}</span>
          {'={['}<br />
          {prop.value.map((row) => {
            if (typeof row === 'string') {
              return (
                <span key={prop.name}>
                  <pre>
                    <span className={styles.yellow}>&apos;{row}&apos;</span>,
                  </pre>
                </span>
              );
            }
            return (
              <span key={prop.name}>
                <pre>
                  {'{'}
                  label: <span className={styles.yellow}>&apos;{row.label}&apos;</span>,
                  value: <span className={styles.yellow}>&apos;{row.value}&apos;</span>
                  {'}'},
                </pre>
              </span>
            );
          })}
          {']}'}
        </span>
      ));
    } else {
      arr.push((
        <span key={prop.name}>
          <span className={styles.green}> {prop.name}</span>
          =<span className={styles.yellow}>&apos;{prop.value}&apos;</span>
        </span>
      ));
    }
  });

  return (
    <span>
      {arr}
    </span>
  );
}


// build and return the html of components code
function renderCode(options, element) {
  const newProps = [];
  let children = '';

  options.forEach((item) => {
    if (item.name === 'children') {
      children = item.value;
    }
    // generate the new props array with props that are not the children or a function
    if (item.value && item.type !== 'function' && item.name !== 'children') {
      newProps.push({ name: item.name, value: item.value });
    }
  });

  return (
    <div>
      <span>&lt;</span>
      <span className={styles.red}>{element} </span>
      {renderProps(newProps)}
      <span>&gt;</span>
      {children}
      <span>&lt;/</span>
      <span className={styles.red}>{element}</span>
      <span>&gt;</span>
    </div>
  );
}


const propTypes = {
  element: PropTypes.string.isRequired,
  options: PropTypes.array.isRequired, // eslint-disable-line react/forbid-prop-types
};


function ComponentViewerCode(props) {
  function onClickCopy() {
    copy(getCode(props));
  }

  return (
    <div className={styles.code}>
      <div className={styles.codeMenu}>
        <Text size="small" color="inkLight" className={styles.item}>React</Text>
        <Button onClick={onClickCopy} size="slim" square >
          <Icon name="clone" />
        </Button>
      </div>
      <Text element="span" size="regular" color="white" className={styles.codeText} >
        {renderCode(props.options, props.element)}
      </Text>
    </div>
  );
}


ComponentViewerCode.propTypes = propTypes;


export default ComponentViewerCode;
