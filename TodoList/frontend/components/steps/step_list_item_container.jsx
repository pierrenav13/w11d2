import React from "react";
import StepListItem from './step_list_item';
import stepAction from "../../actions/step_actions";
import { connect } from "react-redux";


const mapDispatchToProps = dispatch => ({
    removeStep: step => dispatch(stepAction.removeStep(step)),
    receiveStep: step => dispatch(stepAction.receiveStep(step))
})

export default connect(null, mapDispatchToProps)(StepListItem)