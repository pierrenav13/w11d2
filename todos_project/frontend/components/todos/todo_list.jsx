import React from 'react';
import TodoListItem from './todo_list_item';

class TodoList extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        return(
            <div>
                <ul>
                    {this.props.todos.map(todo => 
                        <TodoListItem key={todo.id} todo={todo} />
                    )}
                </ul>
            </div>
        )
        // return <h3>Todo List goes here!</h3>
    }
}

export default TodoList;