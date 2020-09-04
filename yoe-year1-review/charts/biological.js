'use strict';

import { dateTime } from '/yoe-year1-review/js/utils/datetime.js';
import {
    calcMean,
    calcStandardDeviation,
    calcStandardNormalDistribution,
} from '/yoe-year1-review/charts/repeated.js';

const markers = [
    { date: '2020-08-09', haemoglobin: 155, rhr: 64, weight: 99.8 },
    { date: '2020-07-26', haemoglobin: 151, rhr: 68, weight: 100.6 },
    { date: '2020-06-23', haemoglobin: 146, rhr: 64, weight: 100.4 },
    { date: '2020-06-07', haemoglobin: 142, rhr: 68, weight: 100.1 },
    { date: '2020-05-24', haemoglobin: 154, rhr: 60, weight: 100.5 },
    { date: '2020-05-03', haemoglobin: 147, rhr: 64, weight: 100.1 },
    { date: '2020-04-19', haemoglobin: 150, rhr: 62, weight: 100.9 },
    { date: '2020-04-05', haemoglobin: 150, rhr: 68, weight: 101.2 },
    { date: '2020-03-22', haemoglobin: 150, rhr: 64, weight: 100.9 },
    { date: '2020-03-08', haemoglobin: 142, rhr: 72, weight: 101.0 },
    { date: '2020-02-23', haemoglobin: 142, rhr: 62, weight: 101.2 },
    { date: '2020-02-02', haemoglobin: 139, rhr: 64, weight: 101.0 },
    { date: '2020-01-19', haemoglobin: 150, rhr: 64, weight: 101.7 },
    { date: '2020-01-05', haemoglobin: 150, rhr: 62, weight: 101.9 },
    { date: '2019-12-22', haemoglobin: 145, rhr: 62, weight: 102.4 },
    { date: '2019-12-08', haemoglobin: 135, rhr: 66, weight: 101.7 },
    { date: '2019-11-24', haemoglobin: 141, rhr: 70, weight: 101.0 },
    { date: '2019-11-10', haemoglobin: 145, rhr: 64, weight: 101.5 },
    { date: '2019-10-20', haemoglobin: 148, rhr: 66, weight: 101.8 },

].sort((a, b) => a.date < b.date ? -1 : a.date > b.date ? 1 : 0);

const label = (metric) => {
    switch (metric) {
        case 'haemoglobin': return 'Haemoglobin';
        case 'rhr': return 'Resting heart rate';
        case 'weight': return 'Bodyweight';
    }
};
const units = (metric, value) => {
    switch (metric) {
        case 'haemoglobin': return `${value}Hb`;
        case 'rhr': return `${value}bpm`;
        case 'weight': return `${value.toFixed(1)}kg`;
    }
};
const bounds = {
    haemoglobin: { min: 130, max: 160 },
    rhr: { min: 55, max: 80 },
    weight: { min: 95, max: 105 },
};

const summary = () => {
    const legend = [];
    const tooltip = [];
    const xAxis = [];
    const yAxis = [];
    const series = [];
    const dataset = [];
    const grid = [];

    tooltip.push({
        trigger: 'axis',
        formatter: (params) => {
            return params[0].value.date + '<br />' + params.reduce((acc, val) => {
                return acc + `${val.marker}
                    ${units(val.dimensionNames[val.encode.y[0]],
                        val.value[val.dimensionNames[val.encode.y[0]]])}<br />`;
            }, '');
        },
    });

    xAxis.push({
        type: 'category',
        name: 'Date',
        nameGap: 40,
        nameLocation: 'middle',
    });

    const dimensions = [ 'weight', 'rhr', 'haemoglobin' ];
    dataset.push({
        dimensions: [ 'date', ...dimensions ],
        source: markers,
    });

    grid.push({
        right: '15%',
    });

    dimensions.forEach((metric) => {
        yAxis.push({
            type: 'value',
            //name: label(metric),
            axisLabel: {
                formatter: (value) => units(metric, value),
            },
            min: bounds[metric].min,
            max: bounds[metric].max,
            splitLine: {
                show: false,
            },
        });
        if (metric == 'haemoglobin') {
            yAxis[yAxis.length-1].offset = 55;
            yAxis[yAxis.length-1].nameGap = 45;
            yAxis[yAxis.length-1].nameLocation = 'middle';
        }

        series.push({
            type: 'line',
            name: label(metric),
            encode: {
                x: 'date',
                y: metric,
            },
            connectNulls: true,
            symbolSize: 10,
            yAxisIndex: yAxis.length-1,
        });
    });

    legend.push({
        top: '10%',
    });

    return {
        grid,
        legend,
        tooltip,
        xAxis,
        yAxis,
        series,
        dataset,
    }
};

const distribution = () => {
    const xAxis = [];
    const yAxis = [];
    const series = [];
    const dataset = [];
    const legend = [];
    const grid = [];

    const dimensions = [ 'weight', 'rhr', 'haemoglobin' ];
    const width = 32;
    const offset = 4;
    grid.push(
        { left: offset + 0 * width + '%', right: offset + 2 * width + '%', },
        { left: offset + 1 * width + '%', right: offset + 1 * width + '%', },
        { left: offset + 2 * width + '%', right: offset + 0 * width + '%', },
    );

    legend.push({
        top: '10%',
        selectedMode: false,
    });

    dimensions.forEach((d, i) => {
        const data = markers.reduce((acc, val) => {
            return acc.concat(val[d]);
        }, []);

        const mean = calcMean(data);
        const sd = calcStandardDeviation(data, mean);

        dataset.push({
            dimensions: [ 'x', 'y' ],
            source: calcStandardNormalDistribution(mean, sd),
        });

        yAxis.push({
            show: false,
            min: 'dataMin',
            max: 'dataMax',
            gridIndex: i,
        });
        xAxis.push({
            name: label(d),
            nameLocation: 'middle',
            nameGap: 30,
            min: 'dataMin',
            max: 'dataMax',
            axisLabel: {
                formatter: (value) => units(d, value),
            },
            axisPointer: {
                show: true,
                formatter: (value) => units(d, value),
            },
            gridIndex: i,
            splitNumber: 3,
        });
        series.push({
            type: 'line',
            name: label(d),
            encode: {
                x: 'x',
                y: 'y',
            },
            smooth: true,
            showSymbol: false,
            xAxisIndex: i,
            yAxisIndex: i,
            datasetIndex: i,
        });
    });

    return {
        grid,
        xAxis,
        yAxis,
        series,
        dataset,
        legend,
    };
};

export const biological = {
    summary,
    distribution,
};
