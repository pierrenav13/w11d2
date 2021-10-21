import React from "react";
import StepListItemContainers from './step_list_item_container'
import StepForm from './step_form'

class StepList extends React.Component {
    constructor(props){
        super(props)
        //steps, todoId
    }

    render(){
        const steps = this.props.steps
        return (
            <div>
                <ul>
                    {steps.map(step => {
                        return <li key={step.id}><StepListItemContainers step={step} /></li>
                    })}
                </ul>
                <StepForm />
            </div>
        )
    }
}

export default StepList;