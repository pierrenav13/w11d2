import React from 'react';
import TodoDetailViewContainer from './todo_detail_view_container'

class TodoListItem extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            detail: false
        }
        this.handleDone = this.handleDone.bind(this);
        this.showDisplay = this.showDisplay.bind(this);
    }


    handleDone(e){
        this.props.todo.done = !this.props.todo.done
        this.props.receiveTodo(this.props.todo)
    }

    showDisplay(e) {
        this.setState({
            detail: !this.state.detail
        })
    }

    render(){
        const todo = this.props.todo
        let done = todo.done === true ? "Undo" : "Done"

        const detail = () => {
            if (this.state.detail) {
                return <TodoDetailViewContainer todo={todo}/>
            }
        }

        return(
            <li>
                <div className='title'>
                    <a onClick={this.showDisplay} >{todo.title}</a>
                    <button onClick={this.handleDone}>{done}</button>
                </div>
                {detail()}
                
            </li>
        )
    }
}

export default TodoListItem;