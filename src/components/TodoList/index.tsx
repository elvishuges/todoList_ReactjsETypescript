import React  from "react";
import TodoListItem from "../TodoListItem";

interface TodoListProps {
    todoList : Todo[],
    togleTodo: togleTodo
}
 
class TodoList extends React.Component<TodoListProps> {
    
    render() { 
        const { todoList, togleTodo } = this.props
        return (        
           todoList.map((todo,i)=>{
              return <TodoListItem key={i} todo={todo} togleTodo = {togleTodo}/>
           }) 
        )
    }
}
 
export default TodoList;