'use strict';

import React, {Component} from 'react';
import TodoList from './TodoList.js';
import {connect} from 'react-redux';
import AddTodoBox from './AddTodoBox.js';
import {addTodo} from '../actions/todoAction.js'
require('./App.less');

class App extends Component {
    constructor() {
        super();
        this.onAddTodo = this.onAddTodo.bind(this);
    }
    onAddTodo(content) {
        const {dispatch } = this.props;
        dispatch(addTodo(content));
    }
    render() {
        console.log(this.props);
        return (
            <div className="App">
                <div className="container">
                    <div className="title">
                        Redux Todo
                    </div>
                   <AddTodoBox onAddTodo={this.onAddTodo}/>
                    <TodoList {...this.props}/>
                </div>
            </div>
        );
    }
}

export default connect(state => state)(App);