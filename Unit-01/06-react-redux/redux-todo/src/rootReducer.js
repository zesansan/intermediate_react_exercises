import { ADD_TODO, DELETE_TODO } from './actions';

const DEFAULT_STATE = {
    todos: [],
    id: 0,
};

export default function rootReducer(state = DEFAULT_STATE, action) {
    switch (action.type) {
        case ADD_TODO:
            let newState = { ...state };
            newState.id++;
            return {
                ...newState,
                todos: [...newState.todos, { task: action.task, id: newState.id }],
            };
        case DELETE_TODO:
            let todos = state.todos.filter(val => val.id !== action.id);
            return { ...state, todos };
        default:
            return state;
    }
}
