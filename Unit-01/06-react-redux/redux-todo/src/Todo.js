import React from 'react';
import { Link } from 'react-router-dom';

const Todo = ({ task, removeTodo }) => (
    <li>
        {task}
        <button onClick={removeTodo}>x</button>
    </li>
);

export default Todo;
