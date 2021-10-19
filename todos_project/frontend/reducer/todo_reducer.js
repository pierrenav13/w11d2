import {RECEIVE_TODOS} from "../actions/todos_actions"
import {RECEIVE_TODO} from "../actions/todos_actions"


const initialState = {
    1: {
        id: 1,
        title: "wash car",
        body: "with soap",
        done: false
    },
    2: {
        id: 2,
        title: "wash dog",
        body: "with shampoo",
        done: true
    }
};

const newTodos = [{ id: 1, title: "a"}, { id: 2, title: "b"}, {id: 3, title: "c"}];

const todosReducer = (state = initialState, action) => {
    Object.freeze(state);
    const newState = Object.assign({}, state);
    let newTodoList = {};

    switch (action.type) {
        case RECEIVE_TODOS:
            action.todos.forEach((todo) => {
                newTodoList[todo.id] = todo
            })
            return newTodoList;
        case RECEIVE_TODO:
            newState[action.todo.id] = action.todo;
            return newState;
        default:
            return state;
    }
};

export default todosReducer;