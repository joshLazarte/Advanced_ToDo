import React, { useState, useContext, useEffect } from 'react';
import TodoContext from '../../context/todo/todoContext';


const AddTodoForm = () => {
    const todoContext = useContext(TodoContext);

    const { addTodo } = todoContext;
    
    
    const [todo, setTodo] = useState({
        name: ''
    });
    
    const onChange = e => {
        setTodo({ ...todo, [e.target.name]: e.target.value });
    };
    
    const onSubmit = e => {
        e.preventDefault();
        addTodo(todo)
    }
    
    
    return (
        <form onSubmit={onSubmit}>
            <input type="text" name="name" placeholder="Todo" onChange={onChange}/>     
            <input type="submit" value="Add Todo"/>
        </form>    
    );
};

export default AddTodoForm;