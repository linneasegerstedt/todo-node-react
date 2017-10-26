import React, { Component } from 'react';

export default class Todo extends Component {
  render() {
    return (
    <div  className="todo">
      <span className="todo_name">{ this.props.todo.name }</span>
      <span className="todo_description">{ this.props.todo.description }</span>
    </div>
    );
  }
}
