export const ADD_TODO = 'ADD_TODO';
export const UPDATE_TODO = 'UPDATE_TODO';
export const DELETE_TODO = 'DELETE_TODO';

export function addTodo(task) {
    return {
        type: ADD_TODO,
        task,
    };
}

export function deleteTodo(id) {
    return {
        type: DELETE_TODO,
        id,
    };
}
