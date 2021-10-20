import React from 'react';
import {connect} from 'react-redux';
import TodoDetailView from './todo_detail_view';
import todoAction from '../../actions/todos_actions';
import stepAction from '../../actions/step_actions';

const mapDispatchToProps = (dispatch) => ({
    removeTodo: (todo) => dispatch(todoAction.removeTodo(todo)),
    receiveSteps: (steps) => dispatch(stepAction.receiveSteps(steps))
})

export default connect(null, mapDispatchToProps)(TodoDetailView);