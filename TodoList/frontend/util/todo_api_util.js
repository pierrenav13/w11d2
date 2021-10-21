import React from 'react'

export const fetchTodos = () => {
    // debugger
    return $.ajax({
        method: 'GET',
        url: '/api/todolists'
    });

}

export const createTodo = (todo) => {
    return $.ajax({
        method: 'POST',
        url: '/api/todolists',
        data: {
            todolist: todo
        },
        dataType: 'JSON'
    });
}