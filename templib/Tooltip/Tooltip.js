import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import './Tooltip.css';
import Text from '../Text/Text';


export const position = {
  top: 'kit-tooltip--top',
  bottom: 'kit-tooltip--bottom',
  left: 'kit-tooltip--left',
  right: 'kit-tooltip--right',
};


const propTypes = {
  children: PropTypes.node,
  content: PropTypes.string,
  active: PropTypes.bool,
  position: PropTypes.oneOf(Object.keys(position)),
  light: PropTypes.bool,
  className: PropTypes.string,
};


const defaultProps = {
  children: undefined,
  content: undefined,
  active: false,
  position: 'bottom',
  light: false,
  className: undefined,
};


export class Tooltip extends React.Component {
  state = {
    childPosition: {},
    position: {},
    active: false,
  }

  componentDidMount() {
    const newState = Object.assign({}, this.state);
    newState.childPosition = this.childRef ? this.childRef.getBoundingClientRect() : null;
    newState.position = this.tooltipRef ? this.tooltipRef.getBoundingClientRect() : null;
    this.setState(newState); // eslint-disable-line react/no-did-mount-set-state
  }

  handleOnMouseEnter = () => {
    const newState = Object.assign({}, this.state);
    newState.active = true;
    this.setState(newState);
  }

  handleOnMouseLeave = () => {
    const newState = Object.assign({}, this.state);
    newState.active = false;
    this.setState(newState);
  }

  calculateStyle = () => {
    // child dimension
    const childWidth = this.state.childPosition ?
      Math.round(this.state.childPosition.width) : null;
    const childHeight = this.state.childPosition ?
      Math.round(this.state.childPosition.height) : null;
    // tooltip dimension
    const height = this.state.position ? Math.round(this.state.position.height) : null;
    // set margin bottom
    const marginBottom = this.props.position === 'top' ? childHeight + 8 : 0;
    // set margin top
    let marginTop = 0;
    if (this.props.position === 'left' || this.props.position === 'right') {
      marginTop = childHeight ? -Math.round(height / 2) - Math.round(childHeight / 2) : 0;
    } else if (this.props.position === 'bottom') {
      marginTop = childHeight ? 8 : 0;
    }
    // set margin left
    let marginLeft = 0;
    if (this.props.position === 'left') {
      marginLeft = childWidth ? -8 : 0;
    } else if (this.props.position === 'right') {
      marginLeft = childWidth ? childWidth + 8 : 0;
    } else {
      marginLeft = childWidth ? Math.round(childWidth / 2) : 0;
    }
    // tooltip style
    const style = { marginLeft, marginBottom, marginTop };

    return style;
  };

  render() {
    const style = this.calculateStyle();
    const color = this.props.light ? 'ink' : 'white';

    const tooltipClassName = classNames(
      {
        'kit-tooltip--active': this.props.active || this.state.active,
        'kit-tooltip--light': this.props.light,
      },
      this.props.className,
      position[this.props.position],
      'kit-tooltip',
    );

    return (
      <div className={tooltipClassName}>
        <span
          className="kit-tooltip__content"
          ref={(ref) => { this.childRef = ref; }}
          onMouseEnter={this.handleOnMouseEnter}
          onMouseLeave={this.handleOnMouseLeave}
        >
          {this.props.children}
        </span>
        <div className="kit-tooltip__box" style={style} ref={(ref) => { this.tooltipRef = ref; }}>
          <Text color={color} size="caption">{this.props.content}</Text>
        </div>
      </div>
    );
  }
}


Tooltip.propTypes = propTypes;
Tooltip.defaultProps = defaultProps;


export default Tooltip;
