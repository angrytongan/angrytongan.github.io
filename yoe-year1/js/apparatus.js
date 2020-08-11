
'use strict';

import { dateTime } from '/yoe-year1/js/utils/datetime.js';
import { EChart } from '/yoe-year1/js/utils/echart.js';

const makeOptions = (data) => {
    const title = [];
    const series = [];
    const xAxis = [];
    const yAxis = [];
    const dataset = [];

    title.push({
        text: 'Apparatus use across the program',
        left: 'middle',
        textAlign: 'center',
    });

    dataset.push({
        dimensions: [ 'date', 'apparatus' ],
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
        name: 'Apparatus',
        nameLocation: 'middle',
        nameGap: 80,
        data: [
            'SkiErg',
            'Rower',
            'AirDyne',
        ],
    });

    series.push({
        type: 'scatter',
        encode: {
            x: 'date',
            y: 'apparatus',
        },
        tooltip: {
            formatter: (params) => {
                return `${params.value.date}<br />${params.value.type}`;
            },
        },
        animation: false,
    });

    return {
        title,
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
    return 250;
};

export const Apparatus = {
    view: (vnode) => {
        const { data } = vnode.attrs;

        return [
            m(EChart, {
                div: 'workout-type',
                options: makeOptions(data),
                height: makeHeight(data),
            }),
            m('hr'),
        ];
    },
};
