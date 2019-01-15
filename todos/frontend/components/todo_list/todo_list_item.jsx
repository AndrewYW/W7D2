import React from 'react';
import TodoDetailView from './todo_detail_view_container';
import { merge } from 'lodash';

class TodoListItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = { detail: false };
    this.toggleDone = this.toggleDone.bind(this);
    this.toggleDetail = this.toggleDetail.bind(this);
  }


  toggleDone(e) {
    e.preventDefault();
    const updatedTodo = merge({}, this.props.todo);
    updatedTodo.done = !this.props.todo.done;
    this.props.updateTodo(updatedTodo);
  }

  toggleDetail(e) {
    e.preventDefault();
    this.setState({ detail: !this.state.detail });
  }

  render() {
    return (
      <li>
        <p onClick={this.toggleDetail}>{this.props.todo.title}</p>
        <button type="submit" onClick={this.toggleDone}>{this.props.todo.done ? "Undo" : "Done"}</button>
        <div hidden={this.state.detail ? "" : "hidden"}><TodoDetailView todo={this.props.todo} /></div>
      </li>
    )
  }
}

export default TodoListItem;