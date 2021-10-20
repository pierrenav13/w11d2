import React from 'react';
import ReactDOM from 'react-dom';
import {configureStore} from "./frontend/store/store"
import todoAction from './frontend/actions/todos_actions';
import todosReducer from "./frontend/reducer/todo_reducer";
import stepAction from "./frontend/actions/step_actions";
import Root from "./frontend/components/root";
import {allTodos} from './frontend/reducer/selectors';
import {stepsByTodoId} from './frontend/reducer/selectors';



document.addEventListener('DOMContentLoaded', ()=> {
    const content = document.getElementById('content');

    const store = configureStore();
    
    window.store = store;
    window.allTodos = allTodos;
    window.stepsByTodoId = stepsByTodoId;

    ReactDOM.render(<Root store={store}/>, content);
})


// window.todosReducer = todosReducer;

// window.receiveTodo = todoAction.receiveTodo;

// window.receiveTodos = todoAction.receiveTodos;

// window.removeTodo = todoAction.removeTodo;

// window.receiveSteps = stepAction.receiveSteps;

// window.receiveStep = stepAction.receiveStep;

// window.removeStep = stepAction.removeStep;