import { ReactComponent } from '*.svg';

import React, { useState } from 'react'
import TodoList from './components/TodoList';
import TodoListItem from './components/TodoListItem';

const todoList : Array<Todo> =  [
  {text:"Home work",complete:true},
  {text:"Walk Megue",complete:false},
  {text:"Tcc app",complete:false}
]

 
const App :React.FC = () => {
  const [todos, setTodos] = useState(todoList);
  const togleTodo:togleTodo = selectedTodo =>{
    console.log(selectedTodo);
    
     const newTodos = todos.map(todo =>{
       if(todo === selectedTodo){
         return{
           ...todo,
           complete : !todo.complete
         }
       };
       return todo
     })
     setTodos(newTodos)
   
  }
  return (
    <React.Fragment>
      <TodoList togleTodo={togleTodo} todoList={todos}/>
    </React.Fragment>
  )        
} 

export default App;
