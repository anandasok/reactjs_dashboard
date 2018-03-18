import React, {Component} from 'react';

import {LineChart} from 'react-easy-chart';
import '../css/LineCharts.css';
const $ = require('jquery');

class LineCharts extends Component {

    componentDidMount = () => {
        $('#line-chart').find('.tick').find('text').attr('fill', '#fff');
    };

    render() {
        return (
            <div id="line-chart">
                <LineChart
                    axes
                    grid
                    yTicks={3}
                    lineColors={['#3838e0']}
                    width={350}
                    height={200}
                    data={[
                        [
                            { x: 0, y: 0 },
                            { x: 0.4, y: 2 },
                            { x: 0.8, y: 1 },
                            { x: 1.2, y: 3 },
                            { x: 1.4, y: 2 },
                            { x: 1.6, y: 4 },
                            { x: 1.8, y: 7 },
                            { x: 2, y: 10 }
                        ]
                    ]}
                />
                <div className="btm-txt-line-chart"><span style={{fontWeight: 'bold'}}>$27.856,</span> April 2014</div>

            </div>
        )
    }
}

export default LineCharts;