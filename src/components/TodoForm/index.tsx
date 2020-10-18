import * as React from "react"

type Props = {
  saveTodo: (todo: Todo | any) => void
}

const TodoForm: React.FC<Props> = ({ saveTodo }) => {
  const [todo, setTodo] = React.useState<Todo | {}>()

  const handleArticleData = (e: React.FormEvent<HTMLInputElement>) => {
    
    setTodo({
      ...todo,
      [e.currentTarget.id]: e.currentTarget.value,
    })
  }

  const addNewTodo = (e: React.FormEvent) => {
    e.preventDefault()
    saveTodo(todo)
  }

  return (
    <form onSubmit={addNewTodo} className="Add-article">
      <input
        type="text"
        id="text"
        placeholder="Title"
        onChange={handleArticleData}
      />
      {/* <input type="checkbox" id="complete" checked={}
        onChange={handleArticleData} />       */}
      <button disabled={todo === undefined ? true : false}>
        Add Todo
      </button>
    </form>
  )
}

export default TodoForm