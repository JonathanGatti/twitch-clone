import { SIGN_IN, SIGN_OUT} from '../actions/types';

interface Action {
  type: string,
  payload: string
}
interface UserState {
  isSignedIn: boolean | undefined,
  userId: string | null
}
const initialState = {
  isSignedIn: undefined,
  userId: null
}

export const authReducers = (state: UserState = initialState , action: Action) => {
  switch(action.type){
    case SIGN_IN:
      return {...state, isSignedIn: true, userId: action.payload}
    case SIGN_OUT:
      return {...state, isSignedIn: false, userId: null}
    default: 
      return state;
  }
}