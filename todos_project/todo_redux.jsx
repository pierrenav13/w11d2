import React from 'react';
import ReactDOM from 'react-dom';
import {configureStore} from "./frontend/store/store"
import {receiveTodos} from "./frontend/actions/todos_actions"
import {receiveTodo} from "./frontend/actions/todos_actions"
import todosReducer from "./frontend/reducer/todo_reducer"


document.addEventListener('DOMContentLoaded', ()=> {
    const content = document.getElementById('content');

    const store = configureStore();
    
    window.store = store;

    window.todosReducer = todosReducer;

    window.receiveTodo = receiveTodo;

    window.receiveTodos = receiveTodos;

    ReactDOM.render(<h1>Todos App</h1>, content);
})