'use strict';
import TODO from '../constants/constants.js';
import { Map, List, fromJS } from 'immutable';

// Test performance
var _todos = [];
// for (var i = 0; i < 1000; i++) {
//     _todos.push({content:"text" + i, completed: false, id: 'sdfsdf' + i});
// }

const initialTodos = fromJS(_todos);

export default function todos(state = initialTodos, action) {
    switch (action.type) {
        case TODO.ADD_TODO:
            return state.push(fromJS({content: action.content, completed: false, id: new Date().getTime()}));
            break;
        case TODO.TOGGLE_TODO:
            return state.update(
                state.findIndex((t) => {
                    return t.get('id') == action.id;
                }), (t) => {
                    return t.set('completed', !t.get('completed'));
                }
            );
            break;
        case TODO.SHOW_TODO:
            return fromJS(action.data.todos);
            break;
        default:
            return state;
    }
}