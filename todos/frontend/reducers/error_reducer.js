import { CLEAR_ERRORS, RECEIVE_ERRORS } from '../actions/error_actions';

const errorReducer = (state = {}, action) => {
  switch (action.type) {
    case RECEIVE_ERRORS:
      return action.errors;
    case CLEAR_ERRORS:
      return [];
    default: 
      return [];
  }
};

export default errorReducer;