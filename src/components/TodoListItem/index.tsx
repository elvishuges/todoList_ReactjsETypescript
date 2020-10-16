import React from "react";
export interface TodoListItemProps {
    todo:Todo,
    togleTodo: togleTodo
}

class TodoListItem extends React.Component<TodoListItemProps> {
    render() {
        const { todo, togleTodo } = this.props
        return (
        <li>
            <label>
                <input onChange={()=>togleTodo(todo)} type="checkbox" checked={todo.complete}/>
                {todo.text}
            </label>
        </li>
        );    
    }
}

export default TodoListItem;