import { UPDATE_TODO, RECEIVE_TODOS, RECEIVE_TODO, REMOVE_TODO } from "../actions/todo_actions";

const initialState = {
  1: {
    id: 1,
    title: 'wash car',
    body: 'with soap',
    done: false
  },
  2: {
    id: 2,
    title: 'wash dog',
    body: 'with shampoo',
    done: true
  },
};

const todosReducer = (state = initialState, action) => {
  switch(action.type) {
    case RECEIVE_TODOS:
      return Object.assign({}, action.todos);
    case RECEIVE_TODO:
      return ({...state, [action.todo.id]: action.todo});
    case REMOVE_TODO:
      const newTodos = Object.assign({}, state);
      delete(newTodos[action.todo.id]);
      return newTodos;

    case UPDATE_TODO:
      const updatedTodos = Object.assign({}, state);
      updatedTodos[action.todo.id].done = !updatedTodos[action.todo.id].done;
      return updatedTodos;
    default:
      return state;
  }
};

export default todosReducer;