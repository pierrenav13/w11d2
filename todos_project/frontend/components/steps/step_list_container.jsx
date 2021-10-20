import React from 'react';
import { connect } from 'react-redux';
import stepAction from '../../actions/step_actions';
import StepList from './step_list';
import { stepsByTodoId } from '../../reducer/selectors';


const mapDispatchToProps = (dispatch) => ({
    receiveStep: step => dispatch(stepAction.receiveStep(step))
})

const mapStateToProps = (state, todoId) => {
    const steps = stepsByTodoId(state,  todoId)
    return {
        steps: steps,
        todoId: todoId
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(StepList)