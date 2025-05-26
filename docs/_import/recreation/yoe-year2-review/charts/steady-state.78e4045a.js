import { time } from "../../../../_npm/echarts@5.6.0/dist/echarts.esm.min.js.43ee27f9.js";
import { workouts as year1 } from "../../yoe-year1-review/charts/data.a8f20219.js";
import { workouts as year2 } from "./data.761dd875.js";
import { dateTime } from "../../yoe-year1-review/datetime.857764ac.js";

export const steadyState = () => {
    const grid = [];
    const tooltip = [];
    const legend = [];
    const xAxis = [];
    const yAxis = [];
    const dataset = [];
    const series = [];

    const data = [
        ...year2
            .filter((w) => w.type === 'Endurance')
            .filter((w) => w.apparatus === 'AirDyne' || w.apparatus === 'BikeErg')
            .filter((w) => w.distance !== 0)
            .map((w) => {
                return {
                    date: w.date,
                    distance: w.distance,
                    workTime: w.workTime,
                    speed: w.distance / w.workTime * 3.6,
                    apparatus: w.apparatus,
                };
            }),

        ...year1
            .filter((w) => w.type === 'Endurance')
            .filter((w) => w.apparatus === 'AirDyne' || w.apparatus === 'BikeErg')
            .filter((w) => w.distance !== "0")
            .map((w) => {
                const workTime = w.workTime.split(':').reduce((acc, val) => acc * 60 + Number(val), 0);
                const distance = Number(w.distance);
                return {
                    date: w.date,
                    distance,
                    workTime,
                    speed: distance / workTime * 3.6,
                    apparatus: w.apparatus,
                };
            })
    ];

    grid.push({
        top: 40,
        left: 20,
        right: 20,
        bottom: 30,
        containLabel: true,
    });

    tooltip.push({
        trigger: 'item',
        formatter: (params) => {
            if (params.componentType !== 'markArea') {
                const distance = params.data.distance.toLocaleString();
                const time = dateTime.secs2mmss(params.data.workTime, true);

                return `${params.marker} ${params.data.apparatus}<br />` +
                    `${params.data.date}<br />${params.data.speed.toFixed(1)}km/h<br />` +
                    `${distance}m / ${time}`;
            }
            return '';
        }
    });
    legend.push({
        top: 0,
    });

    xAxis.push({
        type: 'time',
        name: 'Date',
        nameLocation: 'middle',
        nameGap: 30,
        min: '2019-09-17',
        max: '2021-09-30',
        axisLabel: {
            formatter: (value) => time.format(value, '{yyyy}-{MM}-{dd}', false),
        },
        gridIndex: grid.length-1,
    });

    yAxis.push({
        type: 'value',
        name: 'Speed (km/h)',
        nameLocation: 'middle',
        nameGap: 30,
        min: 'dataMin',
        max: 'dataMax',
        gridIndex: grid.length-1,
        axisLabel: {
            formatter: (value) => value.toFixed(0),
        },
    });

    [ 'AirDyne', 'BikeErg' ].forEach((apparatus) => {
        dataset.push({
            sourceHeader: false,
            source: data.filter((w) => w.apparatus === apparatus),
        });

        series.push({
            type: 'scatter',
            name: apparatus,
            encode: {
                x: 'date',
                y: 'speed',
            },
            xAxisIndex: xAxis.length-1,
            yAxisIndex: yAxis.length-1,
            datasetIndex: dataset.length-1,

            markArea: {
                data: [
                    [
                        {
                            name: 'Year 1',
                            xAxis: '2019-09-17',
                            itemStyle: {
                                color: 'rgba(128, 0, 0, 0.1)',
                            },
                        },
                        { xAxis: '2020-09-17', },
                    ],
                    [
                        { name: 'Year 2', xAxis: '2020-09-17',
                            itemStyle: {
                                color: 'rgba(0, 128, 0, 0.1)',
                            },
                        },
                        { xAxis: '2021-09-30', },
                    ],
                ],
            },
        });
    });

    return {
        animation: false,
        grid,
        tooltip,
        legend,
        xAxis,
        yAxis,
        dataset,
        series,
    };
};
