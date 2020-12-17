import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { editStream, fetchStream } from '../../actions';
import { StreamsObj, formValues } from '../../interfaces/interfaces';
import StreamForm from './StreamForm';

interface StreamEditProps {
  stream: StreamsObj;
  fetchStream: (id: string) => void;
}

function StreamEdit({
  stream,
  match,
  fetchStream,
  editStream,
}: any): JSX.Element {
  useEffect(() => {
    async function getStreamInEffect() {
      const res = await fetchStream(match.params.id);
    }
    getStreamInEffect();
  }, []);

  const onSubmit = (formValues: formValues) => {
    editStream(stream.id, formValues);
  };

  const renderStream = () => {
    if (!stream) {
      return <div>loading</div>;
    }
    return (
      <div>
        <h3>Edit a Stream</h3>
        <StreamForm
          initialValues={{
            title: stream.title,
            description: stream.description,
          }}
          onSubmit={onSubmit}
        />
      </div>
    );
  };

  return <div>{renderStream()}</div>;
}

const mapStateToProps = (state: StreamsObj, ownProps: any) => {
  return { stream: state.streams![ownProps.match.params.id] };
};
export default connect(mapStateToProps, { editStream, fetchStream })(
  StreamEdit
);
