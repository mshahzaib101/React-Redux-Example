
import TodosActions from '../actions/action_addingtodos'


const INITIAL_STATE = {
  userTodo: []
}

function updatingtodos_reducer(state = INITIAL_STATE, action) {
  switch (action.type) {
  case TodosActions.UpdatingTodos:
    return Object.assign({}, state, { userTodo: action.todo });
  default:
    return state
  }
}

export default updatingtodos_reducer;