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
 * 4 phases in top
 * one box with count for each workout type
 * [
 *  {
 *      name: '4: FLUX',
 *      children: [
 *          { name: 'FLUX', value: 1, }
 *          { name: 'Interval', value: 1, }
 *      ],
 *  },
 * ]
 */
const treemap = (data) => {
    const treedata = data.reduce((acc, val) => {
        const phase = acc.findIndex((a) => a.name == val.phase);
        if (phase === -1) {
            acc.push({
                name: val.phase,
                children: [{
                    name: val.type,
                    value: 1,
                }],
            });
        } else {
            const type = acc[phase].children.findIndex((a) => a.name == val.type);
            if (type === -1) {
                acc[phase].children.push({
                    name: val.type,
                    value: 1,
                });
            } else {
                acc[phase].children[type].value++;
            }
        }

        return acc;

    }, []);

    return {
        tooltip: {
            trigger: 'item',
        },
        series: {
            type: 'treemap',
            label: {
                formatter: '{b}: {c}',
            },
            tooltip: {
                formatter: (params) => {
                    return `Phase ${params.treePathInfo[1].name}<br />
                        ${params.value} ${params.treePathInfo[2].name} workouts`;

                    return params.treePathInfo.reduce((acc, val) => {
                        if (val.name.length) {
                            if (acc.length) {
                                acc += ' > ';
                            }
                            acc += val.name;
                        }
                        return acc;
                    }, "");
                },
            },
            data: treedata,
            leafDepth: null,
            roam: false,
            nodeClick: false,
            breadcrumb: {
                show: false,
            },
            animation: false,
        },
    };
};

export const workoutSpread = {
    scatter: (workouts) => scatter(workouts),
    treemap: (workouts) => treemap(workouts),
};
