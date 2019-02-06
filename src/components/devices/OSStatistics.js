import React, { Component } from 'react';
import './OSStatistics.css';
var PieChart = require("react-chartjs").Pie;

export default class OSStatistics extends Component {


    render() {
        const AndroidColors = [
            '#006266ff',
            '#006266dd',
            '#006266bb',
            '#00626699',
            '#00626677',
            '#00626655',
            '#00626633',

            '#EA2027ff',
            '#EA2027dd',
            '#EA2027bb',
            '#EA202799',
            '#EA202777',
            '#EA202755',
            '#EA202733',

            '#006400ff',
            '#006400dd',
            '#006400bb',
            '#00640099',
            '#00640077',
            '#00640055',
            '#00640033',
        ];

        const iOSColors = [
            '#6F1E51ff',
            '#6F1E51dd',
            '#6F1E51bb',
            '#6F1E5199',
            '#6F1E5177',
            '#6F1E5155',
            '#6F1E5133',

            '#1B1464ff',
            '#1B1464dd',
            '#1B1464bb',
            '#1B146499',
            '#1B146477',
            '#1B146455',
            '#1B146433',

            '#f39c12ff',
            '#f39c12dd',
            '#f39c12bb',
            '#f39c1299',
            '#f39c1277',
            '#f39c1255',
            '#f39c1233',
        ];


        const os = this.props.os
        const chartData = []

        const chartOptions = {
            //Boolean - Whether we should show a stroke on each segment
            segmentShowStroke: true,

            //String - The colour of each segment stroke
            segmentStrokeColor: "#fff",

            //Number - The width of each segment stroke
            segmentStrokeWidth: 1,

            //Number - The percentage of the chart that we cut out of the middle
            percentageInnerCutout: 0, // This is 0 for Pie charts

            //Number - Amount of animation steps
            animationSteps: 100,

            //String - Animation easing effect
            animationEasing: "easeOutBounce",

            //Boolean - Whether we animate the rotation of the Doughnut
            animateRotate: true,

            //Boolean - Whether we animate scaling the Doughnut from the centre
            animateScale: false,

            showScale: true,

            // {% raw %}
            //String - A legend template
            legendTemplate: "<ul class=\"<%=name.toLowerCase()%>-legend\"><% for (var i=0; i<segments.length; i++){%><li><span style=\"background-color:<%=segments[i].fillColor%>\"><%if(segments[i].label){%><%=segments[i].label%><%}%></span></li><%}%></ul>",
            // {% endraw %}

            responsive: true,

            // Boolean - whether to maintain the starting aspect ratio or not when responsive, if set to false, will take up entire container
            maintainAspectRatio: false,


        }

        var iOSCounter = 0
        var AndroidCounter = 0
        Object.keys(os).map(key => Object.keys(os[key]).map((k) => {
            const value = os[key][k]
            const colorValue = key === 'Android' ? AndroidColors[(AndroidCounter++ % AndroidColors.length)] : iOSColors[(iOSCounter++ % iOSColors.length)]
            const higlihgtColorValue = key === 'Android' ? AndroidColors[((AndroidCounter + 2) % AndroidColors.length)] : iOSColors[((iOSCounter + 2) % iOSColors.length)]
            chartData.push({ value: value, color: colorValue, label: key + " " + k, highlight: higlihgtColorValue })
        }))

        iOSCounter = 0
        AndroidCounter = 0
        return (
            <div className='OSStatistics'>
                <div className='PieChart'>
                    <PieChart data={chartData} options={chartOptions} />
                </div>
                <div>
                    <table className='Table'>
                        <tbody>
                            {
                                Object.keys(os).map(key => Object.keys(os[key]).map(k => <tr style={{ backgroundColor: key === 'Android' ? AndroidColors[AndroidCounter++] : iOSColors[iOSCounter++], color: 'white' }} key={key + k}>
                                    <td>{key} {k}</td>
                                    <td>{os[key][k]}</td>
                                </tr>))
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        )
    }
}