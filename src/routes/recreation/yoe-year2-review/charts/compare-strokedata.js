import { workouts } from './data.js';
import { strokedata } from './strokedata';
import { dateTime } from '../../yoe-year1-review/datetime.js';

export const compareStrokedata = (ids, options = {}) => {
    const legend = [];
    const tooltip = [];
    const xAxis = [];
    const yAxis = [];
    const series = [];
    const dataset = [];
    const dataZoom = [];

    tooltip.push({
        trigger: 'axis',
        axisPointer: {
            type: 'cross',
            snap: true,
            label: {
                formatter: (params) => {
                    return dateTime.secs2mmss(params.value);
                },
            },
        },
        formatter: (params) => {
            return params.reduce((acc, val) => {
                acc += `${val.marker} ${val.seriesName}: ${dateTime.secs2mmss(val.data.p)}<br />`;
                return acc;
            }, '');
        },
    });

    dataZoom.push({
        type: 'slider',
    });

    xAxis.push({
        type: 'value',
        name: 'Time',
        nameGap: 50,
        nameLocation: 'middle',
        axisLabel: {
            formatter: (value) => dateTime.secs2mmss(value),
        },
    });

    yAxis.push({
        type: 'value',
        name: 'Pace',
        nameGap: 45,
        nameLocation: 'middle',
        inverse: true,
        min: 'dataMin',
        max: 'dataMax',
        axisLabel: {
            formatter: (value) => dateTime.secs2mmss(value, true),
        },
    });

    ids.forEach((id, i) => {
        dataset.push({
            sourceHeader: false,
            source: strokedata.get(id),
        });

        series.push({
            type: 'line',
            encode: {
                x: 't',
                y: 'p',
            },
            connectNulls: true,
            name: `Test ${i+1} pace`,
            datasetIndex: i,
            showSymbol: false,
            animation: false,
            sampling: 'average',
            large: true,
        });
    });

    legend.push({
        top: '10%',
        type: 'scroll',
    });

    return {
        animation: false,
        legend,
        dataZoom,
        tooltip,
        xAxis,
        yAxis,
        series,
        dataset,
        ...options
    }
};
