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

onDelete = (index) => {
  console.log("check " + index)
  this.state.todos.splice(index,1)
  this.setState({
    todos: [...this.state.todos].splice(index, 1)
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
          <button value = {index}onClick = {() => this.onDelete(item.index)}>Delete</button>
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





// class todoList extends Component {
//   // Create a reference to grab input field
//   textInput = React.createRef()

//   // Create State object YAY, my prayers have been answered.
//   state = {
//     text: '',
//     todos: [],
//     isClicked: false,
//   }

//   // Function to set focus on text input Field
//   componentDidMount() {
//     this.textInput.current.focus();
//   }

//   // Actions taken when Add Todo button is clicked.
//   addTodoButtonHandler = () => {
//     // Save below 2 lines of code for another project
//     // this.setState({ isClicked: !this.state.isClicked })
//     // console.log(this.state.isClicked)
    
//     // Move submitted text to todos array
//     this.state.todos.push(this.state.text);
//     // console.log('addTodoButtonHandler() todo Push: ', this.state.todos);

//     // Clear input field
//     this.setState({ text: ''});

//     // Set Focus on Text Input Field
//     this.componentDidMount();
//   }

//   removeTask = (index)=> {
//     // console.log(Object.prototype.toString.call(e.target.value))
//     console.log(index)

//     // const eValue = parseInt(e.target.value)
//     // console.log('eValue***', eValue)

//     console.log('todos state before splice***', this.state.todos)

//     this.setState({
//       todos: this.state.todos.splice(index, 1)
//     })

//     console.log('todos state after splice***', this.state.todos)

//   }

//   inputFieldText = (e) => {
//     this.setState({ text: e.target.value })
//     // console.log(e.target.value);
//   }

//   render() {
//     return (
//       <div>
//         <h1>{this.state.text}</h1>
//         <button onClick={this.addTodoButtonHandler}>Add Item</button>
//         <input ref={this.textInput} value={this.state.text} onChange={this.inputFieldText}></input>
//         <ul>
//           {this.state.todos.map((todo, index) => 
//             <li key={index}>{todo}<button value={index} onClick={() => this.removeTask(index)}>Done!</button></li>
//           )}
//         </ul>
//       </div>
//     )
//   }
// };

// export default todoList;