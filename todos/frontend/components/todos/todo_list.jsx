import React from 'react'
import TodoListItem from '../todo_list/todo_list_item';
import TodoForm from '../todo_list/todo_form';

class TodoList extends React.Component {
  componentDidMount() {
    this.props.fetchTodos();
  }

  render() {
    const list = this.props.todos.map((todo, idx) => {
      // debugger
      return <TodoListItem todo={todo} key={todo.id} updateTodo={this.props.updateTodo}/>
    });


    return (
      <>
      <ul>
        {list}
      </ul>

      <TodoForm createTodo={this.props.createTodo} errors={this.props.errors} />
      </>
    )
  }
}

export default TodoList;