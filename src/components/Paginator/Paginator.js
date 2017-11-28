import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './Paginator.css';
import styles from './Paginator.styles';
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

  render() {
    return (
      <nav className={this.props.className}>
        <div className={styles.left}>
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
        <div className={styles.right}>
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
