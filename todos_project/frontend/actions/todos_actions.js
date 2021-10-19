

const todoAction = {
    RECEIVE_TODOS: "RECEIVE_TODOS",
    RECEIVE_TODO: "RECEIVE_TODO",
    REMOVE_TODO: 'REMOVE_TODO',

    receiveTodos: (todos) => {
        return {
            type: todoAction.RECEIVE_TODOS,
            todos,
        };
    },

    receiveTodo: (todo) => {
        return {
            type: todoAction.RECEIVE_TODO,
            todo,
        };
    },

    removeTodo: (todo) => {
        return {
            type: todoAction.REMOVE_TODO,
            todo,
        }
    }

}

export default todoAction;