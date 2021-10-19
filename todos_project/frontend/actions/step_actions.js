
const stepAction = {
    RECEIVE_STEPS: 'RECEIVE_STEPS',
    RECEIVE_STEP: 'RECEIVE_STEP',
    REMOVE_STEP: 'REMOVE_STEP',

    receiveSteps: (steps) => {
        return {
            type: stepAction.RECEIVE_STEPS,
            steps,
        }
    },

    receiveStep: (step) => {
        return {
            type: stepAction.RECEIVE_STEP,
            step,
        }
    },

    removeStep: (step) => {
        return {
            type: stepAction.REMOVE_STEP,
            step,
        }
    },

}

export default stepAction;