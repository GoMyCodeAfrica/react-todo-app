import React, { Component } from 'react';

function change(){
  let newTodo = this.state.todo
  newTodo.done = !newTodo.done
  this.setState({
    todo: newTodo
  })
}

function editModeHandler(){
  let newEditMode = !this.state.editMode
  this.setState({
    editMode: newEditMode
  })
}

class Todo extends Component {
  constructor(props){
    super(props)
    this.state = {
        todo: this.props.todo,
        editMode: false
      }
  }

  editModeHandler(){
    let newEditMode = !this.state.editMode
    this.setState({
      editMode: newEditMode
    })
  }

  render(){
    let el = this.props.todo
    let change_ = change.bind(this)
    let editModeHandler_ = this.editModeHandler.bind(this)
    return(
      <div>
      {
        this.state.editMode == false &&
        <div className="label-holder">
          {
            el.done == true &&
            <h2 style={todoDone}>{el.label}</h2>
          }
          {
            el.done == false &&
            <h2 style={todoNotFinished}>{el.label}</h2>
          }
        </div>
      }
      {
        this.state.editMode == true &&
        <input />
      }
        <button onClick= { change_ } >Change</button>
        <button onClick= { editModeHandler_ } >Edit</button>
      </div>
    )
  }
}


export default Todo


const todoDone = {
  color: "green"
}

const todoNotFinished = {
  color: "red"
}
