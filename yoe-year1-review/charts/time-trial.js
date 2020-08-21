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
            ...o.xAxis,
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
            ...o.legend,
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
            max: 370
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

const workouts2000rower = [
    /* 25029665 */ { workout: "N/A", date: "2015-11-20", distance: "4750", workTime: "1200", calories: "299", pace: "2:06.3" },
    /* 32104086 */ { workout: "N/A", date: "2018-01-17", distance: "5017", workTime: "1200", calories: "332", pace: "1:59.5" },
    /* 37830654 */ { workout: "N/A", date: "2019-04-11", distance: "4997", workTime: "1200", calories: "332", pace: "2:00.0" },
    /* 39276484 */ { workout: "N/A", date: "2019-08-20", distance: "4894", workTime: "1200", calories: "319", pace: "2:02.5" },
];
const ttRower2000FullHistory = (workouts) => {
    return genericOptions({
        dataset: {
            source: workouts.filter((w) => w.apparatus == 'Rower' &&
                w.workTime === 1200 &&
                w.type === 'Time Trial').concat(workouts2000rower).sort((a, b) => a.date < b.date ? -1 : a.date > b.date ? 1 : 0),
        },
        xAxis: {
            min: '2015-10-01',
            max: '2020-09-16',
        },
        yAxis: {
            min: 250,
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
            markArea: {
                silent: true,
                data: [
                    [
                        { coord: [ '2019-09-16', 250 ] },
                        { coord: [ '2020-09-16', 375 ] },
                    ],
                ],
            },
        },
    });
};

export const timeTrial = {
    ttAirDyne,
    ttRower,
    ttRower2000FullHistory,
};
