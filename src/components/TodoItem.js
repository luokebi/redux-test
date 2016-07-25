'use strict';

import React, {Component} from 'react';
import cx from 'classnames';
import PureRenderMixin from 'react-addons-pure-render-mixin';
require('./TodoItem.less');

class TodoItem extends Component {
    constructor(props) {
        super(props);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
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