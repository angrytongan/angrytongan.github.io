import { workouts } from './data.js';
import { splits } from './splits';
import { dateTime } from '../../yoe-year1-review/datetime.js';

const compareSplits = (ids) => {
    const legend = [];
    const tooltip = [];
    const xAxis = [];
    const yAxis = [];
    const series = [];
    const dataset = [];

    legend.push({
        top: '10%',
        type: 'scroll',
    });

    xAxis.push({
        type: 'value',
        name: 'Distance',
        nameLocation: 'middle',
        nameGap: 35,
        axisLabel: {
            formatter: '{value}m',
        },
    });
    yAxis.push({
        type: 'category',
        name: 'Split',
        nameLocation: 'middle',
        nameGap: 45,
        axisLabel: {
            formatter: (value) => dateTime.secs2mmss(value, true),
        },
        inverse: true,
    });

    ids.forEach((id, i) => {
        dataset.push({
            sourceHeader: false,
            source: splits.get(id),
        });

        series.push({
            type: 'bar',
            name: `Test ${i+1} Split`,
            encode: {
                x: 'd',
                y: 't',
            },
            label: {
                show: true,
                position: 'right',
                formatter: '{@d}m',
            },
            xAxisIndex: xAxis.length-1,
            yAxisIndex: yAxis.length-1,
            datasetIndex: dataset.length-1,
        });
    });

    return {
        legend,
        tooltip,
        xAxis,
        yAxis,
        series,
        dataset,
    };
};

export {
    compareSplits
};
