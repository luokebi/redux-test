'use strict';

import React, {Component} from 'react';
import TodoItem from './TodoItem.js';
require('./TodoList.less');
import TODO from '../constants/constants.js';

class TodoList extends Component {
    constructor(props) {
        super(props);
        this.onToggleTodo = this.onToggleTodo.bind(this);
    }
    shouldComponentUpdate(nextProps, nextState) {
       return nextProps.todos !== this.props.todos || nextProps.view !== this.props.view;
    }
    onToggleTodo(id) {
        this.props.actions.toggleTodo(id);
    }
    render() {
        const { dispatch, todos, view } = this.props;
        var _todos = todos.filter(function(t) {
            console.log(view);
            if (view === TODO.FILTER_COMPLETED) {
                return t.completed === true;
            } else if (view === TODO.FILTER_ACTIVE) {
                return t.completed == false;
            } else {
                return true;
            }
        });
        return (
            <div className="TodoList">
                {_todos.map((t) => {
                    return (
                        <TodoItem key={t.id} todo={t} onToggleTodo={this.onToggleTodo}/>
                    )
                })}
            </div>
        )
    }
}
export default TodoList;