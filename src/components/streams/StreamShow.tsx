import React, { useEffect } from 'react';
import flv from 'flv.js';
import { fetchStream } from '../../actions';
import { connect } from 'react-redux';
import { StreamsObj } from '../../interfaces/interfaces';

function StreamShow({ match, stream, fetchStream }: any): JSX.Element {
  const videoRef = React.createRef<HTMLVideoElement>();
  useEffect(() => {
    const { id } = match.params;
    fetchStream(id);
    if (stream) {
      const player = flv.createPlayer({
        type: 'flv',
        url: `http://localhost:8000/live/${id}.flv`,
      });
      player.attachMediaElement(videoRef.current!);
    }
  }, []);

  const render = () => {
    if (!stream) {
      return <div>loading</div>;
    }
    return (
      <div>
        <video ref={videoRef} style={{ width: '100%' }} controls={true} />
        <h1>{stream.title}</h1>
        <h5>{stream.description}</h5>
      </div>
    );
  };
  return <div>{render()}</div>;
}

const mapStateToProps = (state: StreamsObj, ownProps: any) => {
  return { stream: state.streams![ownProps.match.params.id] };
};
export default connect(mapStateToProps, { fetchStream })(StreamShow);
