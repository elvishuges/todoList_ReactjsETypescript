import React from "react";
import TodoListItem from "../TodoListItem";
import { List, Typography, Divider } from 'antd';

interface TodoListProps {
    todoList: Todo[],
    togleTodo: togleTodo
}

class TodoList extends React.Component<TodoListProps> {

    render() {
        const { todoList, togleTodo } = this.props

        return (
            <List
                size="small"
                header={<div>Todo</div>}
                bordered
                dataSource={todoList}
                renderItem={(todo, i) => <TodoListItem key={i} todo={todo} togleTodo={togleTodo} />}
            />
        )
    }
}

export default TodoList;