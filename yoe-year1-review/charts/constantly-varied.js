'use strict';

import { dateTime } from '/yoe-year1-review/js/utils/datetime.js';

const apparatus = (workouts) => {
    const title = [];
    const series = [];
    const dataset = [];
    const xAxis = [];
    const yAxis = [];
    const legend = [];

    const apparatus = [];
    const data = workouts.map((w) => {
        if (!apparatus.includes(w.apparatus)) {
            apparatus.push(w.apparatus);
        }

        return {
            date: w.date,
            workoutTime: w.workTime + w.restTime,
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
        max: '2020-09-13'
    });

    yAxis.push({
        max: 3600,
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

    apparatus.forEach((a, i) => {
        dataset.push({
            source: data.filter((d) => d.apparatus == a),
        });

        series.push({
            type: 'bar',
            name: a,
            stack: 'single',
            tooltip: {
                formatter: (params, ticket, callback) => {
                    return dateTime.secs2mmss(params.value.workoutTime);
                },
            },
            encode: {
                x: 'date',
                y: 'workoutTime',
            },
            animation: false,
            //barMaxWidth: 2,
            barCategoryGap: -1,  // XXX hmm, figure this out

            datasetIndex: i,
        });
    });

    return {
        title,
        tooltip: {
            trigger: 'item',
        },
        legend,
        series,
        dataset,
        xAxis,
        yAxis,
    };
};

export const constantlyVaried = {
    apparatus,
}
