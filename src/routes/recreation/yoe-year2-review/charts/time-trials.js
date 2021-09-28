
'use strict';

import { time } from 'echarts';

import { workouts } from './data.js';
import { strokedata } from './strokedata';

const caloriesCompare = (o) => {
    return {
        animation: false,
        dataset: {
            source: o.dataset.source,
        },

        xAxis: {
            type: 'time',
            name: 'Date',
            nameGap: 30,
            nameLocation: 'middle',
            min: '2020-09-17',
            max: '2021-09-29',
            axisLabel: {
                formatter: (value) => time.format(value, '{yyyy}-{MM}-{dd}', false),
            },
            ...o.xAxis,
        },

        yAxis: {
            type: 'value',
            name: 'Calories',
            nameLocation: 'middle',
            nameGap: 40,
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
            top: '10%',
            type: 'scroll',
            ...o.legend,
        },
    };
};

const rower = () => {
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

const strokes = (ids, options = {}) => {
    const legend = [];
    const tooltip = [];
    const xAxis = [];
    const yAxis = [];
    const series = [];
    const dataset = [];
    const dataZoom = [];

    tooltip.push({
        trigger: 'axis',
        axisPointer: {
            type: 'cross',
            snap: true,
        },
    });

    dataZoom.push({
        type: 'slider',
    });

    xAxis.push({
        type: 'value',
        name: 'Time',
        nameGap: 50,
        nameLocation: 'middle',
        axisLabel: {
            formatter: (value) => value,
            //formatter: (value) => time.format(value, '{mm}:{ss}', false),
        },
    });

    yAxis.push({
        type: 'value',
        name: 'Pace',
        nameGap: 45,
        nameLocation: 'middle',
        inverse: true,
        min: 'dataMin',
        max: 'dataMax',
    });

    ids.forEach((id, i) => {
        dataset.push({
            sourceHeader: false,
            source: strokedata.get(id),
        });

        series.push({
            type: 'line',
            encode: {
                x: 't',
                y: 'p',
            },
            connectNulls: true,
            name: `Test ${i+1} pace`,
            datasetIndex: i,
            showSymbol: false,
            animation: false,
            sampling: 'average',
            large: true,
        });
    });

    console.log(dataset);

    legend.push({
        top: '10%',
        type: 'scroll',
    });

    return {
        animation: false,
        legend,
        dataZoom,
        tooltip,
        xAxis,
        yAxis,
        series,
        dataset,
        ...options
    }
};

export default {
    rower,
    strokes,
}
