'use strict';

import React, {Component} from 'react';
import TodoItem from './TodoItem.js';
require('./TodoList.less');
import {toggleTodo} from '../actions/todoAction.js';

class TodoList extends Component {
    constructor() {
        super();
        this.onToggleTodo = this.onToggleTodo.bind(this);
    }
    onToggleTodo(id) {
        this.props.dispatch(toggleTodo(id));
    }
    render() {
        const { dispatch, todos, view } = this.props;
        return (
            <div className="TodoList">
                {todos.map((t) => {
                    return (
                        <TodoItem key={t.id} todo={t} onToggleTodo={this.onToggleTodo}/>
                    )
                })}
            </div>
        )
    }
}
export default TodoList;