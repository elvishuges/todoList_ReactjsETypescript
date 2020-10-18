import { ReactComponent } from '*.svg';
import { useSelector, shallowEqual, useDispatch } from "react-redux"

import React, { useState } from 'react'
import TodoList from './components/TodoList';
import TodoForm from './components/TodoForm';
import TodoListItem from './components/TodoListItem';
import { Dispatch } from "redux"
import { addArticle } from './store/actionsCreators';

const todoList : Array<Todo> =  [
  { id: 1, text:"Home work", complete:true},
  { id: 2, text:"Walk Megue", complete:false},
  {id: 3, text:"Tcc app", complete:false}
]

 
const App :React.FC = () => {
  const articles: readonly Todo[] = useSelector(
    (state: TodoState) => state.todos,
    shallowEqual
  )
  const dispatch: Dispatch<any> = useDispatch()
  const [todos, setTodos] = useState(todoList);
  const saveTodo = React.useCallback(
      (todo: Todo) => dispatch(addArticle(todo)),
      [dispatch]
  )

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
      <TodoForm saveTodo={saveTodo}/>
    </React.Fragment>
  )        
} 

export default App;
