import React from 'react';
import {Link} from 'react-router-dom';

function Todo({todoName, todoDescription, id, deleteTodo}){
    return(
        <div>
            <div>{todoName}</div>
            <Link to={`/todos/${id}/edit`}>Edit</Link>
            <button onClick={()=>deleteTodo(id)}>x</button>
        </div>
    ); 
}

export default Todo;
