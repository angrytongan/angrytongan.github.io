'use strict';

import { dateTime } from '/yoe-year1/js/utils/datetime.js';
import { EChart } from '/yoe-year1/js/utils/echart.js';

const makeOptions = (data) => {
    const title = [];
    const tooltip = {};
    const visualMap = [];
    const calendar = [];
    const series = [];
    const dataset = [];

    const labels = {
        workTime: {
            label: 'Work time',
            formatter: (params) => {
                const d = dateTime.secs2mmss(typeof params === 'object' ? params.value.workTime : params);
                return typeof params === 'object' ? `${params.value.date}<br />${params.value.apparatus}: ${d}` : d;
            },
        },
        distance: {
            label: 'Distance',
            formatter: (params) => {
                let d = typeof params === 'object' ? params.value.distance : params;
                if (d > 1000) {
                    d = (d / 1000).toFixed(1).toLocaleString() + 'km';
                } else {
                    d = d.toLocaleString() + 'm';
                }

                return typeof params === 'object' ? `${params.value.date}<br />${params.value.apparatus}: ${d}` : d;
            },
        },
    };

    title.push({
        text: 'Daily',
        left: 'middle',
        textAlign: 'center',
    });

    [ 'workTime', 'distance' ].forEach((metric, i) => {
        const top = (i * 45);

        dataset.push({
            dimensions: [ 'date', metric ],
            source: data,
        });

        title.push({
            subtext: labels[metric].label,
            left: 'middle',
            textAlign: 'center',
            top: top + 4 + '%',
        });

        visualMap.push({
            min: 0,
            max: data.reduce((acc, val) => val[metric] > acc ? val[metric] : acc, 0),
            type: 'piecewise',
            orient: 'horizontal',
            left: 'center',
            top: top + 12 + '%',
            seriesIndex: i,
            formatter: (a, b) => {
                return `${labels[metric].formatter(a)} - ${labels[metric].formatter(b)}`;
            },
        });

        calendar.push({
            left: 30,
            right: 30,
            cellSize: ['auto', 13],
            range: [
                '2019-09-16', '2020-09-16'
                /*
                data.reduce((acc, val) => val.date < acc ? val.date : acc, '9999-99-99'),
                data.reduce((acc, val) => val.date > acc ? val.date : acc, '0000-00-00'),
                */
            ],
            itemStyle: {
                borderWidth: 0.5
            },
            dayLabel: { 
                firstDay: 1,
            },
            top: (top + 22) + '%',
            left: '10%',
            right: '10%',
        });

        series.push({
            type: 'heatmap',
            coordinateSystem: 'calendar',
            calendarIndex: i,
            datasetIndex: i,
            tooltip: {
                formatter: (params) => labels[metric].formatter(params),
            },
        });
    });

    return {
        title,
        tooltip: {
            trigger: 'item',
        },
        visualMap,
        calendar,
        series,
        dataset,
    };
};

const makeHeight = (data) => {
    return 450;
};

export const Frequency = {
    view: (vnode) => {
        const { data } = vnode.attrs;

        return [
            m(EChart, {
                div: 'frequency',
                options: makeOptions(data),
                height: makeHeight(data),
            }),
            m('hr'),
        ];
    },
};
