import streams from '../api/streams';
import {formValues} from '../interfaces/interfaces';
import history from '../history';

import { 
  SIGN_IN, 
  SIGN_OUT, 
  CREATE_STREAM,
  FETCH_STREAM,
  FETCH_STREAMS,
  EDIT_STREAM,
  DELETE_STREAM
} from './types';

interface SignAction {
  type: string,
  payload: string
}

export const signInAction = (userId: string): SignAction => {
  return {
    type: SIGN_IN,
    payload: userId
  }
}

export const signOutAction = (): SignAction => {
  return {
    type: SIGN_OUT,
    payload: ''
  }
}

export const createStream = (formValues: formValues ) => {
  return async (dispatch: any, getState: any) => {
    const { userId } = getState().auth;
    const res = await streams.post('/streams', { ...formValues, userId });

    dispatch({ type: CREATE_STREAM, payload: res.data })
    history.push('/');
  }
}

export const fetchStreams = () => {
  return async (dispatch: any) => {
    const res = await streams.get('/streams');

    dispatch({ type: FETCH_STREAMS, payload: res.data });
  }
}

export const fetchStream = (id: number) => {
  return async (dispatch: any) => {
    const res = await streams.get(`/streams/${id}`);

    dispatch({ type: FETCH_STREAM, payload: res.data });
  }
}

export const editStream = (id: number, formValues: formValues) => {
  return async (dispatch: any) => {
    const res = await streams.patch(`/streams/${id}`, formValues);

    dispatch({ type: EDIT_STREAM, payload: res.data });
    history.push('/');
  }
}

export const deleteStream = (id: number) => {
  return async (dispatch: any) => {
    await streams.delete(`/streams/${id}`);

    dispatch({ type: DELETE_STREAM, payload: id });
    history.push('/')
  }
}