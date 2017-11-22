import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './Paginator.css';
import Button from '../Button';
import Icon from '../Icon';


class Paginator extends Component {
  static propTypes = {
    disableNext: PropTypes.bool,
    disablePrevious: PropTypes.bool,
    plain: PropTypes.bool,
    onNext: PropTypes.func,
    onPrevious: PropTypes.func,
  };

  static defaultProps = {
   };

  render() {
    return (
      <nav className='paginator'>
        <div className='buttonLeft'>
          <Button
            size='large'
            disabled={this.props.disablePrevious}
            onClick={this.props.onPrevious}
            plain={this.props.plain}
          >
            <Icon
              name='chevron-left'
              color='purple'
            />
            </Button>
        </div>
        <div className='buttonRight'>
          <Button
            size='large'
            disabled={this.props.disableNext}
            onClick={this.props.onNext}
            plain={this.props.plain}
          >
            <Icon
              name='chevron-right'
              color='purple'
            />
          </Button>
        </div>
      </nav>
    );
  }
}

export default Paginator;
