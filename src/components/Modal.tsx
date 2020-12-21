import React from 'react';
import reactDOM from 'react-dom';

const Modal = () => {
  const modal = document.querySelector('#modal');

  return reactDOM.createPortal(
    <div className="ui dimmer modals visible active">
      <div className="ui standard modal visible active">jasbdjsabdjsa</div>
    </div>,
    modal!
  );
};

export default Modal;
