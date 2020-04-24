import React from 'react';
import './App.css';

import ToDoList from './components/ToDoList';
import AddTodoForm from './components/AddTodoForm';

import TodoState from './context/todo/TodoState';

function App() {
  return (
    <TodoState>
        <div className="container p-2">
         <h1 className="text-center">Advanced ToDo App!</h1>
         <AddTodoForm/>
         <ToDoList/>
        </div>
    </TodoState>
  );
}

export default App;
