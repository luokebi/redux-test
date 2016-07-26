"use strict";

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _reactRedux = require("react-redux");

var _redux = require("redux");

var _App = require("./src/containers/App.js");

var _App2 = _interopRequireDefault(_App);

var _todoApp = require("./src/reducers/todoApp.js");

var _todoApp2 = _interopRequireDefault(_todoApp);

var _server = require("react-dom/server");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

require('babel-register')({
   presets: ["es2015", "react"],
   ignore: false
});
'use strict';
var express = require('express');


var app = express();
app.set('view engine', 'ejs');
app.use('/public', express.static(__dirname + '/public'));
app.get('/', function (req, res) {
   var store = (0, _redux.createStore)(_todoApp2.default);

   var appHtml = (0, _server.renderToString)(_react2.default.createElement(
      _reactRedux.Provider,
      { store: store },
      _react2.default.createElement(_App2.default, null)
   ));

   var initialState = store.getState();

   res.render('index.ejs', { appHtml: appHtml, initialState: initialState });
});

app.listen(3000, function () {
   console.log('Server start!');
});
