'use strict';

import React, {Component} from 'react';
import TodoList from '../components/TodoList.js';
import {connect} from 'react-redux';
import AddTodoBox from '../components/AddTodoBox.js';
import * as todoActions from '../actions/todoAction.js'
import ViewSelect from '../components/ViewSelect.js';
import  { bindActionCreators } from 'redux';
require('./App.less');

class App extends Component {
    constructor() {
        super();
        this.onAddTodo = this.onAddTodo.bind(this);
        this.switchView = this.switchView.bind(this);
    }
    onAddTodo(content) {
        this.props.actions.addTodo(content);
    }
    switchView(view) {
        this.props.actions.changeView(view);
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
                    <ViewSelect switchView={this.switchView} view={this.props.view}/>
                </div>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        todos: state.todos,
        view: state.view
    };
}

function mapDispatchToProps(dispatch) {
    console.log(bindActionCreators(todoActions, dispatch))
   return {
       actions: bindActionCreators(todoActions, dispatch)
   };
}

export default connect(mapStateToProps, mapDispatchToProps)(App);