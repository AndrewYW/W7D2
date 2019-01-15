import React, { Component } from 'react';
import TodoContainer from './todos/todo_list_container';

class App extends React.Component {
  render() {
    return (<>
    <h1>Turnip up</h1>
    <TodoContainer /> 
    </>)
  }
}

export default App;