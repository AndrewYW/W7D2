import React, { Component } from 'react';

class TodoDetailView extends React.Component {
  constructor(props) {
    super(props);
    this.handleDelete = this.handleDelete.bind(this);
  }

  handleDelete(e) {
    e.preventDefault();
    debugger
    this.props.removeTodo(this.props.todo);
  }

  render() {
    return (
      <>
        <button type="submit" onClick={this.handleDelete}>Turnip down</button>
      </>
    )
  }
}

export default TodoDetailView;