import React from 'react';
import { Field, reduxForm } from 'redux-form';
import axios from 'axios';

interface formValues {
  title: string;
  description: string;
}

interface Errors {
  title?: string;
  description?: string;
}

function StreamCreate(props: any): JSX.Element{

  const renderError = ({error, touched}: any): JSX.Element => {
    if(touched && error){
      return (
        <div className='ui error message'>
          <div className='header'>{error}</div>
        </div>
      )
    }
    return <div></div>
  }

  const renderInput = ({ input, label, meta }: any): JSX.Element => {
    return (
      <div className='field'>
        <label >
          {label}
          <input {...input} />
        </label>
        {renderError(meta)}
      </div>
    )
  }

  const onSubmit = (formValues: formValues): void => {
    console.log(formValues);
    axios.post('http://localhost:8000/streams',{
      title: formValues.title,
      description: formValues.description,
      id: Math.random(),
    })
  };
  return (
    <div>
      <form onSubmit={props.handleSubmit(onSubmit)} className='ui form error'>
        <Field name='title' component={renderInput} label='Enter Title'/>
        <Field name='description' component={renderInput} label='Enter Description' />
        <button className='ui primary button'>Submit</button>
      </form>
    </div>
  )
}

const validate = (formValues: formValues): {[key: string]: any}  => {
  const errors: Errors = {};
  if(!formValues.title) {
    errors.title = 'You must enter a title';
  }
  if(!formValues.description) {
    errors.description = 'You must enter a description';
  }
  return errors;
} 
export default reduxForm({
  form: 'streamCreate',
  validate: validate,
})(StreamCreate);