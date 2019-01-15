import { connect } from 'react-redux';
import { removeTodo, deleteTodo } from '../../actions/todo_actions';
import TodoDetailView from './todo_detail_view';

const mapDispatchToProps = dispatch => ({
  removeTodo: (todo) => dispatch(removeTodo(todo)),
  deleteTodo: (todo) => dispatch(deleteTodo(todo)),
});

export default connect(
  null,
  mapDispatchToProps
)(TodoDetailView);
