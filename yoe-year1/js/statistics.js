'use strict';

import { dateTime } from '/yoe-year1/js/utils/datetime.js';
import { EChart } from '/yoe-year1/js/utils/echart.js';

const genStatistics = (data) => {
    return data.reduce((acc, val) => {
        acc.numWorkouts++;
        acc.totalDistance += val.distance;
        acc.totalWorkTime += val.workTime;
        acc.totalRestTime += val.restTime;

        [ 'apparatus', 'phase' ].forEach((k) => {
            let idx = acc[k].findIndex((a) => val[k] == a[k]);
            if (idx === -1) {
                idx = acc[k].push({ });
                idx--;
                acc[k][idx][k] = val[k];
            }

            if (acc[k][idx].count) {
                acc[k][idx].count++;
            } else {
                acc[k][idx].count = 1;
            }

            [ 'distance', 'workTime', 'restTime' ].forEach((metric) => {
                if (acc[k][idx][metric]) {
                    acc[k][idx][metric] += val[metric];
                } else {
                    acc[k][idx][metric] = val[metric];
                }
            });
        });

        return acc;
    }, {
        numWorkouts: 0,
        totalDistance: 0,
        totalWorkTime: 0,
        totalRestTime: 0,

        apparatus: [],
        phase: [],
    });
};

const Overview = {
    view: (vnode) => {
        const { statistics } = vnode.attrs;

        return m('table', [
            m('tr', [
                m('th', 'Workout count'),
                m('td', statistics.numWorkouts)
            ]),
            m('tr', [
                m('th', 'Total Distance'),
                m('td', statistics.totalDistance.toLocaleString() + 'm'),
            ]),
            m('tr', [
                m('th', 'Total Work Time'),
                m('td', dateTime.secs2mmss(statistics.totalWorkTime)),
            ]),
            m('tr', [
                m('th', 'Total Rest Time'),
                m('td', dateTime.secs2mmss(statistics.totalRestTime)),
            ]),
        ]);
    },
};

const makeHeight = (statistics) => {
    return 450;
};

const makeOptions = (statistics) => {
    const legend = {};
    const series = [];
    const dataset = [];
    const title = [];

    const formatters = {
        count: (params, datum) => {
            return `${params.value[datum]} ${params.value.count}`;
        },
        distance: (params, datum) => {
            let d = params.value.distance;
            if (d > 1000) {
                d = Math.trunc(d / 1000).toLocaleString() + 'km';
            } else {
                d = d.toLocaleString() + 'm';
            }

            return `${params.value[datum]} ${d}`;
        },
        workTime: (params, datum) => {
            return `${params.value[datum]} ${dateTime.secs2mmss(params.value.workTime)}`;
        },
        restTime: (params, datum) => {
            return `${params.value[datum]} ${dateTime.secs2mmss(params.value.restTime)}`;
        },
    };

    const labels = {
        count: 'Workout count',
        distance: 'Total Distance',
        workTime: 'Total working time',
        restTime: 'Total resting time',
    };

    title.push({
        text: 'Totals',
        left: 'middle',
        textAlign: 'center',
    });

    [ 'apparatus', 'phase' ].forEach((k, i) => {
        const yCentre = (35 + 45 * i) + '%';

        if (statistics[k] && statistics[k][0]) {
            dataset.push({
                dimensions: Object.keys(statistics[k][0]),
                source: statistics[k]
            });

            [ 'count', 'distance', 'workTime', ].forEach((metric, j) => {
                const xCentre = (20 + 25 * j) + '%';

                series.push({
                    type: 'pie',
                    radius: '35%',
                    center: [ xCentre, yCentre ],
                    encode: {
                        itemName: k,
                        value: metric,
                    },
                    datasetIndex: i,
                    label: {
                        formatter: (params) => formatters[metric](params, k),
                    },
                    tooltip: {
                        formatter: (params) => formatters[metric](params, k),
                    },
                });

                if (i == 0) {
                    title.push({
                        text: labels[metric],
                        top: '10%', //'53%',
                        left: xCentre,
                        textAlign: 'center',
                    });
                }
            });
        }
    });

    return {
        legend: {
            top: 30,
            show: false,
        },
        tooltip: {
            trigger: 'item',
        },
        title,
        series,
        dataset
    };
};

const Breakdown = {
    view: (vnode) => {
        const { statistics } = vnode.attrs;

        return m(EChart, {
            div: 'statistics',
            options: makeOptions(statistics),
            height: makeHeight(statistics),
        });
    },
};

export const Statistics = {
    view: (vnode) => {
        const { data } = vnode.attrs;
        const statistics = genStatistics(data);

        return [
            //m(Overview, { statistics: statistics }),
            m(Breakdown, { statistics: statistics }),
            m('hr'),
        ];
    },
};
