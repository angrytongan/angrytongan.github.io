'use strict';

/*
 * XXX TODO standard deviations
 */

const markers = [
    { date: '2020-08-09', systolic: 127, diastolic: 76, haemoglobin: 155, rhr: 60, weight: 99.8 },
    { date: '2020-07-26', systolic: 121, diastolic: 71, haemoglobin: 151, rhr: 58, weight: 100.6 },
    { date: '2020-06-23', systolic: 131, diastolic: 82, haemoglobin: 146, rhr: 60, weight: 100.4 },
    { date: '2020-06-07', systolic: 140, diastolic: 83, haemoglobin: 142, rhr: 68, weight: 100.1 },
    { date: '2020-05-24', systolic: 133, diastolic: 82, haemoglobin: 154, rhr: 60, weight: 100.5 },
    { date: '2020-05-03', systolic: 138, diastolic: 82, haemoglobin: 147, rhr: 64, weight: 100.1 },
    { date: '2020-04-19', systolic: 130, diastolic: 87, haemoglobin: 150, rhr: 60, weight: 100.9 },
    { date: '2020-04-05', systolic: 136, diastolic: 80, haemoglobin: 150, rhr: 60, weight: 101.2 },
    { date: '2020-03-22', systolic: 134, diastolic: 83, haemoglobin: 150, rhr: 64, weight: 100.9 },
    { date: '2020-03-08', systolic: 159, diastolic: 94, haemoglobin: 142, rhr: 72, weight: 101.0 },
    { date: '2020-02-23', systolic: 124, diastolic: 79, haemoglobin: 142, rhr: 62, },
    { date: '2020-02-02', systolic: 127, diastolic: 82, haemoglobin: 139, rhr: 64, },
    { date: '2020-01-19', systolic: 120, diastolic: 80, haemoglobin: 150, rhr: 64, },
    { date: '2020-01-05', systolic: 114, diastolic: 74, haemoglobin: 150, rhr: 62, },
    { date: '2019-12-22', systolic: 124, diastolic: 81, haemoglobin: 145, rhr: 62, },
    { date: '2019-12-08', systolic: 136, diastolic: 83, haemoglobin: 135, rhr: 60, },
    { date: '2019-11-24', systolic: 133, diastolic: 78, haemoglobin: 141, },
    { date: '2019-11-10', systolic: 136, diastolic: 82, haemoglobin: 145, rhr: 60, },
    { date: '2019-10-20', systolic: 130, diastolic: 80, haemoglobin: 148, rhr: 66, },

    // XXX too much data, try and pare it down
    // { date: '2019-09-29', weight: 102.0 },
    { date: '2019-09-30', weight: 101.4 },
    // { date: '2019-10-01', weight: 102.4 },
    { date: '2019-10-02', weight: 102.8 },
    // { date: '2019-10-03', weight: 102.4 },
    { date: '2019-10-05', weight: 102.5 },
    // { date: '2019-10-10', weight: 102.2 },
    { date: '2019-10-11', weight: 102.4 },
    // { date: '2019-10-11', weight: 102.8 },
    { date: '2019-10-12', weight: 102.6 },
    // { date: '2019-10-13', weight: 102.5 },
    { date: '2019-10-14', weight: 102.2 },
    // { date: '2019-10-16', weight: 101.5 },
    { date: '2019-10-17', weight: 101.8 },
    // { date: '2019-10-18', weight: 101.7 },
    { date: '2019-10-19', weight: 101.7 },
    // { date: '2019-10-19', weight: 100.8 },
    { date: '2019-10-20', weight: 101.8 },
    // { date: '2019-10-21', weight: 102.6 },
    { date: '2019-10-22', weight: 102.6 },
    // { date: '2019-10-23', weight: 102.0 },
    { date: '2019-10-24', weight: 101.3 },
    // { date: '2019-10-25', weight: 101.1 },
    { date: '2019-10-27', weight: 99.9 },
    // { date: '2019-10-27', weight: 99.9 },
    { date: '2019-10-28', weight: 101.4 },
    // { date: '2019-10-29', weight: 100.6 },
    { date: '2019-10-30', weight: 100.6 },
    // { date: '2019-10-31', weight: 100.2 },
    { date: '2019-10-02', weight: 101.8 },
    // { date: '2019-11-03', weight: 101.2 },
    { date: '2019-11-04', weight: 100.7 },
    // { date: '2019-11-05', weight: 100.7 },
    { date: '2019-11-07', weight: 100.4 },
    // { date: '2019-11-08', weight: 100.5 },
    { date: '2019-11-09', weight: 101.5 },
    // { date: '2019-11-10', weight: 101.4 },
    { date: '2019-11-12', weight: 102.1 },
    // { date: '2019-11-13', weight: 101.3 },
    { date: '2019-11-14', weight: 101.0 },
    // { date: '2019-11-16', weight: 100.7 },
    { date: '2019-11-17', weight: 100.3 },
    // { date: '2019-11-18', weight: 101.6 },
    { date: '2019-11-21', weight: 101.0 },
    // { date: '2019-11-22', weight: 101.4 },
    { date: '2019-11-22', weight: 101.0 },
    // { date: '2019-11-23', weight: 100.5 },
    { date: '2019-11-24', weight: 101.0 },
    // { date: '2019-11-25', weight: 102.1 },
    { date: '2019-11-26', weight: 101.9 },
    // { date: '2019-11-28', weight: 101.5 },
    { date: '2019-12-01', weight: 100.7 },
    // { date: '2019-12-03', weight: 102.0 },
    { date: '2019-12-04', weight: 101.7 },
    // { date: '2019-12-05', weight: 100.7 },
    { date: '2019-12-11', weight: 101.7 },
    // { date: '2019-12-13', weight: 102.0 },
    { date: '2019-12-14', weight: 102.0 },
    // { date: '2019-12-15', weight: 102.4 },
    { date: '2019-12-19', weight: 101.9 },
    // { date: '2019-12-20', weight: 101.9 },
    { date: '2019-12-24', weight: 102.4 },
    // { date: '2019-12-25', weight: 102.6 },
    { date: '2019-12-28', weight: 103.4 },
    // { date: '2019-12-31', weight: 101.6 },
    { date: '2020-01-03', weight: 101.9 },
    // { date: '2020-01-04', weight: 102.0 },
    { date: '2020-01-05', weight: 101.9 },
    // { date: '2020-01-07', weight: 101.8 },
    { date: '2020-01-08', weight: 102.1 },
    // { date: '2020-01-19', weight: 101.1 },
    { date: '2020-01-21', weight: 101.7 },
    // { date: '2020-01-26', weight: 101.2 },
    { date: '2020-01-27', weight: 101.7 },
    // { date: '2020-01-30', weight: 101.0 },
    { date: '2020-02-08', weight: 101.0 },
    // { date: '2020-02-09', weight: 100.4 },
    { date: '2020-02-11', weight: 101.2 },
].sort((a, b) => a.date < b.date ? -1 : a.date > b.date ? 1 : 0);

