'use strict';

import { dateTime } from '/yoe-year1-review/js/utils/datetime.js';

const scatter = (data) => {
    const title = [];
    const series = [];
    const xAxis = [];
    const yAxis = [];
    const dataset = [];
    const legend = [];

    title.push({
        left: 'middle',
        textAlign: 'center',
    });

    legend.push({
        top: '10%',
        selectedMode: false,
    });

    dataset.push({
        source: data,
    });

    xAxis.push({
        type: 'time',
        name: 'Date',
        nameGap: 40,
        nameLocation: 'middle',
        min: '2019-09-16',
        max: '2020-09-16',
    });

    yAxis.push({
        type: 'category',
        name: 'Workout type',
        nameLocation: 'middle',
        nameGap: 80,
        data: [
            'FLUX',
            'Polarisation',
            'Time Trial',
            'Endurance',
            'Interval',
        ],
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
    });

    return {
        title,
        legend,
        tooltip: {
            trigger: 'item',
        },
        series,
        dataset,
        xAxis,
        yAxis,
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
const pies = (data) => {
    const title = [];
    const dataset = [];
    const series = [];

    const phaseData = data.reduce((acc, val) => {
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
            subtext: p.phase,
            textAlign: 'center',
            left: i * graphSize + (graphSize/2) + '%',
            top: '80%',
        });

        dataset.push({
            dimensions: [ 'name', 'value' ],
            source: p.workouts,
        });

        series.push({
            type: 'pie',
            datasetIndex: i,
            name: p.phase,

            left: graphLeft,
            right: graphRight,
            center: [ '50%', '50%' ],

            label: {
                position: 'inside',
            },
            animation: false,
        });
    });

    return {
        title,
        tooltip: {
            trigger: 'item',
        },
        dataset,
        series,
    };
};

export const workoutSpread = {
    scatter: (workouts) => scatter(workouts),
    pies: (workouts) => pies(workouts),
};
