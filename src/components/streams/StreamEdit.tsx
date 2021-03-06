import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { editStream, fetchStream } from '../../actions';
import { StreamsObj, formValues, Stream } from '../../interfaces/interfaces';
import StreamForm from './StreamForm';

interface StreamEditProps {
  stream: Stream;
  match: any;
  fetchStream: (id: string | string) => void;
  editStream: (id: number | string, formValues: formValues) => void;
}

function StreamEdit({
  stream,
  match,
  fetchStream,
  editStream,
}: any): JSX.Element {
  useEffect(() => {
    fetchStream(match.params.id);
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
