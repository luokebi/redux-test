'use strict';
import TODO from '../constants/constants.js';

export default function todos(state = [{content:"text", completed: false, id: 'sdfsdf'}], action) {
    switch (action.type) {
        case TODO.ADD_TODO:
            return [...state, {content: action.content, completed: false, id: new Date().getTime()}];
            break;
        case TODO.TOGGLE_TODO:
            return state.map((todo) => {
               if (todo.id === action.id) {
                   return Object.assign({}, todo, {
                       completed: !todo.completed
                   });
               } else {
                   return todo;
               }
            });
            break;
        default:
            return state;
    }
}