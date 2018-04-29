import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import Button from '../Button/Button';
import './Modal.css';


const propTypes = {
  children: PropTypes.node,
  open: PropTypes.bool,
  closeModal: PropTypes.func,
  width: PropTypes.number,
  height: PropTypes.number,
};


const defaultProps = {
  children: undefined,
  open: false,
  closeModal: undefined,
  width: undefined,
  height: undefined,
};


export function Modal(props) {
  function handleClick() {
    if (props.closeModal === null) { return; }
    props.closeModal();
  }

  const modalClassName = classNames(
    {
      'kit-modal--on': props.open,
    },
    'kit-modal',
  );

  const width = props.width ? `${props.width}px` : null;
  const marginLeft = props.width ? `${-props.width / 2}px` : null;
  const height = props.height ? `${props.height}px` : null;
  const marginTop = props.height ? `${-props.height / 2}px` : null;

  return (
    <div className={modalClassName}>
      <div
        className="kit-modal__panel"
        style={{
          width, marginLeft, height, marginTop,
        }}
      >
        {props.children}
        <div className="kit-modal__close">
          <Button size="medium" square plain onClick={handleClick}>✕</Button>
        </div>
      </div>
      <div
        className="kit-modal__backdrop"
        onClick={handleClick}
        role="button"
        onKeyPress={() => {}}
        tabIndex="-1"
      />
    </div>
  );
}


Modal.propTypes = propTypes;
Modal.defaultProps = defaultProps;


export default Modal;
