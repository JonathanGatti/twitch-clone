import React, { useEffect } from 'react';
import { fetchStream } from '../../actions';
import { connect } from 'react-redux';
import { StreamsObj } from '../../interfaces/interfaces';

function StreamShow({ match, stream, fetchStream }: any): JSX.Element {
  useEffect(() => {
    fetchStream(match.params.id);
  }, []);

  const render = () => {
    if (!stream) {
      return <div>loading</div>;
    }
    return <div>{stream.title}</div>;
  };
  return <div>{render()}</div>;
}

const mapStateToProps = (state: StreamsObj, ownProps: any) => {
  return { stream: state.streams![ownProps.match.params.id] };
};
export default connect(mapStateToProps, { fetchStream })(StreamShow);
