import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './Tooltip.css';
import Text from '../Text';


export const tooltipPosition = [
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
    position: PropTypes.oneOf(tooltipPosition),
    light: PropTypes.bool,
  };

  static defaultProps = {
    position: 'bottom',
  };

  state = {
    childPosition: {},
    tooltipPosition: {},
    active: false,
  }

  componentDidMount() {
    const newState = Object.assign({}, this.state);
    newState['childPosition'] = this.refs.child ? this.refs.child.getBoundingClientRect() : null;
    newState['tooltipPosition'] = this.refs.tooltip ? this.refs.tooltip.getBoundingClientRect() : null;
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

  render() {
    // child dimension
    const childWidth = this.state['childPosition'] ? Math.round(this.state['childPosition'].width) : null;
    const childHeight = this.state['childPosition'] ? Math.round(this.state['childPosition'].height) : null;
    // tooltip dimension
    const tooltipHeight = this.state['tooltipPosition'] ? Math.round(this.state['tooltipPosition'].height) : null;
    // set margin bottom
    const marginBottom = this.props.position === 'top' ? childHeight+8 : 0;
    // set margin top
    var marginTop = 0;
    if (this.props.position === 'left' || this.props.position === 'right') {
      marginTop = childHeight ? -Math.round(tooltipHeight/2)-Math.round(childHeight/2) : 0;
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
    const tooltipStyle = {
      'marginLeft': marginLeft,
      'marginBottom': marginBottom,
      'marginTop': marginTop,
    }
    const classes = ['tooltip'];
    classes.push(this.props.position);
    if (this.props.active || this.state.active) {
      classes.push('active');
    }
    if (this.props.light) {
      classes.push('light');
    }
    const color = this.props.light ? 'ink' : 'white';
    return (
      <div className={classes.join(' ')}>
        <span
          className='tooltipContent'
          ref='child'
          onMouseEnter={this.handleOnMouseEnter}
          onMouseLeave={this.handleOnMouseLeave}
        >
          {this.props.children}
        </span>
        <div className='tooltipBox' style={tooltipStyle} ref='tooltip'>
          <Text color={color} size='small'>{this.props.content}</Text>
        </div>
      </div>
    );
  }
}

export default Tooltip;
