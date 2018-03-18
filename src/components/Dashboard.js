import React, {Component} from 'react';

import AreaCharts from './AreaCharts';
import PieCharts from './PieCharts';
import Orders from './Orders';
import Products from './Products';
import BarCharts from './BarCharts';

class Dashboard extends Component {

    render() {
        return (
            <div id="dashboard">
                <div className="container-fluid">

                    <div className="row">
                        <div className="col-md-8">
                            <AreaCharts />
                        </div>

                        <div className="col-md-4">
                            <PieCharts />
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-md-8">
                            <Orders />
                        </div>

                        <div className="col-md-4">
                            <BarCharts />
                        </div>
                    </div>
                    <br /><br />

                    <div className="row">
                        <div className="col-md-8">
                            <Products />
                        </div>

                        <div className="col-md-4">

                        </div>
                    </div>

                </div>
            </div>
        )
    }

}

export default Dashboard;