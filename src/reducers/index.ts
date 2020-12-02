import { combineReducers} from 'redux';
import { authReducers } from './authReducers';
import { streamReducer } from './streamReducers';
import { reducer as formReducer} from 'redux-form';

export interface UserState {
  auth:{
    isSignedIn: boolean | undefined;
    userId: string | null;
  }
}

export const reducers = combineReducers({
  auth: authReducers,
  streams: streamReducer,
  form: formReducer
})