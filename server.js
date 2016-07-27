'use strict';
var express = require('express');
import React from 'react';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import App from './src/containers/App.js';
import todoReducer from './src/reducers/todoApp.js';
import {renderToString} from 'react-dom/server';
import thunk from 'redux-thunk';
import fetch from 'isomorphic-fetch';
import { fromJS } from 'immutable';


var app = express();
app.set('view engine', 'ejs');
app.use('/public', express.static(__dirname + '/public'));
app.get('/', function (req, res) {

    fetch('http://localhost:3000/public/test.json').then(res => {
        if (res.status >= 400) {
            throw new Error("Bad response from server");
        }
        return res.json();
    }).then(json => {
        console.log(json);
        for (var i in json) {
           json[i] = fromJS(json[i]);
        }
        let createStoreWithMiddleware = applyMiddleware(thunk)(createStore);
        let store = createStoreWithMiddleware(todoReducer, json);

        const appHtml = renderToString(
            <Provider store={store}>
                <App/>
            </Provider>
        );

        const initialState = store.getState();

        res.render('index.ejs', {appHtml: appHtml, initialState: JSON.stringify(initialState)})
    }).catch((err) => {
        console.log(err);
    });

});


app.listen(3000, function () {
    console.log('Server start!');
});