import React from 'react';
import PropTypes from 'prop-types';
import './Paginator.css';
import styles from './Paginator.styles';
import Button from '../Button';
import Icon from '../Icon';


const propTypes = {
  disableNext: PropTypes.bool,
  disablePrevious: PropTypes.bool,
  plain: PropTypes.bool,
  onNext: PropTypes.func,
  onPrevious: PropTypes.func,
};

function Paginator(props) {
  return (
    <nav className={props.className}>
      <div className={styles.left}>
        <Button
          size="large"
          disabled={props.disablePrevious}
          onClick={props.onPrevious}
          plain={props.plain}
        >
          <Icon
            name="chevron-left"
            color="purple"
          />
        </Button>
      </div>
      <div className={styles.right}>
        <Button
          size="large"
          disabled={props.disableNext}
          onClick={props.onNext}
          plain={props.plain}
        >
          <Icon
            name="chevron-right"
            color="purple"
          />
        </Button>
      </div>
    </nav>
  );
}

Paginator.propTypes = propTypes;

export default Paginator;
