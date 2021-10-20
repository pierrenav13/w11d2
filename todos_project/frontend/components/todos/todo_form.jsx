import React from 'react';
import uniqueId from './util'

class TodoForm extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            id: uniqueId(),
            title: "",
            body: "",
            done: false
        }

        this.handleSubmit = this.handleSubmit.bind(this);
        this.updateTitle = this.updateTitle.bind(this);
        this.updateBody = this.updateBody.bind(this);
    }

    handleSubmit(e) {
        e.preventDefault();
        this.props.receiveTodo(this.state)
        this.setState({
            id: uniqueId(),
            title: "",
            body: "",
            done: false
        })
    }

    updateTitle(e) {
        this.setState({
            title: e.target.value
        })
    }

    updateBody(e) {
        this.setState({
            body: e.target.value
        })
    }

    render() {
        return(
            <form onSubmit={this.handleSubmit}>
                <h1>Add Todo</h1>
                <label>Title: 
                    <input type="text" value={this.state.title} onChange={this.updateTitle}/>
                </label>
                <br />
                <label>Body: 
                    <textarea cols="30" rows="10" value={this.state.body} onChange={this.updateBody}></textarea>
                </label>
                <br />
                <input type="submit" value="Create Todo!"/>
            </form>
        )
    }
}

export default TodoForm;