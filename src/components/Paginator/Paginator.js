import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import './Paginator.css';
import Button from '../Button/Button';
import Icon from '../Icon/Icon';


const propTypes = {
  disableNext: PropTypes.bool,
  disablePrevious: PropTypes.bool,
  plain: PropTypes.bool,
  onNext: PropTypes.func,
  onPrevious: PropTypes.func,
  className: PropTypes.string,
};


const defaultProps = {
  disableNext: false,
  disablePrevious: false,
  plain: false,
  onNext: undefined,
  onPrevious: undefined,
  className: undefined,
};


function Paginator(props) {
  const previousClassName = classNames(
    { 'kit-paginator__left--disabled': props.disablePrevious },
    'kit-paginator__left',
  );

  const nextClassName = classNames(
    { 'kit-paginator__right--disabled': props.disableNext },
    'kit-paginator__right',
  );
  return (
    <nav className={props.className}>
      <div className={previousClassName}>
        <Button
          size="large"
          disabled={props.disablePrevious}
          onClick={props.onPrevious}
          plain={props.plain}
          className="kit-paginator__left-button"
        >
          <Icon
            className="kit-paginator__left-icon"
            name="chevron-left"
            color="main"
          />
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
          <Icon
            className="kit-paginator__right-icon"
            name="chevron-right"
            color="main"
          />
        </Button>
      </div>
    </nav>
  );
}


Paginator.propTypes = propTypes;
Paginator.defaultProps = defaultProps;


export default Paginator;
