import React, { useEffect } from 'react';
import Modal from '../Modal';
import { deleteStream, fetchStream } from '../../actions';
import { connect } from 'react-redux';
import history from '../../history';

function StreamDelete({ match, deleteStream }: any): JSX.Element {
  const actions = (
    <>
      <button
        className="ui button negative"
        onClick={() => {
          deleteStream(match.params.id);
          history.push('/');
        }}
      >
        Delete
      </button>
      <button onClick={() => history.push('/')} className="ui button ">
        Cancel
      </button>
    </>
  );
  return (
    <div>
      stream delete
      <Modal
        title="Delete Stream"
        content="Are you sure you want to delete this stream?"
        actions={actions}
        onDismiss={() => history.push('/')}
      />
    </div>
  );
}

export default connect(null, { fetchStream, deleteStream })(StreamDelete);
