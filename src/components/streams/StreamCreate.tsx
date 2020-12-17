import React from 'react';
import { formValues } from '../../interfaces/interfaces';
import { connect } from 'react-redux';
import { createStream } from '../../actions';
import StreamForm from './StreamForm';

interface StreamCreateProps {
  createStream: (args: formValues) => void;
  handleSubmit: (args: () => void) => void;
}

function StreamCreate(props: any): JSX.Element {
  const { createStream } = props;

  const onSubmit = (formValues: formValues): void => {
    createStream(formValues);
  };
  return (
    <div>
      <h3>Create Stream</h3>
      <StreamForm onSubmit={onSubmit} />
    </div>
  );
}

export default connect(null, { createStream })(StreamCreate);
