import React from 'react';
import Modal from '../Modal';

function StreamDelete(): JSX.Element {
  const actions = (
    <>
      <button className="ui button negative">Delete</button>
      <button className="ui button ">Cancel</button>
    </>
  );
  return (
    <div>
      stream delete
      <Modal
        title="Delete Stream"
        content="Are you sure you want to delete this stream?"
        actions={actions}
      />
    </div>
  );
}

export default StreamDelete;
