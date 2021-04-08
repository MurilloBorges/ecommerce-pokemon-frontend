import React from 'react';

// INTERFACES
import { ModalProps } from '../../@types';

const Modal: React.FC<ModalProps> = ({
  children,
  customClass,
  containerCustomClass,
  show,
  start,
  showModal,
  showCloseButton,
}: ModalProps) => (
  <div className={`overlay ${start ? `${show ? 'show' : 'hide'}` : ''}`}>
    <div className={String(containerCustomClass)}>
      {showCloseButton && (
        <button
          type="button"
          className="modal__close"
          onClick={() => showModal(!show)}
        >
          X
        </button>
      )}
      <div className={`modal ${customClass || ''}`}>{children}</div>
    </div>
  </div>
);

Modal.defaultProps = {
  showCloseButton: true,
};

export default Modal;
