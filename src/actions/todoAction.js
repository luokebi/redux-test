'use strict';

import TODO from '../constants/constants.js';


export function addTodo(text) {
    return {
        type: TODO.ADD_TODO,
        content: text
    }
}


export function toggleTodo(id) {
   return {
       type: TODO.TOGGLE_TODO,
       id: id
   } 
}