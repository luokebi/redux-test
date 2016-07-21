'use strict';

import React, {Component} from 'react';
require('./App.less');

class App extends Component {
  render() {
    return (
        <div className="App">
          <div className="text">
            Hello Redux!
          </div>
        </div>
    );
  }
}

export default App;