import * as APIUtil from '../util/todo_api_util'

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
    },

    fetchTodos: () => {
        // debugger
        return (dispatch) => {
            // debugger
            APIUtil.fetchTodos().then(todos => {
                // debugger
                return dispatch(todoAction.receiveTodos(todos))
            })
        }
    },

    createTodo: (todo) => {
        return (dispatch) => {
            APIUtil.createTodo(todo).then(todo => {
                return dispatch(todoAction.receiveTodo(todo))
            })
        }
    }

}

export default todoAction;