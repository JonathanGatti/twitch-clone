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