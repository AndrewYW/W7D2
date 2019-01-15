import React, { Component } from 'react';
import * as Utils from '../../util/utils';


class TodoForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { title: "", body: "", done: false };
    this.onSubmit = this.onSubmit.bind(this);
    this.updateField = this.updateField.bind(this);
  }

  onSubmit(event) {
    const id = Utils.uniqueId();
    event.preventDefault();
    const todo = this.state;
    this.props.createTodo(todo).then( () => {
      this.setState({title: "", body: ""});
    });
    
  }

  updateField(field) {
    return (event) => {
      this.setState({
        [field]: event.currentTarget.value,
      });
    };
  }

  render() {
    const errors = this.props.errors.map((error, idx) => (
      <li key={idx}>{error}</li>
    ));

    return (
      <>
      <form>

          <input type="text" name="todoListItem[title]" onChange={this.updateField("title")} value={this.state.title}/>
          <input type="text" name="todoListItem[body]" onChange={this.updateField("body")} value={this.state.body}/>
      
          <button type="submit" onClick={this.onSubmit}>Add a turnip</button>

          <ul hidden={this.props.errors.length === 0 ? "hidden" : ""}>{errors}</ul>
      </form>
      </>
    )
  }
}

export default TodoForm;