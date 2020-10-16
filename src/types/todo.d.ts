interface Todo {
    text:String,
    complete:boolean
}

type togleTodo = (selectedTodo : Todo) => void