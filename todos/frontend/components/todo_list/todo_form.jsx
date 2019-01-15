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
    this.props.receiveTodo({id: id, ...this.state});
  }

  updateField(field) {
    return (event) => {
      this.setState({
        [field]: event.currentTarget.value,
      });
    };
  }

  render() {
    return (
      <>
      <form>

          <input type="text" name="todoListItem[title]" onChange={this.updateField("title")} value={this.state.title}/>
          <input type="text" name="todoListItem[body]" onChange={this.updateField("body")} value={this.state.body}/>
      
          <button type="submit" onClick={this.onSubmit}>Add a turnip</button>
      </form>
      </>
    )
  }
}

export default TodoForm;