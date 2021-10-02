import { time } from 'echarts';
import { workouts as year1 } from '../../yoe-year1-review/charts/data.js';
import { workouts as year2 } from './data.js';
import { dateTime } from '../../yoe-year1-review/datetime.js';

export const steadyState = () => {
    const grid = [];
    const tooltip = [];
    const legend = [];
    const xAxis = [];
    const yAxis = [];
    const dataset = [];
    const series = [];

    const data = [
        ...year2
            .filter((w) => w.type === 'Endurance')
            .filter((w) => w.apparatus === 'AirDyne' || w.apparatus === 'BikeErg')
            .filter((w) => w.distance !== 0)
            .map((w) => {
                return {
                    date: w.date,
                    distance: w.distance,
                    workTime: w.workTime,
                    speed: w.distance / w.workTime * 3.6,
                    apparatus: w.apparatus,
                };
            }),

        ...year1
            .filter((w) => w.type === 'Endurance')
            .filter((w) => w.apparatus === 'AirDyne' || w.apparatus === 'BikeErg')
            .filter((w) => w.distance !== "0")
            .map((w) => {
                const workTime = w.workTime.split(':').reduce((acc, val) => acc * 60 + Number(val), 0);
                return {
                    date: w.date,
                    distance: Number(w.distance) / 10,
                    workTime,
                    speed: w.distance / workTime * 3.6,
                    apparatus: w.apparatus,
                };
            })
    ];

    grid.push({
        top: 20,
        left: 20,
        right: 20,
        bottom: 30,
        containLabel: true,
    });

    tooltip.push({
        formatter: (params) => {
            const distance = params.data.distance.toLocaleString();
            const time = dateTime.secs2mmss(params.data.workTime, true);

            return `${params.marker} ${params.data.apparatus}<br />${params.data.date}<br />${params.data.speed.toFixed(0)}km/h<br />` +
                `${distance}m / ${time}`;
        }
    });
    legend.push({});

    xAxis.push({
        type: 'time',
        name: 'Date',
        nameLocation: 'middle',
        nameGap: 30,
        min: '2019-09-17',
        max: '2021-09-30',
        axisLabel: {
            formatter: (value) => time.format(value, '{yyyy}-{MM}-{dd}', false),
        },
        gridIndex: grid.length-1,
    });

    yAxis.push({
        type: 'value',
        name: 'Speed (km/h)',
        nameLocation: 'middle',
        nameGap: 30,
        min: 'dataMin',
        max: 'dataMax',
        gridIndex: grid.length-1,
        axisLabel: {
            formatter: (value) => value.toFixed(0),
        },
    });

    [ 'AirDyne', 'BikeErg' ].forEach((apparatus) => {
        dataset.push({
            sourceHeader: false,
            source: data.filter((w) => w.apparatus === apparatus),
        });

        series.push({
            type: 'scatter',
            name: apparatus,
            encode: {
                x: 'date',
                y: 'speed',
            },
            xAxisIndex: xAxis.length-1,
            yAxisIndex: yAxis.length-1,
            datasetIndex: dataset.length-1,
        });
    });

    return {
        animation: false,
        grid,
        tooltip,
        legend,
        xAxis,
        yAxis,
        dataset,
        series,
    };
};
