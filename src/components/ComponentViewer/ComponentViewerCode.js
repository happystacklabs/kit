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
  }

  getCode = () => {
    const props = [];
    var children = '';

    this.props.options.map((item) => {
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
    props.map((prop) => {
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

    this.props.options.map((item) => {
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
    console.log(props);
    return (
      <span>
        {props.map((prop) =>
          <span>
            <span className='codeColorGreen'>{prop.name}</span>
            =<span className='codeColorYellow'>'{prop.value}' </span>
          </span>
        )}
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
