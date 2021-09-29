import { workouts } from './data.js';
import { strokedata } from './strokedata';
import { dateTime } from '../../yoe-year1-review/datetime.js';

const fieldMap = new Map([
    [ 't', 'Time' ],
    [ 'd', 'Distance' ],
    [ 'p', 'Pace' ],
    [ 'c', 'Cals/hr' ],
    [ 'sr', 'Stroke Rate' ],
    [ 'hr', 'Heart Rate' ],
    [ 'w', 'Watts' ],
]);

export const compareStrokedata = (ids, options = {}, field = 'p') => {
    const legend = [];
    const tooltip = [];
    const xAxis = [];
    const yAxis = [];
    const series = [];
    const dataset = [];
    const dataZoom = [];
    const grid = [];

    grid.push({
        top: 30,
        bottom: 25,
        left: 20,
        right: 20,
        containLabel: true,
    });

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
                const v = field === 'p' ? dateTime.secs2mmss(val.data.p) : val.data[field];
                acc += `${val.marker} ${val.seriesName}: ${v}<br />`;
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
        gridIndex: 0,
    });

    yAxis.push({
        type: 'value',
        name: fieldMap.get(field),
        nameGap: 45,
        nameLocation: 'middle',
        inverse: field == 'p' ? true : false,
        min: 'dataMin',
        max: 'dataMax',
        axisLabel: {
            formatter: (value) => field === 'p' ? dateTime.secs2mmss(value, true) : value,
        },
        gridIndex: 0,
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
                y: field,
            },
            connectNulls: true,
            name: `Test ${i+1} ${fieldMap.get(field)}`,
            datasetIndex: i,
            showSymbol: false,
            animation: false,
            sampling: 'average',
            large: true,
        });
    });

    legend.push({
        type: 'scroll',
    });

    return {
        animation: false,
        grid,
        legend,
        dataZoom,
        tooltip,
        xAxis,
        yAxis,
        series,
        dataset,
        ...options
    };
};
