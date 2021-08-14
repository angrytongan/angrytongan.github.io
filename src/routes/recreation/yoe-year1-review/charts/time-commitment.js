'use strict';

import { dateTime } from '../datetime.js';
import {
    calcMean,
    calcStandardDeviation,
    calcStandardNormalDistribution 
} from './repeated.js';
import { workouts } from './data.js';
import { time } from 'echarts';

const summary = (filter = {}) => {
    const title = [];
    const series = [];
    const dataset = [];
    const xAxis = [];
    const yAxis = [];
    const legend = [];
    const grid = [];

    grid.push({
        top: 30,
        left: 60,
        right: 30,
        bottom: 45,
    });

    const labels = {
        workTime: 'Total work time',
        restTime: 'Total rest time',
    };

    title.push({
        text: filter.type || '',
        left: 'middle',
        textAlign: 'center',
    });

    xAxis.push({
        type: 'time',
        name: 'Date',
        nameGap: 40,
        nameLocation: 'middle',
        data: workouts.map((d) => d.date).sort(),
        min: '2019-09-16',
        max: '2020-09-13',
        axisLabel: {
            formatter: (value) => time.format(value, '{yyyy}-{MM}-{dd}', false),
        },
    });

    yAxis.push({
        max: 3600,
        //max: data.reduce((acc, val) => val.workTime + val.restTime > acc ? val.workTime + val.restTime : acc, 0),
        type: 'value',
        name: 'Workout duration',
        nameLocation: 'middle',
        nameGap: 40,
        show: true,
        axisLabel: {
            formatter: (value) => {
                return dateTime.secs2mmss(value);
            },
        },
    });

    legend.push({
        top: '5%',
        type: 'scroll',
    });

    dataset.push({
        source: workouts.map((w) => {
            const [ wtmins, wtsecs ] = w.workTime.split(':').map((i) => +i);
            const [ rtmins, rtsecs ] = w.restTime.split(':').map((i) => +i);

            return {
                date: w.date,
                workTime: wtmins * 60 + wtsecs,
                restTime: rtmins * 60 + rtsecs,
            }
        }),
    });

    [ 'workTime', 'restTime' ].forEach((metric) => {
        series.push({
            type: 'bar',
            name: labels[metric],
            stack: 'single',
            /*
            tooltip: {
                formatter: (params) => {
                    console.log(params.value);
                    return dateTime.secs2mmss(params.value.workTime + params.value.restTime);
                },
            },
            */
            encode: {
                x: 'date',
                y: metric,
            },
            animation: false,
            //barMaxWidth: 2,
            barCategoryGap: -1,  // XXX hmm, figure this out
            gridIndex: 0,
        });
    });

    return {
        animation: false,
        title,
        tooltip: {
            trigger: 'axis',
            formatter: (params) => {
                return params[0].value.date + '<br />' + params.reduce((acc, val) => {
                    const v = val.value[val.dimensionNames[val.encode.y[0]]];

                    if (v == 0) {
                        return acc;
                    }

                    return acc + `${val.marker} ${val.seriesName}: ${dateTime.secs2mmss(v)}<br />`;
                }, '');
            },
        },
        legend,
        series,
        dataset,
        xAxis,
        yAxis,
        grid,
    };
};

/*
 * [
 *  { type: 'Interval', workoutTime: [ 123, 124, 125... ], },
 *  { type: 'FLUX', workoutTime: [ 123, 124, 125... ], },
 *  { type: 'Polarisation', workoutTime [ 123, 125, 127... ], },
 * ]
 *
 */
const sdByType = () => {
    const xAxis = [];
    const yAxis = [];
    const series = [];
    const dataset = [];
    const legend = [];
    const grid = [];
    const data = [];

    grid.push({
        top: 45,
        right: 30,
        left: 30,
        bottom: 50,
    });

    legend.push({
        top: '10%',
        type: 'scroll',
    });

    workouts.forEach((workout) => {
        let w = data.find((d) => d.type == workout.type);
        if (w == undefined) {
            data.push({
                type: workout.type,
                workoutTime: [],
            });
            w = data[data.length-1];
        }
        const [ wtmins, wtsecs ] = workout.workTime.split(':').map((i) => +i);
        const [ rtmins, rtsecs ] = workout.restTime.split(':').map((i) => +i);

        w.workoutTime.push((wtmins * 60 + wtsecs) + (rtmins * 60 + rtsecs));
    });
    data.sort((a, b) => a.type < b.type ? -1 : a.type > b.type ? 1 : 0);

    xAxis.push({
        name: 'Workout duration (h:mm:ss)',
        nameGap: 30,
        nameLocation: 'middle',
        min: 'dataMin',
        max: 'dataMax',
        axisLabel: {
            formatter: (val) => {
                return dateTime.secs2mmss(val, false);
            },
        },
        axisPointer: {
            show: true,
            label: {
                formatter: (params) => dateTime.secs2mmss(params.value),
            },
        },
        splitNumber: 3,
    });

    yAxis.push({
        show: false,
        min: 'dataMin',
        max: 'dataMax',
    });

    data.forEach((d, i) => {
        const mean = calcMean(d.workoutTime);
        const sd = calcStandardDeviation(d.workoutTime, mean);

        dataset.push({
            source: calcStandardNormalDistribution(mean, sd),
        });

        series.push({
            type: 'line',
            datasetIndex: i,
            encode: {
                x: 'x',
                y: 'y',
            },
            name: d.type,
            smooth: true,
            showSymbol: false,
            gridIndex: 0,
        });
    });

    return {
        animation: false,
        grid,
        xAxis,
        yAxis,
        series,
        dataset,
        legend,
    };
};

export default {
    summary,
    sdByType,
}
