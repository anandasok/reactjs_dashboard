import React, {Component} from 'react';

import {AreaChart} from 'react-easy-chart';
import '../css/AreaCharts.css';
const $ = require('jquery');

class AreaCharts extends Component {

    componentDidMount = () => {
        $('#area-chart').find('.tick').find('text').attr('fill', '#fff');
    };

    getChartFormat = (arr) => {
      let chart = [];
        for (let i=0; i<arr.length; i++) {
            let val = {x: i, y: arr[i]};
            chart.push(val);
        }
        return chart;
    };

    render() {
        let areaChartWidth = 600;
        let windowWidth = $(window).width();

        if (windowWidth < 420) {
            areaChartWidth = 350;
        }

        let dataArray1 = [0, 3, 6, 9, 12, 15, 12, 9, 6, 6, 9, 12, 16, 20, 15, 10, 8, 6, 4, 2, 0];
        let dataArray2 = [0, 7, 14, 21, 30, 7, 14, 21, 14, 25, 20, 15, 10, 5, 10, 15, 20, 15, 10, 5, 0];
        let dataArray3 = [0, 5, 10, 15, 20, 25, 20, 15, 10, 5, 1, 5, 10, 15, 10, 5, 10, 8, 6, 4, 0];

        let firstChartData = this.getChartFormat(dataArray1);
        let secondCharrData = this.getChartFormat(dataArray2);
        let thirdChartData = this.getChartFormat(dataArray3);

        return (
            <div id="area-chart">
                <h5>Monthly Summary</h5>
                <AreaChart
                    axes
                    xTicks = {20}
                    yTicks = {3}
                    grid
                    areaColors = {
                        ['#D2B4DE', '#3779D8', '#5DADE2']
                    }
                    width = {areaChartWidth}
                    height = {270}
                    data = {
                        [firstChartData, secondCharrData, thirdChartData]
                    }
                />
            </div>
        )
    }
}

export default AreaCharts;