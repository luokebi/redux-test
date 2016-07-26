'use strict';
import TODO from '../constants/constants.js';
import { Map, List, fromJS } from 'immutable';

const initialTodos = fromJS([{content:"text", completed: false, id: 'sdfsdf'}]);

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
        default:
            return state;
    }
}