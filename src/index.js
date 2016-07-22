import React from 'react';
import {render} from 'react-dom';
import {Provider} from 'react-redux';
import App from './components/App.js';
import {createStore} from 'redux';
import todoReducer from './reducers/todoApp';

let store = createStore(todoReducer);
render(
    <Provider store={store}>
        <App/>
    </Provider>,
    document.getElementById('appWrapper'));