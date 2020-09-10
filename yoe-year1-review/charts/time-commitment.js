'use strict';

import { dateTime } from '/yoe-year1-review/js/utils/datetime.js';
import {
    calcMean,
    calcStandardDeviation,
    calcStandardNormalDistribution 
} from '/yoe-year1-review/charts/repeated.js';

const summary = (workouts, filter = {}) => {
    const title = [];
    const series = [];
    const dataset = [];
    const xAxis = [];
    const yAxis = [];
    const legend = [];

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
            formatter: (value) => echarts.format.formatTime('yyyy-MM-dd', value),
        },
    });

    yAxis.push({
        max: 3600,
        //max: data.reduce((acc, val) => val.workTime + val.restTime > acc ? val.workTime + val.restTime : acc, 0),
        type: 'value',
        name: 'Workout duration',
        nameLocation: 'middle',
        nameGap: 50,
        axisLabel: {
            formatter: (value, index) => {
                return dateTime.secs2mmss(value);
            },
        },
    });

    legend.push({
        top: '5%',
    });

    dataset.push({
        source: workouts
            .filter((w) => filter.type === undefined || filter.type == w.type),
    });

    [ 'workTime', 'restTime' ].forEach((metric, i) => {
        series.push({
            type: 'bar',
            name: labels[metric],
            stack: 'single',
            tooltip: {
                formatter: (params, ticket, callback) => {
                    return dateTime.secs2mmss(params.value.workTime + params.value.restTime);
                },
            },
            encode: {
                x: 'date',
                y: metric,
            },
            animation: false,
            //barMaxWidth: 2,
            barCategoryGap: -1,  // XXX hmm, figure this out
        });
    });

    return {
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
const sdByType = (workouts) => {
    const xAxis = [];
    const yAxis = [];
    const series = [];
    const dataset = [];
    const legend = [];

    const data = [];

    legend.push({
        top: '10%',
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
        w.workoutTime.push(workout.workTime + workout.restTime);
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
            symbolSize: 2,
        });
    });

    return {
        xAxis,
        yAxis,
        series,
        dataset,
        legend,
    };
};

export const timeCommitment = {
    summary,
    sdByType,
}
