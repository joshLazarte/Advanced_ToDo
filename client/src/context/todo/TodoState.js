import React, { useReducer } from 'react';
import axios from 'axios';
import TodoContext from './todoContext';
import todoReducer from './todoReducer';
import {
  GET_TODOS,
  ADD_TODO,
  TODO_ERROR
}
from '../types';


const TodoState = props => {
  const initialState = {
    todos: []
  };
  
  const [state, dispatch] = useReducer(todoReducer, initialState);
  
  
  const getTodos = async() => {
    try {
      const res = await axios.get(`${process.env.REACT_APP_API_URL}/api/todo`);

      dispatch({ type: GET_TODOS, payload: res.data });
    }
    catch (err) {
      dispatch({ type: TODO_ERROR, payload: 'You fucked up bro'});
    }
  };
  
  
  const addTodo = async todo => {
    const config = {
      headers: {
        'Content-Type': 'application/json' 
      }
    };

    try {
      const res = await axios.post(`${process.env.REACT_APP_API_URL}/api/todo`, todo, config);
      dispatch({ type: ADD_TODO, payload: res.data });
    }
    catch (err) {
      dispatch({ type: TODO_ERROR, payload: 'You fucked up bro' });
    }
  };
  
  
  
  return (
    <TodoContext.Provider value={{ 
      todos: state.todos, 
      getTodos,
      addTodo
    }}>
      {props.children}
    </TodoContext.Provider>
  );
  
};

export default TodoState;