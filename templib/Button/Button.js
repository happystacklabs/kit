import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import './Button.css';
import Spinner from '../Spinner/Spinner';


const sizes = {
  small: 'kit-button--small',
  medium: 'kit-button--medium',
  large: 'kit-button--large',
};


const colors = {
  positive: 'kit-button--positive',
  negative: 'kit-button--negative',
  main: 'kit-button--main',
  default: 'kit-button--default',
};


function renderContent(propSize, loading, plain, children) {
  if (loading) {
    const size = propSize === 'large' ? 'medium' : 'small';
    return (
      <div>
        <span className="kit-button__content--hidden">{children}</span>
        <div className="kit-button__loading">
          <Spinner className="kit-button__spinner" color="ink-light" size={size} />
        </div>
      </div>
    );
  }
  return (
    <span>{children}</span>
  );
}


const propTypes = {
  children: PropTypes.node,
  disabled: PropTypes.bool,
  size: PropTypes.oneOf(Object.keys(sizes)),
  color: PropTypes.oneOf(Object.keys(colors)),
  square: PropTypes.bool,
  fullWidth: PropTypes.bool,
  plain: PropTypes.bool,
  outline: PropTypes.bool,
  loading: PropTypes.bool,
  className: PropTypes.string,
  onClick: PropTypes.func,
};


const defaultProps = {
  children: undefined,
  disabled: false,
  size: 'medium',
  color: 'default',
  square: false,
  fullWidth: false,
  plain: false,
  outline: false,
  loading: false,
  className: undefined,
  onClick: undefined,
};


export function Button(props) {
  const buttonClassNames = classNames(
    {
      'kit-button--loading kit-button--disabled': props.loading,
      'kit-button--outline': props.outline,
      'kit-button--plain': props.plain,
      'kit-button--full-width': props.fullWidth,
      'kit-button--square': props.square,
      'kit-button--disabled': props.disabled,
    },
    props.className,
    'kit-button',
    colors[props.color],
    sizes[props.size],
  );

  const disabled = props.loading ? true : props.disabled;

  return (
    <button
      onClick={props.onClick}
      disabled={disabled}
      className={buttonClassNames}
    >
      {renderContent(props.size, props.loading, props.plain, props.children)}
    </button>
  );
}


Button.propTypes = propTypes;
Button.defaultProps = defaultProps;


export default Button;
