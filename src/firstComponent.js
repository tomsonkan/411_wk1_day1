import React from 'react';

function FirstComponent(props) {
  console.log("This is the FirstComp props", props.todos)
  return (
    <div>
    <h1>To Do List (This is our listing Component) </h1>
    <ul>
        {props.todos.map((item, index) => {
          return <li key={index}>{props.todos[index]}</li>
        
        })}
        </ul>
    </div>    
  )
}

export default FirstComponent