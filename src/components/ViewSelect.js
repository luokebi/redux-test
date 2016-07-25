'use strict';

import React, { Component } from 'react';
import TODO from '../constants/constants.js';
import cx from 'classnames';

require('./ViewSelect.less');

class ViewSelect extends Component{
    constructor() {
        super();
        this.switchView = this.switchView.bind(this);
    }

    switchView(view) {
        this.props.switchView(view);
    }

    render() {
       var clsAll = cx('viewItem', this.props.view === TODO.FILTER_ALL  ? 'current': '');
        var clsComp = cx('viewItem', this.props.view === TODO.FILTER_COMPLETED ? 'current':'');
       return (
         <div className="ViewSelect">
             View:
             <a className={clsAll} onClick={this.switchView.bind(this, TODO.FILTER_ALL)}>All</a>
             <a className={clsComp} onClick={this.switchView.bind(this, TODO.FILTER_COMPLETED)}>Completed</a>
         </div>
       );
    }
}

export default ViewSelect;