const seriesName = (s) => {
    const names = {
        rhr: 'Resting heart rate',
        systolic: 'Systolic pressure',
        diastolic: 'Diastolic pressure',
        weight: 'Weight',
        haemoglobin: 'Haemoglobin',
    };

    return names[s];
};

const genericOptions = (o) => {
    const legend = [];
    const tooltip = [];
    const xAxis = [];
    const yAxis = [];
    const series = [];
    const dataset = [];

    tooltip.push({
        trigger: 'item',
        axisPointer: {
            snap: true,
        },
        ...o.tooltip,
    });

    xAxis.push({
        type: 'time',
        name: 'Date',
        nameGap: 40,
        nameLocation: 'middle',
        min: '2019-09-16',
        max: '2020-09-16'
    });

    yAxis.push({
        type: 'value',
        name: o.yAxis.name,
        nameGap: 40,
        nameLocation: 'middle',
        min: o.yAxis.min || 'dataMin',
        max: o.yAxis.max || 'dataMax',
    });

    dataset.push({
        dimensions: o.dataset.dimensions,
        source: markers,
    });

    const keys = [ ...o.dataset.dimensions ];
    keys.splice(keys.findIndex((k) => k == 'date'), 1);

    keys.forEach((y) => {
        series.push({
            type: 'line',
            encode: {
                x: 'date',
                y: y,
            },
            connectNulls: true,
            symbolSize: 10,
            name: seriesName(y),
        });
    });

    legend.push({
        top: '10%',
    });

    return {
        legend,
        tooltip,
        xAxis,
        yAxis,
        series,
        dataset,
    }
};

const bloodPressureOptions = () => {
    const o = genericOptions({
        title: {
            text: 'Blood pressure',
        },
        yAxis: {
            name: 'Blood pressure (mmHg)',
            min: 60,
            max: 180,
        },
        dataset: {
            dimensions: [ 'date', 'systolic', 'diastolic' ],
        },
        tooltip: {
            formatter: (params) => {
                return `${params.value.date}<br />${params.value.systolic} / ${params.value.diastolic}`;
            },
        },
    });

    return o;
};

const restingHeartRateOptions = () => {
    return genericOptions({
        title: {
            text: 'Resting heart rate',
        },
        yAxis: {
            name: 'Resting heart rate (bpm)',
            min: 30,
            max: 100,
        },
        dataset: {
            dimensions: [ 'date', 'rhr' ],
        },
        tooltip: {
            formatter: (params) => {
                return `${params.value.date}<br />${params.value.rhr}bpm`;
            },
        },
    });
};

const weightOptions = () => {
    return genericOptions({
        title: {
            text: 'Weight',
        },
        yAxis: {
            name: 'Weight (kg)',
            min: 95,
            max: 105,
        },
        dataset: {
            dimensions: [ 'date', 'weight' ],
        },
        tooltip: {
            formatter: (params) => {
                return `${params.value.date}<br />${params.value.weight}kg`;
            },
        },
    });
};

const haemoglobinOptions = () => {
    return genericOptions({
        title: {
            text: 'Haemoglobin',
        },
        yAxis: {
            name: 'Haemoglobin (g/L)',
            min: 100,
            max: 200,
        },
        dataset: {
            dimensions: [ 'date', 'haemoglobin' ],
        },
        tooltip: {
            formatter: (params) => {
                return `${params.value.date}<br />${params.value.haemoglobin}g/L`;
            },
        },
    });
};

export const biologicalMarkers = {
    bloodPressureOptions,
    restingHeartRateOptions,
    weightOptions,
    haemoglobinOptions,
};
