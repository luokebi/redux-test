'use strict';

import React, {Component} from 'react';
import TodoList from './TodoList.js';
require('./App.less');

class App extends Component {
  render() {
    return (
        <div className="App">
            <div className="container">
                <div className="title">
                    Redux Todo
                </div>
                <TodoList/>
            </div>
        </div>
    );
  }
}

export default App;