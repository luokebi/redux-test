'use strict';

import React, { Component } from 'react';
require('./AddTodoBox.less');
import PureRenderMixin from 'react-addons-pure-render-mixin';

class AddTodoBox extends Component{
    constructor(props) {
        super(props);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
        this.onAddTodo = this.onAddTodo.bind(this);
        this.handleKeyDown = this.handleKeyDown.bind(this);
    }
    onAddTodo() {
        var content = this.refs.todoInput.value;
        if (!content) {
            return;
        }
        this.props.onAddTodo(content);
        this.refs.todoInput.value = '';
    }

    handleKeyDown(e) {
        if (e.keyCode == '13') {
            this.onAddTodo();
        }
    }
    render() {
       return (
          <div className="AddTodoBox">
              <input type="text" ref="todoInput" onKeyDown={this.handleKeyDown}/>
              <div className="btn" onClick={this.onAddTodo}>Add</div>
          </div>
       );
    }
}

export default AddTodoBox;