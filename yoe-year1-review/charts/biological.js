'use strict';

import { dateTime } from '/yoe-year1-review/js/utils/datetime.js';
import {
    calcMean,
    calcStandardDeviation,
    calcStandardNormalDistribution,
} from '/yoe-year1-review/charts/repeated.js';

const markers = [
    { date: '2020-09-06', haemoglobin: 150, rhr: 68, weight: 100.0, systolic: 128, diastolic: 82, low: 128, high: 82  },
    { date: '2020-08-23', haemoglobin: 143, rhr: 70, weight: 100.0, systolic: 133, diastolic: 80, low: 133, high: 80  },
    { date: '2020-08-09', haemoglobin: 155, rhr: 64, weight: 99.8, systolic: 127, diastolic: 76, low: 127, high: 76  },
    { date: '2020-07-26', haemoglobin: 151, rhr: 68, weight: 100.6, systolic: 121, diastolic: 71, low: 121, high: 71  },
    { date: '2020-06-23', haemoglobin: 146, rhr: 64, weight: 100.4, systolic: 151, diastolic: 88, low: 151, high: 88  },
    { date: '2020-06-07', haemoglobin: 142, rhr: 68, weight: 100.1, systolic: 150, diastolic: 83, low: 150, high: 83  },
    { date: '2020-05-24', haemoglobin: 154, rhr: 60, weight: 100.5, systolic: 133, diastolic: 82, low: 133, high: 82  },
    { date: '2020-05-03', haemoglobin: 147, rhr: 64, weight: 100.1, systolic: 168, diastolic: 82, low: 168, high: 82  },
    { date: '2020-04-19', haemoglobin: 150, rhr: 62, weight: 100.9, systolic: 150, diastolic: 87, low: 150, high: 87  },
    { date: '2020-04-05', haemoglobin: 150, rhr: 68, weight: 101.2, systolic: 156, diastolic: 90, low: 156, high: 90  },
    { date: '2020-03-22', haemoglobin: 150, rhr: 64, weight: 100.9, systolic: 154, diastolic: 93, low: 154, high: 93  },
    { date: '2020-03-08', haemoglobin: 142, rhr: 72, weight: 101.0, systolic: 159, diastolic: 94, low: 159, high: 94  },
    { date: '2020-02-23', haemoglobin: 142, rhr: 62, weight: 101.2, systolic: 124, diastolic: 79, low: 124, high: 79  },
    { date: '2020-02-02', haemoglobin: 139, rhr: 64, weight: 101.0, systolic: 127, diastolic: 82, low: 127, high: 82  },
    { date: '2020-01-19', haemoglobin: 150, rhr: 64, weight: 101.7, systolic: 120, diastolic: 80, low: 120, high: 80  },
    { date: '2020-01-05', haemoglobin: 150, rhr: 62, weight: 101.9, systolic: 114, diastolic: 74, low: 114, high: 74  },
    { date: '2019-12-22', haemoglobin: 145, rhr: 62, weight: 102.4, systolic: 124, diastolic: 81, low: 124, high: 81  },
    { date: '2019-12-08', haemoglobin: 135, rhr: 66, weight: 101.7, systolic: 136, diastolic: 83, low: 136, high: 83  },
    { date: '2019-11-24', haemoglobin: 141, rhr: 70, weight: 101.0, systolic: 133, diastolic: 78, low: 133, high: 78  },
    { date: '2019-11-10', haemoglobin: 145, rhr: 64, weight: 101.5, systolic: 146, diastolic: 89, low: 146, high: 89  },
    { date: '2019-10-20', haemoglobin: 148, rhr: 66, weight: 101.8, systolic: 144, diastolic: 93, low: 144, high: 89  },

].sort((a, b) => a.date < b.date ? -1 : a.date > b.date ? 1 : 0);

const label = (metric) => {
    switch (metric) {
        case 'haemoglobin': return 'Haemoglobin';
        case 'rhr': return 'Resting heart rate';
        case 'weight': return 'Bodyweight';
        case 'bp': return 'Blood pressure';
    }
};
const units = (metric, value) => {
    switch (metric) {
        case 'haemoglobin': return `${value}Hb`;
        case 'rhr': return `${value}bpm`;
        case 'weight': return `${value.toFixed(1)}kg`;
        case 'bp': return `${value}mmHg`;
    }
};
const bounds = {
    haemoglobin: { min: 130, max: 160 },
    rhr: { min: 50, max: 80 },
    weight: { min: 90, max: 110 },
    bp: { min: 60, max: 200 },
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
                return acc + (val.seriesType == 'candlestick' ?
                    `${val.marker} ${val.value.systolic} / ${val.value.diastolic}<br />` :
                    `${val.marker} ${units(val.dimensionNames[val.encode.y[0]], val.value[val.dimensionNames[val.encode.y[0]]])}<br />`);
            }, '');
        }
    });

    const dimensions = [ 'weight', 'rhr', 'haemoglobin', 'systolic', 'diastolic', 'high', 'low' ];
    dataset.push({
        dimensions: [ 'date', ...dimensions ],
        source: markers,
    });

    grid.push(
        { bottom: '54%', },
        { top: '54%', },
    );

    xAxis.push({
        type: 'category',
        gridIndex: 0,
        axisLabel: {
            show: false,
        },
        axisLine: {
            show: false,
        },
        axisTick: {
            show: false,
        },
    });

    [ 'weight', 'haemoglobin' ].forEach((metric) => {
        yAxis.push({
            type: 'value',
            //name: label(metric),
            axisLabel: {
                formatter: (value) => units(metric, value),
            },
            min: bounds[metric].min,
            max: bounds[metric].max,
            splitLine: {
                show: metric == 'weight',
            },
            gridIndex: 0,
            splitNumber: 3,
        });

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

    xAxis.push({
        type: 'category',
        name: 'Date',
        nameLocation: 'center',
        nameGap: 25,
        gridIndex: 1,
    });
    yAxis.push({
        type: 'value',
        axisLabel: {
            formatter: (value) => units('bp', value),
        },
        gridIndex: 1,
        min: bounds['bp'].min,
        max: bounds['bp'].max,
        splitNumber: 3,
    });
    series.push({
        type: 'candlestick',
        name: 'Blood pressure',
        encode: {
            x: 'date',
            y: [ 'diastolic', 'systolic', 'low', 'high' ],
        },
        yAxisIndex: yAxis.length-1,
        xAxisIndex: xAxis.length-1,
        z: 0,
    });

    yAxis.push({
        type: 'value',
        axisLabel: {
            formatter: (value) => units('rhr', value),
        },
        min: bounds['rhr'].min,
        max: bounds['rhr'].max,
        splitLine: {
            show: false,
        },
        gridIndex: 1,
        splitNumber: 3,
    });
    series.push({
        type: 'line',
        name: label('rhr'),
        encode: {
            x: 'date',
            y: 'rhr',
        },
        connectNulls: true,
        symbolSize: 10,
        xAxisIndex: xAxis.length-1,
        yAxisIndex: yAxis.length-1,
    });

    legend.push({
        top: '7%',
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
