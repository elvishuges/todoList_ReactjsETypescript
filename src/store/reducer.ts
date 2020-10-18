import * as actionTypes from "./actionsTypes"

const initialState: TodoState = {
  todos: [
    {
      id: 1,
      text: "Walk with Megue",
      complete: false,
    },
    {
      id: 2,
      text: "Tcc Steps",
      complete:true,
    },
  ],
}

const reducer = (
    state: TodoState = initialState,
    action: TodoAction
  ): TodoState => {
    switch (action.type) {
      case actionTypes.ADD_TODO:
        const newArticle: Todo = {
          id: Math.random(), // not really unique
          text: action.todo.text,
          complete: action.todo.complete,
        }
        return {
          ...state,
          todos: state.todos.concat(newArticle),
        }
      case actionTypes.REMOVE_TODO:
        const updatedArticles: Todo[] = state.todos.filter(
          todos => todos.id !== action.todo.id
        )
        return {
          ...state,
          todos: updatedArticles,
        }
    }
    return state
  }
  
  export default reducer