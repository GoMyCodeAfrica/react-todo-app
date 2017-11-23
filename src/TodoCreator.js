import React, { Component } from 'react';

class TodoCreator extends Component {
  constructor(props){
    super(props)
    this.state = {
      value: ""
    }

  }

  inputchangedHandler(event){
    let newValue = event.target.value
    this.setState({
      value: newValue
    })
  }

  btnAddHandler(){
    let newLabel = this.state.value;
    this.props.onBtnAddClicked(newLabel)
  }
  render(){
    return(
      <div>
        <input onChange={ this.inputchangedHandler.bind(this) }/>
        <button onClick={this.btnAddHandler.bind(this)}  >Add</button>
      </div>
    )
  }
}

export default TodoCreator
