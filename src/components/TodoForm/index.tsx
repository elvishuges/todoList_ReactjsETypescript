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

  const addNewArticle = (e: React.FormEvent) => {
    e.preventDefault()
    saveTodo(todo)
  }

  return (
    <form onSubmit={addNewArticle} className="Add-article">
      <input
        type="text"
        id="text"
        placeholder="Title"
        onChange={handleArticleData}
      />
      <input
        type="text"
        id="complete"
        placeholder="Description"
        onChange={handleArticleData}
      />
      <button disabled={todo === undefined ? true : false}>
        Add article
      </button>
    </form>
  )
}

export default TodoForm