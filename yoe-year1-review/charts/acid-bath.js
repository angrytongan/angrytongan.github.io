'use strict';

import { dateTime } from '/yoe-year1-review/js/utils/datetime.js';

const dubai2019 = [
    { name: "Roman Khrennikov", time: "4:54", },
    { name: "Mathew Fraser", time: "4:57", },
    { name: "Eric Carmody", time: "4:57", },
    { name: "Lazar Dukic", time: "4:59", },
    { name: "Bjorgvin Karl Gudmundsson", time: "5:00", },

    { name: "Jason Smith", time: "5:02", },
    { name: "Willy Georges", time: "5:02", },
    { name: "Travis Mayer", time: "5:05", },
    { name: "Streat Hoerner", time: "5:05", },
    { name: "Giorgos Karavis", time: "5:05", },
    { name: "Viktor Langsved", time: "5:05", },
    { name: "Ruan Duvenage", time: "5:06", },
    { name: "Frederik Aegidius", time: "5:06", },
    { name: "Uldis Upenieks", time: "5:06", },
    { name: "Bartek Lipka", time: "5:08", },
    { name: "Bayden Brown", time: "5:08", },
    { name: "Mohammed El Omda", time: "5:08", },
    { name: "Connor Duddy", time: "5:11", },
    { name: "Alex Kotoulas", time: "5:11", },
    { name: "Paul Castillo", time: "5:11", },
    { name: "Justin Ahrens", time: "5:11", },
    { name: "Luke Schafer", time: "5:13", },
    { name: "Brandon Swan", time: "5:13", },
    { name: "Alec Smith", time: "5:15", },
    { name: "Brendan Willis", time: "5:15", },
    { name: "Matt Mcleod", time: "5:16", },
    { name: "Jeffrey Adler", time: "5:17", },
    { name: "Griffin Roelle", time: "5:18", },
    { name: "Jake Marconi", time: "5:22", },
    { name: "Mitch Wagner", time: "5:22", },
    { name: "Colten Mertens", time: "5:25", },
    { name: "Dane Smith", time: "5:26", },
    { name: "Tyler Tosunian", time: "5:40", },

];

const butteryBros = [
    { name: "Heber Cannon", time: "5:42", },
    { name: "Marston Sawyers", time: "5:18", },
];

const me = [
    { name: '/u/angrytongan', time: "5:15", },
];

const placings = (adjustForAirDyne = false) => {
    const xAxis = [];
    const yAxis = [];
    const series = [];
    const legend = [];
    const tooltip = [];
    const grid = [];

    const data = [
        ...dubai2019.map((d) => ({
            name: d.name,
            time: dateTime.mmss2secs(d.time),
        })),
        ...butteryBros.map((bb) => ({
            name: bb.name,
            time: dateTime.mmss2secs(bb.time),
            itemStyle: {
                color: 'rgba(41, 69, 84, 1.0)', // 0.16, 0.27, 0.33
            },
        })),
        ...me.map((_m) => ({
            name: _m.name,
            time: dateTime.mmss2secs(_m.time),
            itemStyle: {
                color: 'rgba(73, 162, 170, 1)', // 0.2863, 0.6353, 0.6667
            },
        })),
    ].sort((a, b) => a.time < b.time ? 1 : a.time > b.time ? -1 : 0);

    /*
     * XXX TODO adjust for AirDyne calcs here
     */

    legend.push({
        top: '10%',
    });

    tooltip.push({
        trigger: 'item',
        formatter: (params) => {
            return `${params.marker}${dateTime.secs2mmss(params.value)} ${params.name}`;
        },
    });

    grid.push({
        left: '10%',
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
        min: dateTime.mmss2secs("4:50"),
        max: dateTime.mmss2secs("5:50"),
        gridIndex: 0,
    });
    yAxis.push({
        type: 'category',
        name: 'Athlete',
        nameLocation: 'middle',
        gridIndex: 0,
        data: data.map((d) => d.name),
        show: true,
        axisLine: {
            show: false,
        },
        axisTick: {
            show: false,
        },
        axisLabel: {
            show: false,
        },
        gridIndex: 0,
    });

    series.push({
        type: 'bar',
        data: data.map((d) => ({
                value: d.time,
                itemStyle: d.itemStyle,
        })),
        label: {
            show: false,
            formatter: (params) => dateTime.secs2mmss(params.value),
            position: 'right',
        },
    });

    return {
        grid,
        xAxis,
        yAxis,
        series,
        grid,
        legend,
        tooltip,
    };
};

export const acidBath = {
    placingsRaw: () => placings(false),
    placingsAdjusted: () => placings(true),

};
