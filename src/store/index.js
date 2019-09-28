import { createStore } from 'redux'
import updatingtodos_reducer from './reducers/updating_todos';


let store = createStore(updatingtodos_reducer)

// store.subscribe(() =>
//   console.log(store.getState())
// );

export default store;
