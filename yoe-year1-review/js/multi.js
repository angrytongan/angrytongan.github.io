'use strict';

export const multiOptions = () => {
    const title = [];
    const legend = [];
    const tooltip = [];
    const xAxis = [];
    const yAxis = [];
    const series = [];
    const dataset = [];

    const randomInt = (max = 100) => {
        return Math.floor(Math.random() * Math.floor(max));
    };

    const data = [
        { date: '2020-01-01', a: randomInt(), b: randomInt(), c: randomInt(), d: randomInt() },
        { date: '2020-01-02', a: randomInt(), b: randomInt(), c: randomInt(), d: randomInt() },
        { date: '2020-01-03', a: randomInt(), b: randomInt(), c: randomInt(), d: randomInt() },
        { date: '2020-01-04', a: randomInt(), b: randomInt(), c: randomInt(), d: randomInt() },
        { date: '2020-01-05', a: randomInt(), b: randomInt(), c: randomInt(), d: randomInt() },
        { date: '2020-01-06', a: randomInt(), b: randomInt(), c: randomInt(), d: randomInt() },
        { date: '2020-01-07', a: randomInt(), b: randomInt(), c: randomInt(), d: randomInt() },
        { date: '2020-01-08', a: randomInt(), b: randomInt(), c: randomInt(), d: randomInt() },
        { date: '2020-01-09', a: randomInt(), b: randomInt(), c: randomInt(), d: randomInt() },
        { date: '2020-01-10', a: randomInt(), b: randomInt(), c: randomInt(), d: randomInt() },
    ];
    const keys = Object.keys(data[0]).sort();
    keys.splice(keys.findIndex((c) => c === 'date'), 1);

    const horizSize = '55%';
    const vertSize = '63%';

    title.push({
        text: 'multi',
        textAlign: 'middle',
        left: 'center',
    });

    legend.push({
        top: '10%',
    });

    tooltip.push({
        trigger: 'item',
    });

    dataset.push({
        source: data,
    });

    xAxis.push({
        type: 'time',
        name: 'Date',
    });
    yAxis.push({
        type: 'value',
        name: 'Value',
        dataMin: 0,
        dataMax: 100,
    });

    keys.forEach((k, i) => {
        series.push({
            type: 'line',
            encode: {
                x: 'date',
                y: k,
            },
            symbolSize: 10,
            animation: false,
            name: k,
            tooltip: {
                formatter: (params) => {
                    return `${params.value.date}<br />${k}: ${params.value[k]}`;
                },
            },
        });
    });

    return {
        title,
        legend,
        tooltip,
        series,
        xAxis,
        yAxis,
        series,
        dataset
    };
};
