import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { formValues, Errors } from '../../interfaces/interfaces';

interface StreamCreateProps {
  createStream: (args: formValues) => void;
  handleSubmit: (args: () => void) => void;
}

function StreamForm(props: any): JSX.Element {
  const { onSubmit } = props;
  const renderError = ({ error, touched }: any): JSX.Element => {
    if (touched && error) {
      return (
        <div className="ui error message">
          <div className="header">{error}</div>
        </div>
      );
    }
    return <div></div>;
  };

  const renderInput = ({ input, label, meta }: any): JSX.Element => {
    return (
      <div className="field">
        <label>
          {label}
          <input {...input} />
        </label>
        {renderError(meta)}
      </div>
    );
  };

  const handleSubmit = (formValues: formValues): void => {
    onSubmit(formValues);
  };
  return (
    <div>
      <form
        onSubmit={props.handleSubmit(handleSubmit)}
        className="ui form error"
      >
        <Field name="title" component={renderInput} label="Enter Title" />
        <Field
          name="description"
          component={renderInput}
          label="Enter Description"
        />
        <button className="ui primary button">Submit</button>
      </form>
    </div>
  );
}

const validate = (formValues: formValues): Errors => {
  const errors: Errors = {};
  if (!formValues.title) {
    errors.title = 'You must enter a title';
  }
  if (!formValues.description) {
    errors.description = 'You must enter a description';
  }
  return errors;
};
export default reduxForm({
  form: 'streamForm',
  validate: validate,
})(StreamForm);
