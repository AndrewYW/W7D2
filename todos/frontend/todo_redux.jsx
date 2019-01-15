import React from 'react';
import ReactDOM from 'react-dom';
import store from './store/store';
import Root from './components/root';
import { receiveTodo, receiveTodos } from './actions/todo_actions';
import { allTodos } from './reducers/selectors';
import { fetchTodos } from './actions/todo_actions';
document.addEventListener('DOMContentLoaded', () => {
  const root = document.getElementById("content");

  window.store = store;
  window.receiveTodo = receiveTodo;
  window.receiveTodos = receiveTodos;
  window.allTodos = allTodos;
  window.fetchTodos = fetchTodos;
  
  ReactDOM.render(<Root store={store}/>, root);
});