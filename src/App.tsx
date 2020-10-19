import { ReactComponent } from '*.svg';
import { useSelector, shallowEqual, useDispatch } from "react-redux"
import './App.css';
import React, { useState } from 'react'
import { Layout } from "antd";
import TodoList from './components/TodoList';
import TodoForm from './components/TodoForm';
import { Dispatch } from "redux"
import { addTodo,togleTodo } from './store/actionsCreators';
 


const App :React.FC = () => {
  const todos: Todo[] = useSelector(
    (state: TodoState) => state.todos,
    shallowEqual
  )
const { Header, Footer, Sider, Content } = Layout;

  
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
      <Layout>
      <Header>Todo list</Header>    
      <TodoList togleTodo={togleTodos} todoList={todos}/>
      </Layout>
      <TodoForm saveTodo={saveTodo}/>      
    </React.Fragment>
  )        
} 

export default App;
