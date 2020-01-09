import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import FirstComponent from './firstComponent'
import { render } from '@testing-library/react';

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
//state changes between true and false
handleClick() {
  console.log("***This is state***", this.state.isClicked)  
  this.setState(state => ({
      isClicked: !state.isClicked
    }));
  }

//input value in form
inputUpdate = event => {
    this.setState({text: event.target.value})
}

//form submit button
formSubmit = event => {
  // built in method that does not wipe out state when browser refreshes
  event.preventDefault()
  console.log("***This is a State**", this.state.todos)
  this.setState({
    todos: [...this.state.todos, this.state.text],
    text:' '
  })
}

//delete function 
onDelete = (index) => {
  console.log("check " + index)
  let stuffBefore = this.state.todos.slice(0,index);
  let stuffAfter = this.state.todos.slice(index + 1, this.state.todos.length);

  this.setState({
    todos: [...stuffBefore, ...stuffAfter]
    // todos: [...this.state.todos].splice(index, 1)
  })
};

 //check
render() {
console.log("**THIS STATE**", this.state.isOn)
return ( 
  <div className="App">
    <header className="App-header">
      {/*<img src={logo} className="App-logo" alt="logo" >*/}
      {/*<h1> Hello World</h1>*/}
      <h1>To Do List</h1>
     
      <form onSubmit = {this.formSubmit}>
    
      <input 
            value={this.state.text} 
            onChange={this.inputUpdate}/>
      <button onClick = {this.handleClick}>Submit</button>  
      </form>
      <h1>To Do List (This is our listing Component) </h1>
      <ul>
        {this.state.todos.map((item, index) => {
          return (
          <li key={index}>
          {this.state.todos[index]}
          <button value = {index}onClick = {() => this.onDelete(index)}>Delete</button>
          </li>
          )
        })}
        </ul>
     {/* <FirstComponent todos = {this.state.todos} /> */}
     
     

    </header>
    
  </div>
);
}
}

export default App;



