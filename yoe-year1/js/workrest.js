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

    const labels = {
        workTime: 'Total work time',
        restTime: 'Total rest time',
    };

    title.push({
        text: 'Total workout duration',
        left: 'middle',
        textAlign: 'center',
    });

    xAxis.push({
        type: 'time',
        name: 'Date',
        nameGap: 40,
        nameLocation: 'middle',
        data: data.map((d) => d.date).sort(),
        min: '2019-09-16',
        max: '2020-09-16'
    });

    yAxis.push({
        max: 3600,
        //max: data.reduce((acc, val) => val.workTime + val.restTime > acc ? val.workTime + val.restTime : acc, 0),
        type: 'value',
        name: 'Workout duration',
        nameLocation: 'middle',
        nameGap: 50,
        axisLabel: {
            formatter: (value, index) => {
                return dateTime.secs2mmss(value);
            },
        },
    });

    legend.push({
        top: '10%',
    });

    [ 'workTime', 'restTime' ].forEach((metric, i) => {
        dataset.push({
            dimensions: [ 'date', metric ],
            source: data,
        });

        series.push({
            type: 'bar',
            name: labels[metric],
            datasetIndex: i,
            stack: 'single',
            tooltip: {
                formatter: (params, ticket, callback) => {
                    const date = params.value.date;
                    const workTime = dateTime.secs2mmss(params.value.workTime);
                    const restTime = dateTime.secs2mmss(params.value.restTime);
                    const total = dateTime.secs2mmss(params.value.workTime + params.value.restTime);

                    let out = `${date}<br />${params.value.apparatus} ${workTime}`;

                    if (params.value.restTime) {
                        out += `/${restTime}r`;
                    }

                    return out;
                },
            },
            animation: false,
            //barMaxWidth: 2,
            barCategoryGap: -1,  /* XXX hmm, figure this out */
        });
    });

    return {
        title,
        tooltip: {
            trigger: 'item',
        },
        legend,
        series,
        dataset,
        xAxis,
        yAxis,
    };
};

const makeHeight = (data) => {
    return 300;
};

export const WorkRest = {
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
