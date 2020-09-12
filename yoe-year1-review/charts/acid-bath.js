'use strict';

import { dateTime } from '/yoe-year1-review/js/utils/datetime.js';

const timeline = () => {
    const xAxis = [];
    const yAxis = [];
    const series = [];
    const dataset = [];
    const legend = [];
    const tooltip = [];
    const grid = [];

    const results = {
        'Heber Canon': [
            { where: 'Transition 1',    time: dateTime.mmss2secs('0:0') },
            { where: 'SkiErg',          time: dateTime.mmss2secs('0:0') },
            { where: 'Transition 2',    time: dateTime.mmss2secs('1:53') }, // wall clock
            { where: 'Rower',           time: dateTime.mmss2secs('1:59') }, // YT timestamp: 4:51 - 4:57
            { where: 'Transition 3',    time: dateTime.mmss2secs('3:53') }, // 0:07
            { where: 'Bike',            time: dateTime.mmss2secs('4:00') }, // from wall clock
            { where: 'Transition 4',    time: dateTime.mmss2secs('5:41') }, // from wall clock
            { where: 'Finish',          time: dateTime.mmss2secs('5:41') },
        ],
        'Marston Sawyers': [
            { where: 'Transition 1',    time: dateTime.mmss2secs('0:0') },
            { where: 'SkiErg',          time: dateTime.mmss2secs('0:0') },
            { where: 'Transition 2',    time: dateTime.mmss2secs('1:42') }, // wall clock @ YT 7:27
            { where: 'Rower',           time: dateTime.mmss2secs('1:49.5') }, // extrapolation (YT 7:33 - 7:27 + cut)
            { where: 'Transition 3',    time: dateTime.mmss2secs('3:30') }, // +1:41 based on pace at YT 7:37
            { where: 'Bike',            time: dateTime.mmss2secs('3:36') }, // YT timestamp: 7:49 - 7:55
            { where: 'Transition 4',    time: dateTime.mmss2secs('5:18') },
            { where: 'Finish',          time: dateTime.mmss2secs('5:18') },
        ],
        'me': [
            { where: 'Transition 1',    time: dateTime.mmss2secs('0:0') },
            { where: 'SkiErg',          time: dateTime.mmss2secs('0:0') },
            { where: 'Transition 2',    time: dateTime.mmss2secs('1:42.6') },
            { where: 'Rower',           time: dateTime.mmss2secs('1:50.0') },
            { where: 'Transition 3',    time: dateTime.mmss2secs('3:30') },
            { where: 'Bike',            time: dateTime.mmss2secs('3:38') },
            { where: 'Transition 4',    time: dateTime.mmss2secs('5:18') },
            { where: 'Finish',          time: dateTime.mmss2secs('5:18') },
        ],
        'Mat Fraser': [
            { where: 'Transition 1',    time: dateTime.mmss2secs('0:0') },
            { where: 'SkiErg',          time: dateTime.mmss2secs('0:3') },
            { where: 'Transition 2',    time: dateTime.mmss2secs('1:41') },
            { where: 'Rower',           time: dateTime.mmss2secs('1:47') },
            { where: 'Transition 3',    time: dateTime.mmss2secs('3:15') },
            { where: 'Bike',            time: dateTime.mmss2secs('3:21') },
            { where: 'Transition 4',    time: dateTime.mmss2secs('4:52') },
            { where: 'Finish',          time: dateTime.mmss2secs('4:57') }, // official time
        ],
        'Roman Khrennikov': [
            { where: 'Transition 1',    time: dateTime.mmss2secs('0:0') },
            { where: 'SkiErg',          time: dateTime.mmss2secs('0:3') },
            { where: 'Transition 2',    time: dateTime.mmss2secs('1:37') }, // extrapolation
            { where: 'Rower',           time: dateTime.mmss2secs('1:43') }, // extrapolation
            { where: 'Transition 3',    time: dateTime.mmss2secs('3:09') }, // extrapolation
            { where: 'Bike',            time: dateTime.mmss2secs('3:14') }, // YT @ 6:21:35 - 6:21:40
            { where: 'Transition 4',    time: dateTime.mmss2secs('4:48') },
            { where: 'Finish',          time: dateTime.mmss2secs('4:54') }, // official time
        ],
    };

    const athletes = Object.keys(results);
    athletes.forEach((athlete) => {
        let lastTime = 0;
        results[athlete].forEach((r, i) => {
            if (i > 0) {
                results[athlete][i-1].duration = Math.ceil(r.time - lastTime);
            }
            lastTime = r.time;
        });
    });
    const wheres = results['Mat Fraser'].map((r) => r.where).slice(0, -1);  // drop finish
    const data = [];

    wheres.forEach((w) => {
        const foo = {
            where: w,
            durations: [],
        };

        athletes.forEach((athlete) => {
            foo.durations.push({
                athlete: athlete,
                duration: results[athlete].find((a) => a.where == w).duration,
            });
        });

        data.push(foo);
    });

    grid.push({
        left: '20%',
    });

    legend.push({
        top: '10%',
        type: 'scroll',
        selected: wheres.reduce((acc, w) => {
            acc[w] = !w.match(/Transition/);
            return acc;
        }, {}),
    });

    tooltip.push({
        formatter: ((params) => {
            if (params.length == undefined) {
                return `${params.value.athlete}<br />
                    ${params.marker} ${params.seriesName} ${dateTime.secs2mmss(params.value.duration)}`;
            }
        }),
    });

    yAxis.push({
        type: 'category',
    });
    xAxis.push({
        type: 'value',
        name: 'Time',
        nameGap: 25,
        nameLocation: 'middle',
        gridIndex: 0,
        axisLabel: {
            formatter: (value) => dateTime.secs2mmss(value),
        },
        axisPointer: {
            show: true,
            label: {
                formatter: (val) => dateTime.secs2mmss(val.value),
            },
        },
        min: dateTime.mmss2secs('0:00.0'),
        max: dateTime.mmss2secs('6:00.0'),
        gridIndex: 0,
    });

    wheres.forEach((w) => {
        dataset.push({
            dimensions: [ 'athlete', 'duration' ],
            source: data.find((d) => d.where == w).durations,
        });

        series.push({
            type: 'bar',
            name: w,
            stack: 'fred',
            encode: {
                x: 'duration',
                y: 'athlete',
            },
            datasetIndex: dataset.length-1,
            label: {
                show: !w.match(/Transition/),
                position: 'insideRight',
                formatter: (val) => dateTime.secs2mmss(val.value.duration),
            },
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

export const acidBath = {
    timeline,
};
