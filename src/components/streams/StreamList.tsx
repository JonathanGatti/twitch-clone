import React, { useEffect } from 'react';
import { fetchStreams } from '../../actions';
import { connect } from 'react-redux';

function StreamList(props: any): JSX.Element{
  const { fetchStreams, streams } = props;

  useEffect(() => {
    fetchStreams();
  }, []);

  return (
    <div>
      <h2>Streams</h2>
      <div className='ui celled list'>
        {streams.map((stream: any) => (
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
    </div>
  )
}

const mapStateToProps = (state: any) => {
  return { streams : Object.values(state.streams) };
};

export default connect(mapStateToProps, { fetchStreams })(StreamList);