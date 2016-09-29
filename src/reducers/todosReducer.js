import { RECEIVE_TODOS, RECEIVE_TODO } from '../actions/todoActions';

export default function todosReducer(state = [], action) {
  switch (action.type) {
    case RECEIVE_TODOS:
      return action.todos;
    case RECEIVE_TODO:
      return [ action.todo, ...state ];

    default:
      return state;
  }
}
