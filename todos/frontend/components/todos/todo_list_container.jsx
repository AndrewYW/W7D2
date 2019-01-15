import TodoList from './todo_list';
import { connect } from 'react-redux';
import { receiveTodo, removeTodo, updateTodo, fetchTodos, createTodo, } from '../../actions/todo_actions';
import { allTodos } from '../../reducers/selectors';


const mapStateToProps = state => ({
  todos: allTodos(state),
  errors: state.errors,
});

const mapDispatchToProps = dispatch => ({
  receiveTodo: (todo) => dispatch(receiveTodo(todo)),
  removeTodo: (todo) => dispatch(removeTodo(todo)),
  updateTodo: (todo) => dispatch(updateTodo(todo)),
  fetchTodos: () => dispatch(fetchTodos()),
  createTodo: (todo) => dispatch(createTodo(todo)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoList);

