import React, { Component } from 'react';
import Todo from './Todo';

function TodoList ({todos, deleteTodo}){
    const noTodos = <p>No todos...</p>;
    
    const todosList =(
        <div>
            {todos.map((todo, idx)=>(
                <Todo 
                todoName={todo.todoName} 
                id={todo.id} 
                key={idx}
                deleteTodo={deleteTodo}
                />
            ))}
        </div>    
    );
    return (
        <div>
            {todos.length === 0 ? noTodos : todosList}   
        </div>
    );
}


export default TodoList;
