'use strict';

import { time } from 'echarts';

import { workouts } from './data.js';
import { strokedata } from './strokedata';
import { dateTime } from '../../yoe-year1-review/datetime.js';

const caloriesCompare = (o) => {
    return {
        animation: false,
        dataset: {
            source: o.dataset.source,
        },

        grid: {
            top: 30,
            bottom: 10,
            left: 10,
            right: 20,
            containLabel: true,
        },

        xAxis: {
            type: 'time',
            name: 'Date',
            nameGap: 30,
            nameLocation: 'middle',
            min: '2020-09-17',
            max: '2021-09-30',
            axisLabel: {
                formatter: (value) => time.format(value, '{yyyy}-{MM}-{dd}', false),
            },
            gridIndex: 0,
            ...o.xAxis,
        },

        yAxis: {
            type: 'value',
            name: 'Calories',
            nameLocation: 'middle',
            nameGap: 40,
            gridIndex: 0,
            ...o.yAxis,
        },

        series: {
            type: 'scatter',
            animation: false,
            connectNulls: true,
            label: {
                show: true,
            },
            symbolSize: 24,
            name: 'Calories',
            encode: {
                x: 'date',
                y: 'calories',
            },
            ...o.series,
        },

        tooltip: {
            trigger: 'axis',
            formatter: (params) => {
                return params[0].value.date + '<br />' + params.reduce((acc, val) => {
                    let out = `${val.marker} ${(val.value.distance / 1000).toFixed(2)}km`;

                    if (val.value.pace) {
                        out += ` / ${val.value.pace}`;
                    }

                    return acc + out;
                }, '');
            },
            ...o.tooltip,
        },

        legend: {
            type: 'scroll',
            ...o.legend,
        },
    };
};

export const timeTrials = () => {
    return caloriesCompare({
        dataset: {
            source: workouts.filter((w) => w.apparatus == 'Rower' &&
                w.workTime === 600 &&
                w.type === 'Time Trial'),
        },
        yAxis: {
            min: 200,
            max: 210,
        },
    });
};

export const ttConversionChart = () => {
    const legend = [];
    const tooltip = [];
    const xAxis = [];
    const yAxis = [];
    const dataset = [];
    const series = [];
    const grid = [];

    const data = [
        { tt: 10, c: 600, p: 158.9, w: 87 },
        { tt: 11, c: 660, p: 149.5, w: 105 },
        { tt: 12, c: 720, p: 142.0, w: 122 },
        { tt: 13, c: 780, p: 135.8, w: 140 },
        { tt: 14, c: 840, p: 130.6, w: 157 },
        { tt: 15, c: 900, p: 126.1, w: 175 },
        { tt: 16, c: 960, p: 122.2, w: 192 },
        { tt: 17, c: 1020, p: 118.7, w: 209 },
        { tt: 18, c: 1080, p: 115.5, w: 227 },
        { tt: 19, c: 1140, p: 112.7, w: 245 },
        { tt: 20, c: 1200, p: 110.2, w: 262 },
        { tt: 21, c: 1260, p: 107.8, w: 279 },
        { tt: 22, c: 1320, p: 105.7, w: 296 },
        { tt: 23, c: 1380, p: 103.7, w: 314 },
        { tt: 24, c: 1440, p: 101.8, w: 332 },
        { tt: 25, c: 1500, p: 100.1, w: 349 },
        { tt: 26, c: 1560, p: 98.5, w: 366 },
        { tt: 27, c: 1620, p: 96.9, w: 385 },   // PM5: c == 1623
        { tt: 28, c: 1680, p: 95.5, w: 402 },   // PM5: c == 1682
        { tt: 29, c: 1740, p: 94.2, w: 419 },   // PM5: c == 1741
        { tt: 30, c: 1800, p: 92.9, w: 437 },   // PM5: c == 1802
    ];

    const seriesMap = new Map([
        [ 'p', 'Pace' ],
        [ 'w', 'Watts' ],
        [ 'c', 'Cal/hour' ],
    ]);

    grid.push({
        top: 30,
        left: 20,
        right: 40,
        bottom: 20,
        containLabel: true,
    });

    legend.push({});
    tooltip.push({
        trigger: 'axis',
        formatter: (params) => {
            return `TT: ${params[0].axisValue}<br />` + params.reduce((acc, val) => {
                const metric = val.dimensionNames[val.encode.y[0]];
                const value = metric === 'p' ? dateTime.secs2mmss(val.data[metric], true) : val.data[metric].toLocaleString();
                return acc + `${val.marker} ${val.seriesName}: ${value}<br />`;
            }, '');
        },
    });

    dataset.push({
        sourceHeader: false,
        source: data,
    });

    xAxis.push({
        type: 'value',
        name: 'Time Trial pace per minute (TT)',
        nameLocation: 'middle',
        nameGap: 25,
        gridIndex: grid.length-1,
        min: 'dataMin',
        max: 'dataMax',
    });

    seriesMap.forEach((v, k) => {
        yAxis.push({
            type: 'value',
            name: v,
            position: yAxis.length === 0 ? 'left' : 'right',
            offset: yAxis.length == 0 ? 0 : (yAxis.length-1) * 45 + 15,
            min: 'dataMin',
            max: 'dataMax',
            splitLine: {
                show: false,
            },
            axisLabel: {
                formatter: (value) => {
                    return k == 'p' ?
                        dateTime.secs2mmss(value, true) : value;
                }
            },
        });

        series.push({
            type: k == 'c' ? 'bar' : 'line',
            name: v,
            encode: {
                x: 'tt',
                y: k,
            },
            symbolSize: 8,
            xAxisIndex: xAxis.length-1,
            yAxisIndex: yAxis.length-1,
            datasetIndex: dataset.length-1,
        });
    });

    return {
        animation: false,
        grid,
        legend,
        tooltip,
        xAxis,
        yAxis,
        dataset,
        series,
    };
};
