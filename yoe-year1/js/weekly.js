'use strict';

import { dateTime } from '/yoe-year1/js/utils/datetime.js';
import { EChart } from '/yoe-year1/js/utils/echart.js';

const makeOptions = (data) => {
    const title = [];
    const series = [];
    const dataset = [];
    const xAxis = [];
    const yAxis = [];
    const legend = [];

    const metres2km = (metres) => {
        return (metres / 1000).toFixed(1).toLocaleString() + 'km';
    };

    const graphData = data.reduce((acc, val) => {
        const week = val.workout.replace(/..$/, '');
        const workoutDuration = val.workTime + val.restTime;
        const distance = val.distance;

        const idx = acc.findIndex((a) => a.week == week);
        if (idx == -1) {
            acc.push({
                week: week,
                workoutDuration: workoutDuration,
                distance: distance,
            });
        } else {
            acc[idx].workoutDuration += workoutDuration;
            acc[idx].distance += distance;
        }

        return acc;
    }, []);

    title.push({
        text: 'Weekly totals',
        left: 'middle',
        textAlign: 'center',
    });

    legend.push({
        top: '10%',
    });

    dataset.push({
        source: graphData,
    });

    xAxis.push({
        type: 'category',
        name: 'Week of program (Month.Week)',
        nameLocation: 'middle',
        nameGap: 30,
        axisLabel: {
            interval: 0,
            rotate: 45,
        },
        data: [
            '1.1', '1.2', '1.3', '1.4',
            '2.1', '2.2', '2.3', '2.4',
            '3.1', '3.2', '3.3', '3.4',
            '4.1', '4.2', '4.3', '4.4',
            '5.1', '5.2', '5.3', '5.4',
            '6.1', '6.2', '6.3', '6.4',
            '7.1', '7.2', '7.3', '7.4',
            '8.1', '8.2', '8.3', '8.4',
            '9.1', '9.2', '9.3', '9.4',
            '10.1', '10.2', '10.3', '10.4',
            '11.1', '11.2', '11.3', '11.4',
            '12.1', '12.2', '12.3', '12.4',
        ],
    });

    yAxis.push({
        type: 'value',
        name: 'Cumulative time',
        nameGap: 55,
        nameLocation: 'middle',
        axisLabel: {
            formatter: (value) => {
                return dateTime.secs2mmss(value);
            },
        },
    });

    yAxis.push({
        type: 'value',
        name: 'Cumulative distance',
        nameGap: 55,
        nameLocation: 'middle',
        position: 'right',
        axisLabel: {
            formatter: metres2km,
        },
        splitLine: {
            show: false,
        },
    });

    series.push({
        type: 'bar',
        name: 'Cumulative time',
        tooltip: {
            formatter: (params) => {
                const [ month, week ] = params.value.week.toString().split('.');
                return `Month ${month}, week ${week}<br />${dateTime.secs2mmss(params.value.workoutDuration)}`;
            },
        },
        animation: false,
        encode: {
            x: 'week',
            y: 'workoutDuration',
        },
        yAxisIndex: 0,
        animation: false,
    });

    series.push({
        type: 'line',
        name: 'Cumulative distance',
        encode: {
            x: 'week',
            y: 'distance',
        },
        tooltip: {
            formatter: (params) =>{
                const [ month, week ] = params.value.week.toString().split('.');
                return `Month ${month}, week ${week}<br />${metres2km(params.value.distance)}`;
            },
        },
        position: 'right',
        yAxisIndex: 1,
        symbolSize: 8,
        animation: false,
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

const makeHeight = (data) => {
    return 300;
};

export const Weekly = {
    view: (vnode) => {
        const { data } = vnode.attrs;

        return [
            m(EChart, {
                div: 'workrest',
                options: makeOptions(data),
                height: makeHeight(data),
            }),
            m('hr'),
        ];
    },
};
