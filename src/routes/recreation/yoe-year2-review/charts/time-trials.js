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
            max: '2021-09-29',
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

export default {
    rower,
};
