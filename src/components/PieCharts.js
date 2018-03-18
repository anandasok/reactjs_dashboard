import React, {Component} from 'react';

import {Legend, PieChart} from 'react-easy-chart';
import '../css/PieCharts.css';

class PieCharts extends Component {

    constructor(props) {
        super(props);
        this.state = {
            showTxt: false,
            reportPercentage: null,
            color: '#000000'
        }
    }

    mouseOverHandler = (report, event) => {
        let reportPercentage = report.data.reportPercentage;
        let color = report.data.color;

        this.setState({showTxt: true, color, reportPercentage });
    };

    mouseOutHandler = () => {
        this.setState({showTxt: false});
    };

    render() {
        return (
            <div>

                {
                    this.state.showTxt?
                        <span className="summary-report-txt">
                            <span className="report-percentage-txt"
                                  style={{color: this.state.color}}>{this.state.reportPercentage}</span>
                            <br /><span className="report-avg-txt">Avg</span>
                        </span> : null
                }

                <PieChart
                    data={[
                        { key: 'A', value: 100, color: '#A185FD', reportPercentage: '+15%' },
                        { key: 'B', value: 50, color: '#31A3D7', reportPercentage: '+35%' },
                        { key: 'C', value: 100, color: '#0277DA', reportPercentage: '+20%' },
                        { key: 'D', value: 50, color: '#3D404C', reportPercentage: '+30%' },
                    ]}
                    size={200}
                    innerHoleSize={150}
                    mouseOverHandler={this.mouseOverHandler}
                    mouseOutHandler={this.mouseOutHandler}
                    padding={10}
                />

                <Legend
                    data={pieDataCustom}
                    dataId={'key'}
                    config={config}
                    styles={customStyle}
                />

            </div>
        )
    }
}

const pieDataCustom = [
    {key: 'New Customers', value: 100, color: '#A185FD'},
    {key: 'Sales', value: 200, color: '#31A3D7'},
    {key: 'Refound', value: 50, color: '#0277DA'}
];

const config = [
    {color: '#A185FD'},
    {color: '#31A3D7'},
    {color: '#0277DA'}
];

const customStyle = {
    '.legend .icon': {
        borderRadius: '0px'
    }
};

export default PieCharts;