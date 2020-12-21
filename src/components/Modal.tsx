import React from 'react';
import reactDOM from 'react-dom';

interface ModalProps {
  title: string;
  content: string;
  actions: JSX.Element;
  onDismiss: () => void;
}

const Modal = ({ title, content, actions, onDismiss }: ModalProps) => {
  const modal = document.querySelector('#modal');

  return reactDOM.createPortal(
    <div onClick={onDismiss} className="ui dimmer modals visible active">
      <div
        onClick={(e) => e.stopPropagation()}
        className="ui standard modal visible active"
      >
        <div className="header">{title}</div>
        <div className="content">{content}</div>
        <div className="actions">{actions}</div>
      </div>
    </div>,
    modal!
  );
};

export default Modal;
