export const RECEIVE_TODOS = 'RECEIVE_TODOS';
export const RECEIVE_TODO = 'RECEIVE_TODO';
export const REMOVE_TODO = 'REMOVE_TODO';
export const UPDATE_TODO = "UPDATE_TODO";

import { receiveErrors, clearErrors } from './error_actions';
import * as APIUtil from '../util/todo_api_util';

export const receiveTodos = (todos) => ({
  type: RECEIVE_TODOS,
  todos
});

export const receiveTodo = (todo) => ({
  type: RECEIVE_TODO,
  todo
});

export const removeTodo = (todo) => ({
  type: REMOVE_TODO,
  todo
});

export const updateTodo = (todo) => ({
  type: UPDATE_TODO,
  todo
});

export const fetchTodos = () => {
  return (dispatch) => {
    return APIUtil.fetchTodos().then(response => {
      return dispatch(receiveTodos(response));
    });
  };
};

export const createTodo = todo => dispatch => (
  APIUtil.createTodo(todo)
    .then(
      todo => dispatch(receiveTodo(todo)),
      err => dispatch(receiveErrors(err.responseJSON))
    ).then(() => dispatch(clearErrors()))
);