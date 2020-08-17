'use strict';

import { workouts } from '/yoe-year1-review/charts/data.js';

const ttAirDyne = {
    top: 0,

    dataset: {
        dimensions: [ 'date', 'calories' ],
        source: workouts,
    },

    xAxis: {
        type: 'time',
        name: 'Date',
        nameGap: 40,
        nameLocation: 'middle',
        min: '2019-09-16',
        max: '2020-09-16',
    },

    yAxis: {
        type: 'value',
        name: 'Calories',
        nameLocation: 'middle',
        nameGap: 40,
        min: 175,
        max: 210,
    },

    series: {
        type: 'line',
        tooltip: {
            formatter: (params) => {
                return `${params.value.date}<br />Workout ${params.value.workout}<br />${params.value.calories} calories`;
            },
        },
        animation: false,
        connectNulls: true,
        label: {
            show: true,
        },
        symbolSize: 16,
        name: 'Calories',
    },

    tooltip: {
        trigger: 'item',
    },

    legend: {
        top: '10%',
    },
};

export const timeTrial = {
    ttAirDyne: () => ttAirDyne,
};
