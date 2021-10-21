import React from 'react';
import { connect } from 'react-redux';
import TodoList from './todo_list';
import { allTodos } from '../../reducer/selectors';
import todoAction from '../../actions/todos_actions';


const mapStateToProps = (state) => {
    const todos = allTodos(state);
    return {
        todos: todos
    }
}

const mapDispatchToProps = dispatch => ({
    receiveTodo: todo => dispatch(todoAction.receiveTodo(todo)),
    fetchTodos: () => dispatch(todoAction.fetchTodos())
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(TodoList);
