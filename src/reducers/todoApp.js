'use strict';

import {TODO} from '../constants/constants.js';
import {combineReducers} from 'redux';
import todos from './todos.js';
import view from './view.js';

export default combineReducers({
    todos,
    view
});

