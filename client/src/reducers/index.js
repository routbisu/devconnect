import authReducer from './authReducer';
import { combineReducers } from 'redux';
import errorReducer from './errorReducer';
import profileReducer from './errorReducer';

export default combineReducers({
  auth: authReducer,
  errors: errorReducer
});