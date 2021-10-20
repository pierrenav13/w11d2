import React from 'react';
import { connect } from 'react-redux';
import stepAction from '../../actions/step_actions';
import StepList from './step_list';
import { stepsByTodoId } from '../../reducer/selectors';


const mapDispatchToProps = (dispatch) => ({
    receiveStep: step => dispatch(stepAction.receiveStep(step))
})

const mapStateToProps = (state, todo) => {
    const steps = stepsByTodoId(state,  todo.id)
    return {
        steps: steps,
        todoId: todo.id
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(StepList)