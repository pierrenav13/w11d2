import React from 'react';


class TodoDetailView extends React.Component {
    constructor(props) {
        super(props);
        this.handleDelete = this.handleDelete.bind(this);
    }

    handleDelete(e) {
        this.props.removeTodo(this.props.todo)
    }

    render() {
        return(
            <div className='detail'>
                {this.props.todo.body}
                <button onClick={this.handleDelete}>Delete Todo</button>
            </div>
        )
    }
}

export default TodoDetailView;