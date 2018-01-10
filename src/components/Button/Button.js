import React from 'react';
import classNames from 'classnames/bind';
import PropTypes from 'prop-types';
import './Button.css';
import styles from './Button.styles';
import Spinner from '../Spinner/Spinner';


const cx = classNames.bind(styles);


const sizes = {
  slim: styles.slim,
  regular: styles.regular,
  large: styles.large,
};


const colors = {
  positive: styles.positive,
  negative: styles.negative,
  purple: styles.purple,
};


function renderContent(propSize, loading, children) {
  if (loading) {
    const size = propSize === 'large' ? 'medium' : 'small';
    const type = propSize === 'slim' ? 'loader2' : 'loader1';

    return (
      <div className={styles.loading}>
        <span className={styles.spinner}>
          <Spinner color="inkLight" size={size} type={type} />
        </span>
        <span className={styles.hidden}>{children}</span>
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
  size: 'regular',
  color: undefined,
  square: false,
  fullWidth: false,
  plain: false,
  outline: false,
  loading: false,
  className: undefined,
  onClick: undefined,
};


function Button(props) {
  const classButton = cx(
    {
      loading: props.loading,
      outline: props.outline,
      plain: props.plain,
      fullWidth: props.fullWidth,
      square: props.square,
    },
    props.className,
    styles.button,
    colors[props.color],
    sizes[props.size],
  );

  const disabled = props.loading ? true : props.disabled;

  return (
    <button
      onClick={props.onClick}
      disabled={disabled}
      className={classButton}
    >
      {renderContent(props.size, props.loading, props.children)}
    </button>
  );
}


Button.propTypes = propTypes;
Button.defaultProps = defaultProps;


export default Button;
