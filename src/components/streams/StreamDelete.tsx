import React, { useEffect } from 'react';
import Modal from '../Modal';
import { Link } from 'react-router-dom';
import { deleteStream, fetchStream } from '../../actions';
import { connect } from 'react-redux';
import { StreamsObj } from '../../interfaces/interfaces';

import history from '../../history';

function StreamDelete({
  stream,
  match,
  fetchStream,
  deleteStream,
}: any): JSX.Element {
  useEffect(() => {
    async function getStreamInEffect() {
      const res = await fetchStream(match.params.id);
    }
    getStreamInEffect();
  }, []);
  const actions = (
    <>
      <button
        className="ui button negative"
        onClick={() => deleteStream(stream.id)}
      >
        Delete
      </button>
      <Link to={'/'} className="ui button ">
        Cancel
      </Link>
    </>
  );

  const renderContent = () => {
    if (!stream) {
      return 'Are you sure you want to delete this stream';
    }
    return `Are you sure you want to delete this stream with title: ${stream.title}`;
  };
  return (
    <Modal
      title="Delete Stream"
      content={renderContent()}
      actions={actions}
      onDismiss={() => history.push('/')}
    />
  );
}

const mapStateToProps = (state: StreamsObj, ownProps: any) => {
  return { stream: state.streams![ownProps.match.params.id] };
};
export default connect(mapStateToProps, { fetchStream, deleteStream })(
  StreamDelete
);
