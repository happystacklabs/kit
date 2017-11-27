import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styles from './Tooltip.css';
import Text from '../Text';
import classNames from 'classnames/bind';


let cx = classNames.bind(styles);

export const position = [
  'top',
  'bottom',
  'left',
  'right',
];

class Tooltip extends Component {
  static propTypes = {
    children: PropTypes.node,
    content: PropTypes.string,
    active: PropTypes.bool,
    position: PropTypes.oneOf(position),
    light: PropTypes.bool,
  };

  static defaultProps = {
    position: 'bottom',
  };

  state = {
    childPosition: {},
    position: {},
    active: false,
  }

  componentDidMount() {
    const newState = Object.assign({}, this.state);
    newState['childPosition'] = this.refs.child ? this.refs.child.getBoundingClientRect() : null;
    newState['position'] = this.refs.tooltip ? this.refs.tooltip.getBoundingClientRect() : null;
    this.setState(newState);
  }

  handleOnMouseEnter = () => {
    const newState = Object.assign({}, this.state);
    newState['active'] = true;
    this.setState(newState);
  }

  handleOnMouseLeave = () => {
    const newState = Object.assign({}, this.state);
    newState['active'] = false;
    this.setState(newState);
  }

  calculateStyle = () => {
    // child dimension
    const childWidth = this.state['childPosition'] ? Math.round(this.state['childPosition'].width) : null;
    const childHeight = this.state['childPosition'] ? Math.round(this.state['childPosition'].height) : null;
    // tooltip dimension
    const height = this.state['position'] ? Math.round(this.state['position'].height) : null;
    // set margin bottom
    const marginBottom = this.props.position === 'top' ? childHeight+8 : 0;
    // set margin top
    var marginTop = 0;
    if (this.props.position === 'left' || this.props.position === 'right') {
      marginTop = childHeight ? -Math.round(height/2)-Math.round(childHeight/2) : 0;
    } else if (this.props.position === 'bottom') {
      marginTop = childHeight ? 8 : 0;
    }
    // set margin left
    var marginLeft = 0;
    if (this.props.position === 'left') {
      marginLeft = childWidth ? -8 : 0;
    } else if (this.props.position === 'right') {
      marginLeft = childWidth ? childWidth+8 : 0;
    } else {
      marginLeft = childWidth ? Math.round(childWidth/2) : 0;
    }
    // tooltip style
    const style = {
      'marginLeft': marginLeft,
      'marginBottom': marginBottom,
      'marginTop': marginTop,
    }

    return style;
  };

  render() {
    const style = this.calculateStyle();
    const color = this.props.light ? 'ink' : 'white';

    const classes = cx(
      this.props.className,
      this.props.position,
      styles.tooltip,
      {
        active: this.props.active || this.state.active,
        light: this.props.light,
      }
    );

    return (
      <div className={classes}>
        <span
          className={styles.content}
          ref='child'
          onMouseEnter={this.handleOnMouseEnter}
          onMouseLeave={this.handleOnMouseLeave}
        >
          {this.props.children}
        </span>
        <div className={styles.box} style={style} ref='tooltip'>
          <Text color={color} size='small'>{this.props.content}</Text>
        </div>
      </div>
    );
  }
}

export default Tooltip;
