import React, { Component } from 'react';
import '../index.css';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import {List, ListItem} from 'material-ui/List';
import IconButton from 'material-ui/IconButton';
import NavigationClose from 'material-ui/svg-icons/navigation/close';
import SvgIcon from 'material-ui/SvgIcon';

const iconStyles = {
  marginRight: 24,
};

const HomeIcon = (props) => (
  <SvgIcon {...props}>
    <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
  </SvgIcon>
);

const style = {
  margin: 12,
};

const style2 = {
    visibility: 'hidden',
};

class TodoHome extends Component {
  constructor(props){
    super(props);
    this.state = {
      userInput : '',
      userTodo : [],
      btnvalue : 'ADD',
      editindex: '',
      edititem: ''
    };
  }
  valueChange = (event) => {
    this.setState({userInput: event.target.value});
  }

  pushTodos = () => {
      if(this.state.btnvalue === 'ADD') {
    var todos = this.state.userTodo;
    todos.push(this.state.userInput);
    this.setState({userTodo: todos});
    this.state.userInput = '';
    // console.log(this.state.userTodo);
    this.props.update(this.state.userTodo);
    // console.log(this.props.todo)
    }
    else{console.log(this.state)
        this.setState({btnvalue : 'ADD'});
        console.log(this.state)
        var a = this.state.userTodo;
        a.splice(this.state.editindex, 1, this.state.userInput)
        console.log(a)
    }
  }

  
  deletingtodo= (index) => {
    var list = this.state.userTodo;
    
    delete this.state.userTodo[index]; 
    this.setState({userTodo: list,});
    this.props.update(this.state.userTodo)
    // console.log(this.state.userTodo + 'done')
  }

  editingtodo = (item, index) => {
        console.log( ' item' + item + ' index '+ index);
        this.setState({userInput: item, btnvalue: 'EDIT',  editindex : index, edititem : item});
        }

  deleteTodos = () => {
      this.setState({userTodo: []});
      var userTodo = [];
      this.props.update(userTodo);
      console.log(this.props.userTodo)
  }

  render() {
    // var showingtodos = this.props.todo;
    // var getTodos = 
    
    return (
      <div>
        <h1>
          TODO App  
        </h1>
        <div>
            {/* Counter {this.props.counter}   */}
            <TextField
            hintText="here"
            floatingLabelText="Add your todos"
            value={this.state.userInput}
            onChange={this.valueChange}
            
            />
            <RaisedButton label={this.state.btnvalue} primary={true} style={style} onClick={this.pushTodos} />
            <RaisedButton label='Remove' primary={true} style={style} onClick={this.deleteTodos} />
           </div>
           <div>
           <List>
               {console.log(this.props.todo)}
           {
               this.props.todo.map((item, index) => {
            // console.log(`item ${item}  index${index}`);
        return(
        
            
            <ListItem primaryText={item}  key={index} rightIcon={<IconButton onClick={()=> this.deletingtodo(index)}><NavigationClose /></IconButton>}  leftIcon={<HomeIcon style={iconStyles} onClick={()=> this.editingtodo(item, index)} />}>
            
            </ListItem>
        )   
        }
        )
       }
       </List>
           </div>
            

          {/* 
    //        <List>
    //   <ListItem primaryText="All mail" rightIcon={<ActionInfo />} />
    //   <ListItem primaryText="Trash" rightIcon={<ActionInfo />} />
    //   <ListItem primaryText="Spam" rightIcon={<ActionInfo />} />
    //   <ListItem primaryText="Follow up" rightIcon={<ActionInfo />} />
    // </List>
    //         */}
           
      </div>
    );
  }
}

export default TodoHome;
