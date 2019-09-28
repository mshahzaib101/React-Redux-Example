
export default class TodosActions {

    static UpdatingTodos = "ADDING TODO";
    // static DECREMENT = "DECREMENT";
    // static INCREMENT_WITH_VALUE = "INCREMENT_WITH_VALUE";
    // static DECREMENT_WITH_VALUE = "DECREMENT_WITH_VALUE";

    static updatingTodos_dispatch(value){
        return { 
            type: this.UpdatingTodos,
            todo: value
        }
    }
}