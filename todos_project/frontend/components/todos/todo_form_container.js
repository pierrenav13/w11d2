import React from 'react';
import {connect} from 'react-redux';
import todoAction from '../../actions/todos_actions';
import TodoForm from './todo_form';

const mapDispatchToProps = (dispatch) => ({
    receiveTodo: (todo) => dispatch(todoAction.receiveTodo(todo))
})

export default connect(null, mapDispatchToProps)(TodoForm);