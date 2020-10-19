import React from "react";
import { List, Checkbox } from 'antd';
export interface TodoListItemProps {
    todo:Todo,
    togleTodo: togleTodo
}

class TodoListItem extends React.Component<TodoListItemProps> {
    render() {
        const { todo, togleTodo } = this.props
        return (
            <>              
              <List.Item><Checkbox checked={todo.complete} onChange={()=>togleTodo(todo)}></Checkbox> {todo.text}</List.Item>
            </>
        );    
    }
}

export default TodoListItem;