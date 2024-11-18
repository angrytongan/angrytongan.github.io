'use strict';

import { workouts } from './data.js';
import { time } from 'npm:echarts';

const scatter = () => {
    const series = [];
    const xAxis = [];
    const yAxis = [];
    const dataset = [];
    const legend = [];
    const axisPointer = [];
    const grid = [];

    grid.push({
        top: 40,
        left: 70,
        right: 30,
        bottom :50,
    });

    legend.push({
        top: '10%',
        type: 'scroll',
        selectedMode: false,
    });

    dataset.push({
        source: workouts,
    });

    xAxis.push({
        type: 'time',
        name: 'Date',
        nameGap: 40,
        nameLocation: 'middle',
        min: '2019-09-16',
        max: '2020-09-13',
        axisLine: {
            show: true,
        },
        axisTick: {
            show: true,
        },
        splitLine: {
            show: true,
        },
        axisLabel: {
            formatter: (value) => time.format(value, '{yyyy}-{MM}-{dd}', false),
        },
    });

    yAxis.push({
        type: 'category',
        name: 'Workout type',
        nameLocation: 'middle',
        nameGap: 80,
        data: [                 // XXX shouldn't specify this, as we have dataset
            'FLUX',
            'Polarisation',
            'Time Trial',
            'Endurance',
            'Interval',
        ],
        axisPointer: {
            show: false,
        },
    });

    series.push({
        type: 'scatter',
        encode: {
            x: 'date',
            y: 'type',
        },
        tooltip: {
            formatter: (params) => {
                return params.value.date;
            },
        },
        animation: false,
        datasetIndex: 0,
        symbolSize: 5,
        name: 'Workout',
        gridIndex: 0,
    });

    axisPointer.push({
        show: true,
        snap: true,
        label: {
            formatter: (params) => time.format(params.value, '{yyyy}-{MM}-{dd}', false),
        }
    });

    return {
        animation: false,
        legend,
        series,
        dataset,
        xAxis,
        yAxis,
        axisPointer,
        grid,
    };
};

/*
 * [
 *      {
 *          phase: '1: Engine Builder',
 *          workouts: [
 *              { name: 'Interval', value: 45 },
 *              { name: 'Endurance', value: 12 },
 *              { name: 'Time Trial', value: 3 },
 *          ]
 *      },
 *      ...
 *
 */
const pies = () => {
    const title = [];
    const dataset = [];
    const series = [];
    const grid = [];

    grid.push({
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
    });

    const phaseData = workouts.reduce((acc, val) => {
        let phase = acc.find((a) => a.phase == val.phase);
        if (phase === undefined) {
            acc.push({
                phase: val.phase,
                workouts: [],
            });
            phase = acc[acc.length-1];
        }

        const workout = phase.workouts.find((w) => w.name == val.type);
        if (workout === undefined) {
            phase.workouts.push({
                name: val.type,
                value: 1,
            });
        } else {
            workout.value++;
        }

        return acc;
    }, []).sort((a, b) => a.phase < b.phase ? -1 : a.phase > b.phase ? 1 : 0);

    const graphSize = 25;
    phaseData.forEach((p, i) => {
        p.workouts.sort((a, b) => a.name < b.name ? -1 : a.name > b.name ? 1 : 0);

        const graphLeft =  (i * graphSize) + '%';
        const graphRight = (phaseData.length-1 - i) * graphSize + '%';

        title.push({
            subtext: `Phase ${p.phase}`,
            textAlign: 'center',
            left: i * graphSize + (graphSize/2) + '%',
            top: '80%',
        });

        dataset.push({
            source: p.workouts,
        });

        series.push({
            type: 'pie',
            datasetIndex: i,
            name: `Phase ${p.phase}`,

            left: graphLeft,
            right: graphRight,
            center: [ '50%', '50%' ],

            label: {
                position: 'inside',
            },
        });
    });

    return {
        animation: false,
        title,
        tooltip: {
            trigger: 'item',
        },
        dataset,
        series,
        grid,
    };
};

export default {
    scatter,
    pies,
};
