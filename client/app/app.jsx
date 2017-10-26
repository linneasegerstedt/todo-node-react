import React, { Component } from 'react';
import Todo from './rbellande/todo/todo.jsx';

export default class App extends Component {
  constructor() {
    super();
    this.todo = {
      name: 'test',
      description: 'my description'
    }
  }
  render() {
    return (
      <Todo todo={ this.todo }/>
    );
  }
}
