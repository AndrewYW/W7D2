import TodoList from './todo_list';
import { connect } from 'react-redux';
import { receiveTodo, removeTodo, updateTodo } from '../../actions/todo_actions';
import { allTodos } from '../../reducers/selectors';



const mapStateToProps = state => ({
  todos: allTodos(state)
});

const mapDispatchToProps = dispatch => ({
  receiveTodo: (todo) => dispatch(receiveTodo(todo)),
  removeTodo: (todo) => dispatch(removeTodo(todo)),
  updateTodo: (todo) => dispatch(updateTodo(todo)),

});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoList);

