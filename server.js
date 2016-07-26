'use strict';
var express = require('express');
import React from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import App from './src/containers/App.js';
import todoReducer from './src/reducers/todoApp.js';
import { renderToString } from 'react-dom/server';
import thunk from 'redux-thunk';


var app = express();
app.set('view engine', 'ejs');
app.use('/public', express.static(__dirname + '/public'));
app.get('/', function (req, res) {

    let createStoreWithMiddleware = applyMiddleware(thunk)(createStore);
    let store = createStoreWithMiddleware(todoReducer);

   const appHtml = renderToString(
       <Provider store={store}>
         <App/>
       </Provider>
   );

    const initialState = store.getState();

   res.render('index.ejs',{appHtml: appHtml, initialState: JSON.stringify(initialState)} )
});




app.listen(3000, function() {
   console.log('Server start!');
});