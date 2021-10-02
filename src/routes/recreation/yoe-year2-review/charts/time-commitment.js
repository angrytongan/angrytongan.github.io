import { time } from 'echarts';

import { workouts } from './data.js';
import { strokedata } from './strokedata';
import { dateTime } from '../../yoe-year1-review/datetime.js';

export const timeCommitment = () => {
    const tooltip = [];
    const legend = [];
    const xAxis = [];
    const yAxis = [];
    const series = [];
    const dataset = [];
    const grid = [];

    tooltip.push({
        trigger: 'axis',
        formatter: (params) => {
            if (params.length > 0) {
                return `${params[0].data.date}<br />` + dateTime.secs2mmss(params.reduce((acc, val) => {
                    return acc + val.data[val.seriesName];
                }, 0));
            }

            return '';
        },

    });

    legend.push({});

    grid.push({
        top: 20,
        left: 20,
        right: 20,
        bottom: 0,
    });

    xAxis.push({
        type: 'time',
        name: 'Date',
        nameGap: 30,
        nameLocation: 'middle',
        axisLabel: {
            formatter: (value) => time.format(value, '{yyyy}-{MM}-{dd}', false),
        },
        axisLine: {
            show: true,
        },
        axisTick: {
            show: true,
        },
        gridIndex: 0,
    });

    yAxis.push({
        type: 'time',
        name: 'Duration',
        axisLabel: {
            formatter: (value) => dateTime.secs2mmss(value, true),
        },
        axisLine: {
            show: true,
        },
        axisTick: {
            show: true,
        },
        gridIndex: 0,
    });

    dataset.push({
        sourceHeader: false,
        source: workouts,
    });

    [ 'workTime', 'restTime' ].forEach((w) => {
        series.push({
            type: 'bar',
            name: w,
            stack: 'totalTime',
            encode: {
                x: 'date',
                y: w
            },
            datasetIndex: dataset.length-1,
        });
    });

    return {
        animation: false,
        tooltip,
        legend,
        xAxis,
        yAxis,
        series,
        dataset,
    };
};
