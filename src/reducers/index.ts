import { combineReducers} from 'redux';
import { authReducers } from './authReducers';

export interface UserState {
  auth:{
    isSignedIn: boolean | undefined;
    userId: string | null;
  }
}

export const reducers =  combineReducers<UserState>({
  auth: authReducers
})