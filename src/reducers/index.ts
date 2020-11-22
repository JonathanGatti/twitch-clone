import { combineReducers} from 'redux';
import { authReducers } from './authReducers';

export const reducers =  combineReducers({
  auth: authReducers
})