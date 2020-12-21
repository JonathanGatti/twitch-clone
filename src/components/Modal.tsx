import React from 'react';
import reactDOM from 'react-dom';
import history from '../history';

interface ModalProps {
  title: string;
  content: string;
  actions: JSX.Element;
}

const Modal = ({ title, content, actions }: ModalProps) => {
  const modal = document.querySelector('#modal');

  return reactDOM.createPortal(
    <div
      onClick={() => history.push('/')}
      className="ui dimmer modals visible active"
    >
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
