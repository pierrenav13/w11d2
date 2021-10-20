import React from 'react';

class TodoListItem extends React.Component{
    constructor(props){
        super(props);
        this.handleDelete = this.handleDelete.bind(this);
        this.handleDone = this.handleDone.bind(this);
    }

    handleDelete(e){
        this.props.removeTodo(this.props.todo)
    }

    handleDone(e){
        this.props.todo.done = !this.props.todo.done
        this.props.receiveTodo(this.props.todo)
    }

    render(){
        const todo = this.props.todo
        let done = todo.done === true ? "Undo" : "Done"
        return(
            <li>
                <div className='title'>
                    {todo.title}
                    <button onClick={this.handleDone}>{done}</button>
                </div>
                <div className='detail'>
                    {todo.body}
                    <button onClick={this.handleDelete}>Delete Todo</button>
                </div>
            </li>
        )
    }
}

export default TodoListItem;