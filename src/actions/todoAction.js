'use strict';

import TODO from '../constants/constants.js';
import fetch from 'isomorphic-fetch';


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

export function changeView(view) {
    return {
        type: TODO.CHANGE_VIEW,
        view: view
    }
}

export function getTodos() {
   return (dispatch, getState) => {
        fetch('/public/test.json').then(res => {
            res.json().then(json => {
                dispatch(showTodos(json));
            })
        })
   };
}

export function showTodos(data) {
    console.log(data);
    return {
        type: TODO.SHOW_TODO,
        data: data
    }
}