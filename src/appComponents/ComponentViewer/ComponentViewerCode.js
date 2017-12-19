import React from 'react';
import PropTypes from 'prop-types';
import './ComponentViewer.css';
import styles from './ComponentViewer.styles';
import Icon from '../../components/Icon';
import Button from '../../components/Button';
import Text from '../../components/Text';
import copy from 'copy-to-clipboard';


const propTypes = {
  element: PropTypes.string.isRequired,
  options: PropTypes.array.isRequired,
};

function ComponentViewerCode(props) {
  function onClickCopy() {
    copy(getCode(props));
    return;
  }

  return (
    <div className={styles.code}>
      <div className={styles.codeMenu}>
        <Text size="small" color="inkLight" className={styles.item}>React</Text>
        <Button
          onClick={onClickCopy}
          size="slim"
          square
        >
          <Icon name="clone" />
        </Button>
      </div>
      <Text
        element="span"
        size="regular"
        color="white"
        className={styles.codeText}
      >
        {renderCode(props)}
      </Text>
    </div>
  );
}

function getCode(props) {
  const newProps = [];
  var children = '';

  props.options.forEach((item) => {
    if (item['name'] === 'children') {
      children = item['value'];
    }
    if (item['value'] && item['type'] !== 'function' && item['name'] !== 'children') {
      newProps.push({name: item['name'], value: item['value']});
    }
  })

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

function renderCode(props) {
  const newProps = [];
  var children = '';

  props.options.forEach((item) => {
    if (item['name'] === 'children') {
      children = item['value'];
    }
    if (item['value'] && item['type'] !== 'function' && item['name'] !== 'children') {
      newProps.push({name: item['name'], value: item['value']});
    }
  })

  return (
    <div>
      <span>&lt;</span>
      <span className={styles.red}>{props.element} </span>
      {renderProps(newProps)}
      <span>&gt;</span>
      {children}
      <span>&lt;/</span>
      <span className={styles.red}>{props.element}</span>
      <span>&gt;</span>
    </div>
  );
}

function renderProps(props) {
  const arr = [];
  props.forEach((prop) => {
    if (typeof prop.value === 'boolean') {
      arr.push((
        <span key={prop.name}>
          <span className="codeColorGreen"> {prop.name}</span>
        </span>
      ))
    } else if (Array.isArray(prop.value)) {
      arr.push((
        <span key={prop.name}>
          <span className={styles.green}> {prop.name}</span>
          {'={['}<br />
          {prop.value.map((row, i) => {
            if (typeof row === 'string') {
              return (
                <span key={i}>
                  <pre>
                    <span className={styles.yellow}>'{row}'</span>,
                  </pre>
                </span>
              );
            } else {
              return (
                <span key={i}>
                  <pre>
                    {'{'}
                    label: <span className={styles.yellow}>'{row.label}'</span>,
                    value: <span className={styles.yellow}>'{row.value}'</span>
                    {'}'},
                  </pre>
                </span>
              );
            }
          })}
          {']}'}
        </span>
      ));
    } else {
      arr.push((
        <span key={prop.name}>
          <span className={styles.green}> {prop.name}</span>
          =<span className={styles.yellow}>'{prop.value}'</span>
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

ComponentViewerCode.propTypes = propTypes;

export default ComponentViewerCode;
