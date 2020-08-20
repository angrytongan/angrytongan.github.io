'use strict';

import { dateTime } from '/yoe-year1-review/js/utils/datetime.js';

const genericOptions = (o) => {
    return {
        dataset: {
            dimensions: [ 'date', 'calories' ],
            source: o.dataset.source,
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
            ...o.yAxis,
        },

        series: {
            type: 'line',
            animation: false,
            connectNulls: true,
            label: {
                show: true,
            },
            symbolSize: 16,
            name: 'Calories',
            ...o.series,
        },

        tooltip: {
            trigger: 'item',
        },

        legend: {
            top: '10%',
        },
    };
};

const ttAirDyne = (workouts) => {
    return genericOptions({
        dataset: {
            source: workouts.filter((w) => w.apparatus == 'AirDyne' && w.type === 'Time Trial'),
        },
        yAxis: {
            min: 175,
            max: 210,
        },
        series: {
            tooltip: {
                formatter: (params) => {
                    return `${params.value.date}<br />
                        Workout ${params.value.workout}<br />
                        ${(params.value.distance / 1000).toFixed(2)}km`;
                },
            },
        },
    });
};

const ttRower = (workouts) => {
    return genericOptions({
        dataset: {
            source: workouts.filter((w) => w.apparatus == 'Rower' &&
                w.workTime === 1200 &&
                w.type === 'Time Trial'),
        },
        yAxis: {
            min: 350,
            max: 375
        },
        series: {
            tooltip: {
                formatter: (params) => {
                    return `${params.value.date}<br />
                        Workout ${params.value.workout}<br />
                        Pace ${params.value.pace} /500m<br />
                        ${(params.value.distance / 1000).toFixed(2)}km`;
                },
            },
        },
    });
};

export const timeTrial = {
    ttAirDyne,
    ttRower,
};
