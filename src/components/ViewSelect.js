'use strict';

import React, { Component } from 'react';
import TODO from '../constants/constants.js';
import cx from 'classnames';
import PureRenderMixin from 'react-addons-pure-render-mixin';

require('./ViewSelect.less');

class ViewSelect extends Component{
    constructor(props) {
        super(props);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
        this.switchView = this.switchView.bind(this);
    }

    switchView(view) {
        this.props.switchView(view);
    }

    render() {
       var clsAll = cx('viewItem', this.props.view === TODO.FILTER_ALL  ? 'current': '');
        var clsComp = cx('viewItem', this.props.view === TODO.FILTER_COMPLETED ? 'current':'');
        var clsAc = cx('viewItem', this.props.view === TODO.FILTER_ACTIVE ? 'current':'');
       return (
         <div className="ViewSelect">
             Show:
             <a className={clsAll} onClick={this.switchView.bind(this, TODO.FILTER_ALL)}>All</a>
             <a className={clsComp} onClick={this.switchView.bind(this, TODO.FILTER_COMPLETED)}>Completed</a>
             <a className={clsAc} onClick={this.switchView.bind(this, TODO.FILTER_ACTIVE)}>Active</a>
         </div>
       );
    }
}

export default ViewSelect;