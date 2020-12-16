import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { editStream, fetchStream } from '../../actions';
import { StreamsObj } from '../../interfaces/interfaces';

interface StreamEditProps {
  stream: StreamsObj;
  fetchStream: (id: string) => void;
}

function StreamEdit({ stream, match, fetchStream }: any): JSX.Element {
  useEffect(() => {
    async function getStreamInEffect() {
      const res = await fetchStream(match.params.id);
    }
    getStreamInEffect();
  }, []);

  const renderStream = () => {
    if (!stream) {
      return <div>loading</div>;
    }
    return <div>{stream.title}</div>;
  };

  return <div>{renderStream()}</div>;
}

const mapStateToProps = (state: StreamsObj, ownProps: any) => {
  return { stream: state.streams![ownProps.match.params.id] };
};
export default connect(mapStateToProps, { editStream, fetchStream })(
  StreamEdit
);
