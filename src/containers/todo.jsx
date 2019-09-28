import React, { Component } from 'react';
import { connect } from 'react-redux';
import '../index.css';
import TodosActions from '../store/actions/action_addingtodos'
import TodoHome from '../components/home'

// Mapping the component's property to Redux's state
function mapStateToProps(state) {
    return {
        userTodo : state.userTodo,
    };
}

function mapDispatchToProps(dispatch) {
    return {
        passingtodos : (value) => {
        return dispatch(TodosActions.updatingTodos_dispatch(value));
        }
    };
}

class App extends Component {


    updateTodos = (value) => {
    this.props.passingtodos(value);
  }

  render() {
    return (
       <div className='main'>
            {/* <Counter counter={this.props.incCounter + this.props.decCounter} update={this.updateCounter.bind(this)} /> */}
        
            <TodoHome update={this.updateTodos} todo={this.props.userTodo} />
        </div>      
    );
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(App);
