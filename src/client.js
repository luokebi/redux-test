import React from 'react';
import {render} from 'react-dom';
import {Provider} from 'react-redux';
import App from './containers/App.js';
import {createStore, applyMiddleware} from 'redux';
import todoReducer from './reducers/todoApp';
import thunk from 'redux-thunk';


window.Perf = require('react-addons-perf');
const initialState = window.__INITIAL_STATE__;

let createStoreWithMiddleware = applyMiddleware(thunk)(createStore);
let store = createStoreWithMiddleware(todoReducer, initialState, window.devToolsExtension && window.devToolsExtension());

render(
    <Provider store={store}>
        <App/>
    </Provider>,
    document.getElementById('appWrapper'));