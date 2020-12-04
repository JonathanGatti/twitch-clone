import React, { useEffect } from 'react';
import { fetchStreams } from '../../actions';
import { connect } from 'react-redux';
import { Stream, StreamsObj } from '../../interfaces/interfaces';

interface StreamListProps {
  fetchStreams: () => void;
  streams?: Stream[] | undefined;
}

function StreamList(props: StreamListProps): JSX.Element{
  const { fetchStreams, streams } = props;

  useEffect(() => {
    fetchStreams();
  }, []);

  const render = () => {
    if(streams === undefined){
      return null;
    } return (
      <div className='ui celled list'>
        {streams.map((stream: Stream) => (
            <div className='item' key={stream.id}>
              <i className='large middle aligned icon camera'></i>
              <div className='content'>
                {stream.title}
                <div className='description'>
                  {stream.description}
                </div>
              </div>
            </div>
          ))}
      </div>
    )
  }

  return (
    <div>
      <h2>Streams</h2>
      {render()}
    </div>
  )
}

const mapStateToProps = (state: StreamsObj): Stream[] | {} => {
  return { streams: Object.values(state.streams) };
};

export default connect(mapStateToProps, { fetchStreams })(StreamList);