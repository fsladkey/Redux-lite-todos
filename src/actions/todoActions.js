import ApiUtil from '../util/apiUtil'

export const RECEIVE_TODOS = "RECEIVE_TODOS";
export const RECEIVE_TODO = "RECEIVE_TODO";

export function fetchTodos() {
  return function (dispatch) {
    ApiUtil.fetchTodos()
      .then(todos => dispatch(receiveTodos(todos)));
  }
}

export function createTodo(todo) {
  return function (dispatch) {
    ApiUtil.createTodo(todo)
      .then(todo => dispatch(receiveTodo(todo)));
  }
}

export function receiveTodos(todos) {
  return {
    type: RECEIVE_TODOS,
    todos
  }
}

export function receiveTodo(todo) {
  return {
    type: RECEIVE_TODO,
    todo
  }
}
