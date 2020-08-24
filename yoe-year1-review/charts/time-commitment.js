'use strict';

import { dateTime } from '/yoe-year1-review/js/utils/datetime.js';

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
        max: '2020-09-16'
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
        dimensions: [ 'date', 'workTime', 'restTime' ],
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
            trigger: 'item',
        },
        legend,
        series,
        dataset,
        xAxis,
        yAxis,
    };
};

export const timeCommitment = {
    summary,
}
