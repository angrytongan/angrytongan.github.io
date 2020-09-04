'use strict';

import { dateTime } from '/yoe-year1-review/js/utils/datetime.js';

const summary = () => {
    const xAxis = [];
    const yAxis = [];
    const series = [];
    const dataset = [];
    const legend = [];
    const tooltip = [];

    const data = [];
    data.push({
        date: '2018-10-18',
        time: '7:27.6',
        type: '2k Training',
        link: 'https://log.concept2.com/profile/1063564/log/35115315',
    }, {
        date: '2018-06-10',
        time: '6:51.8',
        type: '2k Competition',
        link: 'https://log.concept2.com/profile/1063564/log/33807825',
    }, {
        date: '2017-12-14',
        time: '7:35.5',
        type: '2k Training',
        link: 'https://log.concept2.com/profile/1063564/log/31627410',
    }, {
        date: '2017-11-16',
        time: '6:57.4',
        type: '2k Attempt',
        link: 'https://log.concept2.com/profile/1063564/log/31250250',
    }, {
        date: '2017-08-29',
        time: '7:44.5',
        type: '2k Training',
        link: 'https://log.concept2.com/profile/1063564/log/30511391',
    }, {
        date: '2017-08-09',
        time: '7:47.9',
        type: '2k Training',
        link: 'https://log.concept2.com/profile/1063564/log/30341046',
    }, {
        date: '2016-09-18',
        time: '7:28.4',
        type: '2k Training',
        link: 'https://log.concept2.com/profile/1063564/log/27326493',
    }, {
        date: '2016-02-08',
        time: '7:36.5',
        type: '2k Training',
        link: 'https://log.concept2.com/profile/1063564/log/26072228',
    }, {
        date: '2015-11-02',
        time: '7:42.2',
        type: '2k Training',
        link: 'https://log.concept2.com/profile/1063564/log/22568174',
    }, {
        date: '2019-12-07',
        time: '7:36.5',
        type: 'YoE 3x2k/3:00r attempt 1',
        link: '',
    }, {
        date: '2019-12-07',
        time: '7:34.8',
        type: 'YoE 3x2k/3:00r attempt 1',
        link: '',
    }, {
        date: '2019-12-07',
        time: '7:31.3',
        type: 'YoE 3x2k/3:00r attempt 1',
        link: '',
    });

    legend.push({
        top: '10%',
    });

    tooltip.push({
        trigger: 'axis',
        formatter: (params) => {
            return params[0].value.date + '<br />' + params.reduce((acc, val) => {
                return acc + `${val.marker} ${dateTime.secs2mmss(val.value.time, true)}<br />`;
            }, '');
        },
    });

    xAxis.push({
        type: 'time',
        name: 'Date',
        nameGap: 35,
        nameLocation: 'middle',
        max: '2020-09-20',
        axisLabel: {
            formatter: (value) => echarts.format.formatTime('yyyy-MM-dd', value),
        },
    });

    yAxis.push({
        type: 'value',
        name: 'Time',
        nameLocation: 'middle',
        nameGap: 35,
        axisLabel: {
            formatter: (value) => dateTime.secs2mmss(value),
        },
        inverse: true,
        min: dateTime.mmss2secs('6:40'),
        max: dateTime.mmss2secs('8:00'),
    });

    data.reduce((acc, val) => {
        if (!acc.includes(val.type)) {
            acc.push(val.type);
        }
        return acc;
    }, []).sort().forEach((type, i) => {
        dataset.push({
            dimensions: [ 'date', 'time' ],
            source: data.filter((d) => d.type == type).map((d) => {
                return {
                    date: d.date,
                    time: dateTime.mmss2secs(d.time),
                    type: d.type,
                };
            })
        });

        series.push({
            type: 'scatter',
            name: type,
            encode: {
                x: 'date',
                y: 'time',
            },
            datasetIndex: dataset.length-1,
        });

        if (i == 0) {
            series[series.length-1].markArea = {
                silent: true,
                itemStyle: {
                    color: 'rgba(194, 53, 49, 0.17)',
                },
                data: [
                    [
                        { coord: [ '2019-09-16', ] },
                        { coord: [ '2020-09-13', ] },
                    ],
                ],
            };
        }
    });

    return {
        tooltip,
        legend,
        xAxis,
        yAxis,
        series,
        dataset,
    }
};

export const twok = {
    summary,
};
