import React, { Component } from 'react';

import Todo from './Todo'

class TodoList extends Component{
  render(){
    let todos = this.props.todos // list of todos
    console.log(todos)
    return(
      <div>
        <h1>Todo List</h1>
        {
          todos.map( (el) => {
            return(
              <Todo todo={el} />
            )
          })
        }
      </div>
    )
  }
}

export default TodoList
