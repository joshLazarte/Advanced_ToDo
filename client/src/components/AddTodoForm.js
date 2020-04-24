import React, { useState, useContext, useEffect } from 'react';
import TodoContext from '../context/todo/todoContext';


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
        addTodo(todo);
        setTodo({name: ''});
    };
    
    const {name} = todo;
    
    
    return (
        <form className="py-3" onSubmit={onSubmit}>
        <div className="form-group">
            <input className="form-control" type="text" name="name" value={name} placeholder="Todo" onChange={onChange}/>     
        </div>    
        <button type="submit" className="btn btn-primary">Add ToDo</button>
        </form>    
    );
};

export default AddTodoForm;