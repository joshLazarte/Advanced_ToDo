import React, { useState, useContext, useEffect } from 'react';
import TodoContext from '../context/todo/todoContext';


const ToDoList = () => {
    const todoContext = useContext(TodoContext);
    const {todos, getTodos} = todoContext;
    
    useEffect(() => {
    getTodos();
    //eslint-disable-next-line
  }, []);

    
    return (
        <div>
            <h2 className="text-center">To Do List</h2>
            <ul className="list-group">
                {todos.map(todo => (
                    <li key={todo._id} className="list-group-item">{todo.name}</li>
                ))}
            </ul>
        </div>
    )
}

export default ToDoList;