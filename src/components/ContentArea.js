import React, {Component} from 'react';

import Dashboard from './Dashboard';

import '../css/Dashboard.css'

class ContentArea extends Component {
    render() {
        return (
            <div id="content-area">
                <Dashboard />
            </div>
        )
    }
}

export default ContentArea;