'use strict';

import TODO from '../constants/constants.js';


export default function view(state = TODO.FILTER_ALL, action) {
    switch (action.type) {
        case TODO.CHANGE_VIEW:
            if (state !== action.view) {
                return action.view;
            } else {
                return state;
            }
            break;
        default:
            return state;
    }
}