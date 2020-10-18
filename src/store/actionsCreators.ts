import * as actionTypes from "./actionsTypes"

export function addTodo(todo: Todo) {
  console.log("add Todo",todo);
    
  const action: TodoAction = {
    type: actionTypes.ADD_TODO,
    todo,
  }

  return simulateHttpRequest(action)
}

export function removeTodo(todo: Todo) {
  const action: TodoAction = {
    type: actionTypes.REMOVE_TODO,
    todo,
  }
  return simulateHttpRequest(action)
}

export function togleTodo(todo: Todo) {
  const action: TodoAction = {
    type: actionTypes.TOGLE_TODO,
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