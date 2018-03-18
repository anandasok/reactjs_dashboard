import React from 'react';

import CircularProgressbar from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

// Custom Components
import GradientSVG from './GradientSVG';
import '../css/Products.css';

const Products = () => {

    return (
        <div id="product">
            <h5>Products</h5>
            <span>
                <span className="brand-name">HTC</span>
                <CircularProgressbar className = "bar1" percentage={80} initialAnimation counterClockwise
                                     strokeWidth = {10} textForPercentage = {(pct) => "450"}/>
            </span>

            <span>
                <span className="brand-name">Nokia</span>
                <CircularProgressbar className = "bar2" percentage={60} initialAnimation counterClockwise
                                     strokeWidth = {10} textForPercentage = {(pct) => "657"}/>
            </span>

            <span>
                <span className="brand-name">LG</span>
                <CircularProgressbar className = "bar3" percentage={80} initialAnimation counterClockwise
                                     strokeWidth = {10} textForPercentage = {(pct) => "1.2k"}/>
            </span>

            <span>
                <span className="brand-name">Samsung</span>
                <CircularProgressbar className = "bar4" percentage={60} initialAnimation counterClockwise
                                     strokeWidth = {10} textForPercentage = {(pct) => "1.8k"}/>
            </span>

            <span>
                <span className="brand-name">Apple</span>
                <CircularProgressbar className = "bar5" percentage={70} initialAnimation counterClockwise
                                     strokeWidth = {10} textForPercentage = {(pct) => "2.4k"}/>
            </span>

            <GradientSVG startColor="#D4E6F1" endColor="#5DADE2" idCSS="bar1" rotation="90" />
            <GradientSVG startColor="#7FB3D5" endColor="#3498DB" idCSS="bar2" rotation="90" />
            <GradientSVG startColor="#F2F3F4" endColor="#C39BD3" idCSS="bar3" rotation="90" />
            <GradientSVG startColor="#958CB6" endColor="#3817AF" idCSS="bar4" rotation="90" />
            <GradientSVG startColor="#7FB3D5" endColor="#3498DB" idCSS="bar5" rotation="90" />
        </div>
    )
};

export default Products;