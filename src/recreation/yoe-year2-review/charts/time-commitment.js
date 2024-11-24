import { time } from 'npm:echarts';

import { workouts } from './data.js';
import { dateTime } from '../../yoe-year1-review/datetime.js';

import {
    calcMean,
    calcStandardDeviation,
    calcStandardNormalDistribution
} from '../../yoe-year1-review/charts/repeated.js';

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
                return `${params[0].data.date}<br />${params[0].data.type}<br />` +
                    dateTime.secs2mmss(params.reduce((acc, val) => {
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

export const timeWorkoutDistribution = () => {
    const xAxis = [];
    const yAxis = [];
    const series = [];
    const dataset = [];
    const legend = [];
    const grid = [];
    const tooltip = [];

    grid.push({
        top: 45,
        right: 30,
        left: 30,
        bottom: 50,
    });

    legend.push({
    });

    /*
     * XXX There are only two Ascending Devour workouts, and our distribution
     * curve is based on 3 segments, so I think the curve generated is bogus.
     * Pull them out for now.
     *
     * XXX Exclude Cyborg as well; workTime is so small (as it only includes
     * the erg portion) the graph is skewed into negative, so it looks
     * terrible.
     */
    const data = [ ...workouts
        .filter((w) => w.type !== 'Ascending Devour' && w.type !== 'Descending Devour' && w.type !== 'Cyborg')
        .reduce((acc, val) => {
        const duration = val.workTime + val.restTime;

        const w = acc.get(val.type);
        if (w === undefined) {
            acc.set(val.type, [ duration ]);
        } else {
            w.push(duration);
        }

        return acc;

    }, new Map()) ];

    tooltip.push({
        trigger: 'axis',
        formatter: (params) => params.reduce((acc, val) => {
            return acc + `${val.marker} ${val.seriesName}<br />`;
        }, ''),
        axisPointer: {
            show: true,
            label: {
                show: true,
                formatter: (params) => dateTime.secs2mmss(params.value),
            },
        },
    });

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
        /*
        axisPointer: {
            show: true,
            label: {
                formatter: (params) => dateTime.secs2mmss(params.value),
            },
        },
        */
        splitNumber: 3,
    });

    yAxis.push({
        show: false,
        min: 'dataMin',
        max: 'dataMax',
    });

    data.forEach((d, i) => {
        const mean = calcMean(d[1]);
        const sd = calcStandardDeviation(d[1], mean);

        dataset.push({
            sourceHeader: false,
            source: calcStandardNormalDistribution(mean, sd),
        });

        series.push({
            type: 'line',
            datasetIndex: i,
            encode: {
                x: 'x',
                y: 'y',
            },
            name: d[0],
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
        tooltip,
    };
};
