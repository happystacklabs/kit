import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './ComponentViewer.css';
import Icon from '../Icon';
import Button from '../Button';
import Text from '../Text';
import * as copy from 'copy-to-clipboard';



class ComponentViewerCode extends Component {
  static propTypes = {
    element: PropTypes.string.isRequired,
    options: PropTypes.array.isRequired,
  };

  static defaultProps = {
  };

  onClickCopy = (event) => {
    copy(this.getCode());
    return;
  }

  getCode = () => {
    const props = [];
    var children = '';

    this.props.options.forEach((item) => {
      if (item['name'] === 'children') {
        children = item['value'];
      }
      if (item['value'] && item['type'] !== 'function' && item['name'] !== 'children') {
        props.push({name: item['name'], value: item['value']});
      }
    })

    const stringArray = [];
    stringArray.push('<');
    stringArray.push(this.props.element);
    props.forEach((prop) => {
      stringArray.push(' ');
      stringArray.push(prop.name);
      stringArray.push('=');
      stringArray.push(prop.value);
    });
    stringArray.push('>');
    stringArray.push(children);
    stringArray.push('</');
    stringArray.push(this.props.element);
    stringArray.push('>');
    return stringArray.join('');
  }

  renderCode = () => {
    const props = [];
    var children = '';

    this.props.options.forEach((item) => {
      if (item['name'] === 'children') {
        children = item['value'];
      }
      if (item['value'] && item['type'] !== 'function' && item['name'] !== 'children') {
        props.push({name: item['name'], value: item['value']});
      }
    })

    return (
      <div>
        <span>&lt;</span>
        <span className='codeColorRed'>{this.props.element} </span>
        {this.renderProps(props)}
        <span>&gt;</span>
        {children}
        <span>&lt;/</span>
        <span className='codeColorRed'>{this.props.element}</span>
        <span>&gt;</span>
      </div>
    );
  }

  renderProps = (props) => {
    const arr = [];
    props.forEach((prop) => {
      if (typeof prop.value === 'boolean') {
        arr.push((
          <span key={prop.name}>
            <span className='codeColorGreen'> {prop.name}</span>
          </span>
        ))
      } else {
        arr.push((
          <span key={prop.name}>
            <span className='codeColorGreen'> {prop.name}</span>
            =<span className='codeColorYellow'>'{prop.value}'</span>
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

  render() {
    return (
      <div className='viewerCode'>
        <div className='viewerCodeMenu'>
          <Text size='small' color='inkLight' className='item'>React</Text>
          <Button
            onClick={this.onClickCopy}
            size='slim'
            square
          >
            <Icon name='clone'/>
          </Button>
        </div>
        <Text
          element='span'
          size='regular'
          color='white'
          className='viewerCodeText'
        >
          {this.renderCode()}
        </Text>
      </div>
    );
  }
}
export default ComponentViewerCode;
