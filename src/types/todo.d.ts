interface Todo {
    id:number,
    text:String,
    complete:boolean
}

type TodoState = {
    todos: Todo[]
}

type TodoAction = {
    type: string,
    todo:Todo
}

type DispatchType = (args: TodoAction) => TodoAction

type togleTodo = (selectedTodo : Todo) => void