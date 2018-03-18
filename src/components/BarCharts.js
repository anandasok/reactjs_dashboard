import React, {Component} from 'react';

import {BarChart} from 'react-easy-chart';
const $ = require('jquery');

class BarCharts extends Component {

    componentDidMount = () => {
        $('#bar-chart').find('.tick').find('text').attr('fill', '#fff');
    };

    render() {
        return (
            <div>
                <div id="bar-chart">
                    <BarChart
                        axes
                        colorBars
                        height={300}
                        width={300}
                        xTickNumber={7}
                        yTickNumber={7}
                        data={[
                            {x: 'MON', y: 35, color: '#00bcd4'},
                            {x: 'TUE', y: 30, color: '#2196f3'},
                            {x: 'WED', y: 40, color: '#da91e6'},
                            {x: 'THU', y: 20, color: '#00bcd4'},
                            {x: 'FRI', y: 50, color: '#2196f3'},
                            {x: 'SAT', y: 25, color: '#da91e6'},
                            {x: 'SUN', y: 15, color: '#00bcd4'},
                        ]}
                    />
                </div>

            </div>
        )
    }
};

export default BarCharts;