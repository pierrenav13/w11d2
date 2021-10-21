import React from 'react';

class StepListItem extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            done: false
        }
    }

    render() {
        

        return (
            <div>
                <h3>{this.props.step.title}</h3>
                <p>{this.props.step.body}</p>
                <button></button>
                <button></button>
            </div>
        )
    }

}

export default StepListItem