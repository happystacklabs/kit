import React from 'react';
import PropTypes from 'prop-types';
import './Dropdown.css';
import Text from '../Text/Text';


const propTypes = {
  children: PropTypes.node,
  onSelect: PropTypes.func,
  data: PropTypes.object,
  right: PropTypes.bool,
  width: PropTypes.number,
};


const defaultProps = {
  children: undefined,
  onSelect: undefined,
  data: undefined,
  right: false,
  width: undefined,
};


class Dropdown extends React.Component {
  constructor() {
    super();
    this.state = { isOpen: false };
  }

  componentDidMount() {
    window.addEventListener('click', this.handleDocumentClick);
    this.setState({ ...this.state, dimension: this.childRef.getBoundingClientRect() });
  }

  componentWillUnmount() {
    window.removeEventListener('click', this.handleDocumentClick);
  }

  onToggle = () => {
    this.setState({ isOpen: !this.state.isOpen });
  };

  onSelect = (option) => {
    this.onToggle();
    if (this.props.onSelect) this.props.onSelect(option);
  };

  handleDocumentClick = () => {
    if (this.state.isOpen) this.onToggle();
  };

  render() {
    let style;
    if (this.state.dimension) {
      const width = this.props.width ? this.props.width : this.state.dimension.width;
      const left = this.props.width > this.state.dimension.width ?
        Math.round(-(this.props.width - this.state.dimension.width)) : 0;
      style = this.props.right ? { marginLeft: left, minWidth: width } : { minWidth: width };
    } else { style = {}; }

    return (
      <div className="kit-dropdown" onClick={(e) => e.stopPropagation()}>
        <span ref={(ref) => { this.childRef = ref; }}>
          {React.cloneElement(this.props.children, { onClick: this.onToggle })}
        </span>
        <ul className={this.state.isOpen ? 'kit-dropdown__active' : null} style={style} >
          {
            this.props.data.map((item, i) => {
              return (
                <li key={i} onClick={() => this.onSelect(i)} >
                  <Text>{item}</Text>
                </li>
              )
            })
          }
        </ul>
      </div>
    );
  }
}


Dropdown.propTypes = propTypes;
Dropdown.defaultProps = defaultProps;

export default Dropdown;
