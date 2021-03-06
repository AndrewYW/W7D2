import { combineReducers } from 'redux';
import todos from './todos_reducer';
import steps from './steps_reducer';
import errors from './error_reducer';

export default combineReducers({ 
  todos,
  steps,
  errors,
});

