'use strict';

import { dateTime } from '../datetime.js';
import { workouts } from './data.js';
import { time } from 'npm:echarts';

const apparatus = () => {
    const title = [];
    const series = [];
    const dataset = [];
    const xAxis = [];
    const yAxis = [];
    const legend = [];
    const grid = [];

    grid.push({
        top: 50,
        left: 60,
        right: 30,
        bottom: 60,
    });

    const apparatus = [];
    const data = workouts.map((w) => {
        if (!apparatus.includes(w.apparatus)) {
            apparatus.push(w.apparatus);
        }

        const [ wtmins, wtsecs ] = w.workTime.split(':').map((i) => +i);
        const [ rtmins, rtsecs ] = w.restTime.split(':').map((i) => +i);

        return {
            date: w.date,
            workoutTime: (wtmins * 60 + wtsecs) + (rtmins * 60 + rtsecs),
            apparatus: w.apparatus
        };
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
        type: 'value',
        name: 'Workout duration',
        nameLocation: 'middle',
        nameGap: 50,
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

    apparatus.forEach((a, i) => {
        dataset.push({
            source: data.filter((d) => d.apparatus == a),
        });

        series.push({
            type: 'bar',
            name: a,
            //stack: 'single',
            tooltip: {
                formatter: (params) => {
                    return dateTime.secs2mmss(params.value.workoutTime);
                },
            },
            encode: {
                x: 'date',
                y: 'workoutTime',
            },
            animation: false,
            //barMaxWidth: 2,
            //barCategoryGap: -1,  // XXX hmm, figure this out

            datasetIndex: i,
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
                    return acc + `${val.marker} ${val.value.apparatus}`;
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

export default {
    apparatus,
}
