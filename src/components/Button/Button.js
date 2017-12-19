import React from 'react';
import PropTypes from 'prop-types';
import './Button.css';
import styles from './Button.styles';
import Spinner from '../Spinner';
import classNames from 'classnames/bind';


let cx = classNames.bind(styles);

const sizes = {
  'slim': styles.slim,
  'regular': styles.regular,
  'large': styles.large,
};

const colors = {
  'positive': styles.positive,
  'negative': styles.negative,
  'purple': styles.purple,
};

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
};

const defaultProps = {
  size: 'regular',
 };

function Button(props) {
  const classButton = cx({
    loading: props.loading,
    outline: props.outline,
    plain: props.plain,
    fullWidth: props.fullWidth,
    square: props.square},
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
      {renderContent(props)}
    </button>
  );
}

function renderContent(props) {
 if (props.loading) {
   const size = props.size === 'large' ? 'medium' : 'small';
   const type = props.size === 'slim' ? 'loader2' : 'loader1';

   return (
     <div className={styles.loading}>
       <span className={styles.spinner}>
         <Spinner color="inkLight" size={size} type={type} />
       </span>
       <span className={styles.hidden}>{props.children}</span>
     </div>
   );
 } else {
   return (
     <span>{props.children}</span>
   );
 }
};

Button.propTypes = propTypes;
Button.defaultProps = defaultProps;

export default Button;
