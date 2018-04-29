import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import faChevronLeft from '@fortawesome/fontawesome-free-solid/faChevronLeft';
import faChevronRight from '@fortawesome/fontawesome-free-solid/faChevronRight';
import './Paginator.css';
import Button from '../Button/Button';


const propTypes = {
  disableNext: PropTypes.bool,
  disablePrevious: PropTypes.bool,
  plain: PropTypes.bool,
  fullWidth: PropTypes.bool,
  onNext: PropTypes.func,
  onPrevious: PropTypes.func,
  className: PropTypes.string,
};


const defaultProps = {
  disableNext: false,
  disablePrevious: false,
  plain: false,
  fullWidth: false,
  onNext: undefined,
  onPrevious: undefined,
  className: undefined,
};


export function Paginator(props) {
  const previousClassName = classNames(
    { 'kit-paginator__left--disabled': props.disablePrevious },
    'kit-paginator__left',
  );

  const nextClassName = classNames(
    { 'kit-paginator__right--disabled': props.disableNext },
    'kit-paginator__right',
  );
  return (
    <nav className={classNames({ 'kit-paginator--full-width': props.fullWidth }, props.className)}>
      <div className={previousClassName}>
        <Button
          size="large"
          disabled={props.disablePrevious}
          onClick={props.onPrevious}
          plain={props.plain}
          className="kit-paginator__left-button"
        >
          <FontAwesomeIcon icon={faChevronLeft} className="kit-paginator__left-icon" />
        </Button>
      </div>
      <div className={nextClassName}>
        <Button
          size="large"
          disabled={props.disableNext}
          onClick={props.onNext}
          plain={props.plain}
          className="kit-paginator__right-button"
        >
          <FontAwesomeIcon icon={faChevronRight} className="kit-paginator__right-icon" />
        </Button>
      </div>
    </nav>
  );
}


Paginator.propTypes = propTypes;
Paginator.defaultProps = defaultProps;


export default Paginator;
