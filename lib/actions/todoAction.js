'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.addTodo = addTodo;
exports.toggleTodo = toggleTodo;
exports.changeView = changeView;
exports.getTodos = getTodos;
exports.showTodos = showTodos;

var _constants = require('../constants/constants.js');

var _constants2 = _interopRequireDefault(_constants);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function addTodo(text) {
    return {
        type: _constants2.default.ADD_TODO,
        content: text
    };
}

function toggleTodo(id) {
    return {
        type: _constants2.default.TOGGLE_TODO,
        id: id
    };
}

function changeView(view) {
    return {
        type: _constants2.default.CHANGE_VIEW,
        view: view
    };
}

function getTodos() {
    return function (dispatch, getState) {
        fetch('/public/test.json').then(function (res) {
            res.json().then(function (json) {
                dispatch(showTodos(json));
            });
        });
    };
}

function showTodos(data) {
    console.log(data);
    return {
        type: _constants2.default.SHOW_TODO,
        data: data
    };
}