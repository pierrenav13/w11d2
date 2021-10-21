import React from 'react';
import ReactDOM from 'react-dom';
import {configureStore} from "./store/store"
import todoAction from './actions/todos_actions';
import todosReducer from "./reducer/todo_reducer";
import stepAction from "./actions/step_actions";
import Root from "./components/root";
import {allTodos} from './reducer/selectors';
import {stepsByTodoId} from './reducer/selectors';
// import {fetchTodos} from './actions/todos_actions'



document.addEventListener('DOMContentLoaded', ()=> {
    const content = document.getElementById('root');

    const store = configureStore();
    
    window.store = store;
    
    window.fetchTodos = todoAction.fetchTodos;

    ReactDOM.render(<Root store={store}/>, content);
})


// window.todosReducer = todosReducer;

// window.receiveTodo = todoAction.receiveTodo;

// window.receiveTodos = todoAction.receiveTodos;

// window.removeTodo = todoAction.removeTodo;

// window.receiveSteps = stepAction.receiveSteps;

// window.receiveStep = stepAction.receiveStep;

// window.removeStep = stepAction.removeStep;

// window.allTodos = allTodos;
// window.stepsByTodoId = stepsByTodoId;