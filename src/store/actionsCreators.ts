import * as actionTypes from "./actionsTypes"

export function addArticle(todo: Todo) {
  console.log("add Todo",todo);
    
  const action: TodoAction = {
    type: actionTypes.ADD_TODO,
    todo,
  }

  return simulateHttpRequest(action)
}

export function removeArticle(todo: Todo) {
  const action: TodoAction = {
    type: actionTypes.REMOVE_TODO,
    todo,
  }
  return simulateHttpRequest(action)
}

export function simulateHttpRequest(todo: TodoAction) {
  return (dispatch: DispatchType) => {
    setTimeout(() => {
      dispatch(todo)
    }, 500)
  }
}