'use strict';

import React, {Component} from 'react';
import cx from 'classnames';
require('./TodoItem.less');

class TodoItem extends Component {
    constructor() {
        super();
    }
    render() {
        const {todo} = this.props;
        let cls = cx('TodoItem', todo.completed ? 'completed': '');
        return (
            <div className={cls}>
                <div className="content">
                    {todo.content}
                </div>
                <div className="check-icon" onClick={this.props.onToggleTodo.bind(this, todo.id)}></div>
            </div>
        )
    }
}

export default TodoItem;