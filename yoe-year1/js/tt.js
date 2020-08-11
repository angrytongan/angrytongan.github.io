'use strict';

import { dateTime } from '/yoe-year1/js/utils/datetime.js';
import { EChart } from '/yoe-year1/js/utils/echart.js';

const makeOptions = (data) => {
    const title = [];
    const series = [];
    const dataset = [];
    const xAxis = [];
    const yAxis = [];

    const graphData = data; //.filter((d) => d.type == 'Time Trial' && d.apparatus == 'AirDyne');

    title.push({
        text: 'AirDyne 10:00 Time Trial',
        left: 'middle',
        textAlign: 'center',
    });

    dataset.push({
        dimensions: [ 'date', 'calories' ],
        source: graphData,
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
        type: 'value',
        name: 'Calories',
        nameLocation: 'middle',
        nameGap: 40,
        min: 175,
        max: 210,
    });

    series.push({
        type: 'line',
        tooltip: {
            formatter: (params) => {
                return `${params.value.date}<br />${params.value.calories} calories`;
            },
        },
        animation: false,
        connectNulls: true,
        label: {
            show: true,
        },
        symbolSize: 16,
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
    return 300;
};

export const TimeTrials = {
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
