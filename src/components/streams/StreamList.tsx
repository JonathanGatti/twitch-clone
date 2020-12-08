import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { fetchStreams } from '../../actions';
import { connect } from 'react-redux';
import { Stream, StreamsObj } from '../../interfaces/interfaces';

interface StreamListProps {
  fetchStreams: () => void;
  streams?: Stream[] | undefined;
  userId?: string;
  isSignedIn?: boolean;
}

function StreamList(props: StreamListProps): JSX.Element {
  const { fetchStreams, streams, userId, isSignedIn } = props;

  useEffect(() => {
    fetchStreams();
  }, []);

  const renderAdmin = (stream: Stream) => {
    if (stream.userId === userId) {
      return (
        <div className="right floated content">
          <button className="ui button primary">Edit</button>
          <button className="ui button negative">Delete</button>
        </div>
      );
    }
  };

  const renderCreate = () => {
    if (isSignedIn) {
      return (
        <div style={{ textAlign: 'right' }}>
          <Link to="/streams/new" className="ui button primary">
            Create Stream
          </Link>
        </div>
      );
    }
  };
  const render = () => {
    if (streams === undefined) {
      return null;
    }
    return (
      <div className="ui celled list">
        {streams.map((stream: Stream) => (
          <div className="item" key={stream.id}>
            {renderAdmin(stream)}
            <i className="large middle aligned icon camera"></i>
            <div className="content">
              {stream.title}
              <div className="description">{stream.description}</div>
            </div>
          </div>
        ))}
      </div>
    );
  };

  return (
    <div>
      <h2>Streams</h2>
      {render()}
      {renderCreate()}
    </div>
  );
}

const mapStateToProps = (state: StreamsObj): Stream[] | {} => {
  return {
    streams: Object.values(state.streams),
    userId: state.auth.userId,
    isSignedIn: state.auth.isSignedIn,
  };
};

export default connect(mapStateToProps, { fetchStreams })(StreamList);
