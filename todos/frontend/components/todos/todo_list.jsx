import React from 'react'
import TodoListItem from '../todo_list/todo_list_item';
import TodoForm from '../todo_list/todo_form';

class TodoList extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    const list = this.props.todos.map((todo, idx) => {
      return <TodoListItem todo={todo} key={todo.id} removeTodo={this.props.removeTodo} updateTodo={this.props.updateTodo}/>
    });


    return (
      <>
      <ul>
        {list}
      </ul>

      <TodoForm receiveTodo={this.props.receiveTodo} />
      </>
    )
  }
}

export default TodoList;