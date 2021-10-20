import React from 'react';
import TodoListItem from './todo_list_item';
import TodoForm from './todo_form';
import TodoFormContainer from './todo_form_container';

class TodoList extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        return(
            <div>
                <TodoFormContainer />
                <ul>
                    {this.props.todos.map(todo => 
                        <TodoListItem key={todo.id} todo={todo} removeTodo={this.props.removeTodo} receiveTodo={this.props.receiveTodo}/>
                    )}
                </ul>
            </div>
        )
        // return <h3>Todo List goes here!</h3>
    }
}

export default TodoList;