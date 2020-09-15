'use strict';

import { dateTime } from '/yoe-year1-review/js/utils/datetime.js';

const genericOptions = (o) => {
    return {
        dataset: {
            source: o.dataset.source,
        },

        xAxis: {
            type: 'time',
            name: 'Date',
            nameGap: 30,
            nameLocation: 'middle',
            min: '2019-09-16',
            max: '2020-09-13',
            axisLabel: {
                formatter: (value) => echarts.format.formatTime('yyyy-MM-dd', value),
            },
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
            type: 'scatter',
            animation: false,
            connectNulls: true,
            label: {
                show: true,
            },
            symbolSize: 24,
            name: 'Calories',
            encode: {
                x: 'date',
                y: 'calories',
            },
            ...o.series,
        },

        tooltip: {
            trigger: 'axis',
            formatter: (params) => {
                return params[0].value.date + '<br />' + params.reduce((acc, val) => {
                    let out = `${val.marker} ${(val.value.distance / 1000).toFixed(2)}km`;

                    if (val.value.pace) {
                        out += ` / ${val.value.pace}`;
                    }

                    return acc + out;
                }, '');
            },
            ...o.tooltip,
        },

        legend: {
            top: '10%',
            type: 'scroll',
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
            max: '2020-09-13',
        },
        yAxis: {
            min: 250,
            max: 375
        },
        series: {
            markArea: {
                silent: true,
                data: [
                    [
                        { coord: [ '2019-09-16', 250 ] },
                        { coord: [ '2020-09-13', 375 ] },
                    ],
                ],
            },
        },
    });
};

/* 24x0:30/0:30r */
const repeated243030 = (workouts) => {
    return genericOptions({
        dataset: {
            source: workouts.filter((w) => w.workout == '12.1.5' || w.workout == '3.2.3')
        },
        yAxis: {
            min: 250,
            max: 350,
        },
    });
};

/* 3x2,000m/3:00r */
const repeated32000300 = (workouts) => {
    return genericOptions({
        dataset: {
            source: workouts.filter((w) => w.workout == '3.4.2')
                .concat({
                    date: '2020-09-15',
                    distance: 6000,
                    calories: 433,
                    pace: '1:51.7',
                }),
        },
        xAxis: {
            max: '2020-09-16',
        },
        yAxis: {
            min: 0,
            max: 750,
        },
        series: {
            markArea: {
                silent: true,
                data: [
                    [
                        { coord: [ '2019-09-16', 0 ] },
                        { coord: [ '2020-09-13', 750 ] },
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
    repeated243030,
    repeated32000300,
};
