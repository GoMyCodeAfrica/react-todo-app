import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import TodoList from './TodoList'
import TodoCreator from './TodoCreator'

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      valueOfInput: '',
      todos: [
        {
          label: "Do Sth",
          done: true
        },
        {
          label: "Do another thing",
          done: false
        }
      ]
    }
  }

  addTodo(stringReprestingLabel){
    let newTodo = {
      label: stringReprestingLabel,
      done: false
    }
    this.setState({
      todos: this.state.todos.concat(newTodo)
    })
  }


  render() {
    return (
      <div className="App">
        <TodoCreator onBtnAddClicked={ this.addTodo.bind(this) } />
        <TodoList todos={ this.state.todos } />
      </div>
    );
  }
}

export default App;
