import React, { Component } from 'react';

class TodoDetailView extends React.Component {
  constructor(props) {
    super(props);
    this.handleDelete = this.handleDelete.bind(this);
  }

  handleDelete(e) {
    e.preventDefault();
    this.props.deleteTodo(this.props.todo);
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