import { workouts } from "./data.761dd875.js";

export const bikeergAirdyne = () => {
    const legend = [];
    const tooltip = [];
    const xAxis = [];
    const yAxis = [];
    const series = [];
    const dataset = [];
    const grid = [];

    const apparatus = workouts
        .filter((w) => w.type === 'Endurance')
        .filter((w) => w.apparatus === 'AirDyne' || w.apparatus === 'BikeErg')
        .filter((w) => w.workTime === 2700)
        .reduce((acc, val) => {
            const v = acc.get(val.apparatus);
            if (v === undefined) {
                acc.set(val.apparatus,
                    [
                        {
                            calories: val.calories,
                            distance: val.distance,
                            num: 1,
                        },
                    ]);
            } else {
                const existing = v.find((_v) => v.calories == val.calories && v.distance == val.distance);
                if (existing !== undefined) {
                    existing.num += 1;
                } else {
                    v.push({
                        calories: val.calories,
                        distance: val.distance,
                        num: 1,
                    });
                }
            }

            return acc;
        }, new Map());

    grid.push({
        top: 30,
        left: 20,
        right: 20,
        bottom: 20,
        containLabel: true,
    });

    tooltip.push({
        formatter: (params) => {
            return `${params.marker} ${params.data.calories} calories`;
        },
    });
    legend.push({});

    xAxis.push({
        type: 'value',
        name: 'Distance',
        nameLocation: 'middle',
        nameGap: 30,
        axisLabel: {
            formatter: (value) => `${value / 1000}km`,
        },
        gridIndex: grid.length-1,
        min: 'dataMin',
        max: 'dataMax',
    });

    yAxis.push({
        type: 'value',
        name: 'Calories',
        nameLocation: 'middle',
        nameGap: 35,
        gridIndex: grid.length-1,
        min: 'dataMin',
        max: 'dataMax',
    });

    apparatus.forEach((w, apparatus) => {
        dataset.push({
            sourceHeader: false,
            source: w,
        });

        series.push({
            type: 'scatter',
            name: apparatus,
            encode: {
                x: 'distance',
                y: 'calories',
            },
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
        grid,
    };
};
