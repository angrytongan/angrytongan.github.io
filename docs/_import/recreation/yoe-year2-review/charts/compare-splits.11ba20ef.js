import { splits } from "./splits.3646e753.js";
import { dateTime } from "../../yoe-year1-review/datetime.f56b99f7.js";

const compareSplits = (ids) => {
    const legend = [];
    const tooltip = [];
    const xAxis = [];
    const yAxis = [];
    const series = [];
    const dataset = [];
    const grid = [];

    legend.push({
        type: 'scroll',
    });

    /*
     * Distances.
     */
    grid.push({
        top: 30,
        bottom: 25,
        left: 10,
        right: '52%',
        containLabel: true,
    });

    xAxis.push({
        type: 'value',
        name: 'Distance',
        nameLocation: 'middle',
        nameGap: 35,
        axisLabel: {
            formatter: '{value}m',
            rotate: 45,
            showMinLabel: false,
        },
        gridIndex: grid.length-1,
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
        gridIndex: grid.length-1,
    });

    ids.forEach((id, i) => {
        dataset.push({
            sourceHeader: false,
            source: splits.get(id),
        });

        series.push({
            type: 'bar',
            name: `Test ${i+1}`,
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

    /*
     * Pace.
     */
    grid.push({
        top: 30,
        bottom: 25,
        left: '52%',
        right: 30,
        containLabel: true,
    });

    xAxis.push({
        type: 'value',
        name: 'Pace',
        nameLocation: 'middle',
        nameGap: 35,
        axisLabel: {
            formatter: (value) => dateTime.secs2mmss(value, true),
            rotate: 45,
            showMinLabel: false,
        },
        gridIndex: grid.length-1,
    });
    yAxis.push({
        type: 'category',
        show: false,
        inverse: true,
        gridIndex: grid.length-1,
    });

    ids.forEach((id, i) => {
        dataset.push({
            sourceHeader: false,
            source: splits.get(id),
        });

        series.push({
            type: 'bar',
            name: `Test ${i+1}`,
            encode: {
                x: 'p',
                y: 't',
            },
            label: {
                show: true,
                position: 'right',
                formatter: (params) => dateTime.secs2mmss(params.data.p, true),
            },
            xAxisIndex: xAxis.length-1,
            yAxisIndex: yAxis.length-1,
            datasetIndex: dataset.length-1,
        });
    });

    return {
        grid,
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
