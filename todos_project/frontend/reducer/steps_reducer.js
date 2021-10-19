import stepAction from "../actions/step_actions";

const initialState = {
    1: { 
        id: 1,
        title: 'walk to store',
        done: false,
        todo_id: 1
    },
    2: { 
        id: 2,
        title: 'buy soap',
        done: false,
        todo_id: 1
    }
}

const stepsReducer = (state = initialState, action) => {
    Object.freeze(state);
    const newState = Object.assign({}, state);
    let newSteps = {};

    switch(action.type){
        case stepAction.RECEIVE_STEPS:
            action.steps.forEach((step) => {
                newSteps[step.id] = step;
            })
            return newSteps;
        case stepAction.RECEIVE_STEP:
            newState[action.step.id] = action.step;
            return newState;
        case stepAction.REMOVE_STEP:
            delete newState[action.step.id];
            return newState;
        default:
            return state;
    }

};

export default stepsReducer;