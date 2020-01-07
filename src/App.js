import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import FirstComponent from './firstComponent'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      text: ' ',
      todos: [],
      isClicked: false
    };
    this.handleClick = this.handleClick.bind(this);
  }

handleClick() {
  console.log("***This is state***", this.state.isClicked)  
  this.setState(state => ({
      isClicked: !state.isClicked
    }));
  }

inputUpdate = event => {
    this.setState({text: event.target.value})
}

formSubmit = event => {
  // built in method that does not wipe out state when browser refreshes
  event.preventDefault()
  console.log("***This is a State**", this.state.todos)
  this.setState({
    todos: [...this.state.todos, this.state.text],
    text:' '
  })
}

formSubmit = event => {
  // built in method that does not wipe out state when browser refreshes
  event.preventDefault()
  console.log("***This is a State**", this.state.todos)
  this.setState({
    todos: [...this.state.todos, this.state.text],
    text:' '
  })
}

render() {
console.log("**THIS STATE**", this.state.isOn)
return ( 
  <div className="App">
    <header className="App-header">
      {/*<img src={logo} className="App-logo" alt="logo" >*/}
      {/*<h1> Hello World</h1>*/}
      <h1>To Do List</h1>
     
      <form onSubmit = {this.formSubmit}>
    
      <input value={this.state.text} onChange={this.inputUpdate}/>
      <button onClick = {this.handleClick}>Submit</button>  
      </form>
      
     <FirstComponent todos = {this.state.todos} />

    </header>
    
  </div>
);
}
}

export default App;