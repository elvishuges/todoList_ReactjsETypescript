import { ReactComponent } from '*.svg';
import { useSelector, shallowEqual, useDispatch } from "react-redux"

import React, { useState } from 'react'
import TodoList from './components/TodoList';
import TodoForm from './components/TodoForm';
import TodoListItem from './components/TodoListItem';
import { Dispatch } from "redux"
import { addTodo,togleTodo } from './store/actionsCreators';
 
const App :React.FC = () => {
  const todos: Todo[] = useSelector(
    (state: TodoState) => state.todos,
    shallowEqual
  )
  
  const dispatch: Dispatch<any> = useDispatch()
  const saveTodo = React.useCallback(
      (todo: Todo) => dispatch(addTodo(todo)),
      [dispatch]
  )

  const togleTodos = React.useCallback(
    (todo: Todo) => dispatch(togleTodo(todo)),
    [dispatch]
)

  return (
    <React.Fragment>
      <TodoList togleTodo={togleTodos} todoList={todos}/>
      <TodoForm saveTodo={saveTodo}/>
    </React.Fragment>
  )        
} 

export default App;
