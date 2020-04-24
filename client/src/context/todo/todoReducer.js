import {
  GET_TODOS,
  ADD_TODO,
  TODO_ERROR
}
from '../types';


export default (state, action) => {
    switch (action.type) {
        case GET_TODOS:
            return {
                ...state,
                todos: action.payload,
                loading: false
            };
        case ADD_TODO:
            return {
                ...state,
                todos: [...state.todos, action.payload],
                loading: false
            };
        default:
            return state;
    }
};