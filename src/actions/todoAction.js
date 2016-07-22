'use strict';

import TODO from '../constants/constants.js';


export function addTodo(text) {
    return {
        type: TODO.ADD_TODO,
        content: text
    }
}