import streams from '../api/streams';
import {formValues} from '../interfaces/interfaces';

import { SIGN_IN, SIGN_OUT} from './types';
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
  return async (dispatch: any) => {
    streams.post('/streams', formValues);
  }
}