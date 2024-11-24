import { time } from "../../../../_npm/echarts@5.5.1/dist/echarts.esm.min.js.aaf512c2.js";
import { workouts } from "./data.761dd875.js";

export const variationWorkoutByDate = () => {
    const grid = [];
    const legend = [];
    const xAxis = [];
    const yAxis = [];
    const series = [];
    const dataset = [];

    legend.push({});

    grid.push({
        top: 0,
        left: 0,
        right: 10,
        bottom: 20,
        containLabel: true,
    });

    xAxis.push({
        type: 'time',
        name: 'Date',
        nameGap: 25,
        nameLocation: 'middle',
        axisLabel: {
            formatter: (value) => time.format(value, '{yyyy}-{MM}-{dd}', false),
        },
        gridIndex: 0,
        axisLine: {
            show: true,
        },
        axisTick: {
            show: true,
        },
    });

    yAxis.push({
        type: 'category',
        inverse: true,
    });

    dataset.push({
        sourceHeader: false,
        source: workouts,
    });

    series.push({
        type: 'scatter',
        encode: {
            x: 'date',
            y: 'type',
        },
        xAxisIndex: xAxis.length-1,
        yAxisIndex: yAxis.length-1,
        datasetIndex: dataset.length-1,
    });

    return {
        animation: false,
        legend,
        xAxis,
        yAxis,
        series,
        dataset,
        grid
    };
};

export const variationWorkoutByPhase = () => {
    const tooltip = [];
    const legend = [];
    const series = [];
    const dataset = [];
    const grid = [];
    const title = [];

    const phases = workouts.reduce((acc, val) => {
        const typeMap = acc.get(val.phase);

        if (typeMap === undefined) {
            acc.set(val.phase, new Map([ [ val.type, 1 ] ]));
        } else {
            const count = typeMap.get(val.type);

            if (count === undefined) {
                typeMap.set(val.type, 1);
            } else {
                typeMap.set(val.type, count+1);
            }
        }
        return acc;
    }, new Map());

    tooltip.push({});
    legend.push({
    });

    grid.push({
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
    });

    const graphSize = 25;

    let i = 0;
    phases.forEach((v, k) => {
        const left = (i * graphSize) + '%';
        const right = (3 - i) * graphSize + '%';

        title.push({
            subtext: `Phase ${k}`,
            textAlign: 'center',
            left: i * graphSize + (graphSize/2) + '%',
            top: '80%',
        });

        dataset.push({
            sourceHeader: false,
            source: [ ...v ].map((d) => {
                return {
                    name: d[0],
                    value: d[1],
                }
            }),
        });

        series.push({
            type: 'pie',
            datasetIndex: dataset.length-1,
            name: `Phase ${k}`,

            top: 30,
            left,
            right,
            center: [ '50%', '50%' ],
            label: {
                show: true,
                position: 'inside',
            },
        });

        i++;
    });

    return {
        animation: false,
        title,
        tooltip,
        legend,
        series,
        dataset,
        grid,
    };
};
