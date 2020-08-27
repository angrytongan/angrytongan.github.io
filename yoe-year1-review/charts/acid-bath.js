'use strict';

import { dateTime } from '/yoe-year1-review/js/utils/datetime.js';

import {
    calcMean,
    calcStandardDeviation,
    calcStandardNormalDistribution
} from '/yoe-year1-review/charts/repeated.js';

const dubai2019 = [
    { name: "Mathew Fraser", time: "4:57", },
    { name: "Willy Georges", time: "5:02", },
    { name: "Bjorgvin Karl Gudmundsson", time: "5:00", },
    { name: "Travis Mayer", time: "5:05", },
    { name: "Streat Hoerner", time: "5:05", },
    { name: "Roman Khrennikov", time: "4:54", },
    { name: "Connor Duddy", time: "5:11", },
    { name: "Jason Smith", time: "5:02", },
    { name: "Alex Kotoulas", time: "5:11", },
    { name: "Lazar Dukic", time: "4:59", },
    { name: "Ruan Duvenage", time: "5:06", },
    { name: "Matt Mcleod", time: "5:16", },
    { name: "Paul Castillo", time: "5:11", },
    { name: "Eric Carmody", time: "4:57", },
    { name: "Jeffrey Adler", time: "5:17", },
    { name: "Uldis Upenieks", time: "5:06", },
    { name: "Alec Smith", time: "5:15", },
    { name: "Brendan Willis", time: "5:15", },
    { name: "Giorgos Karavis", time: "5:05", },
    { name: "Bayden Brown", time: "5:08", },
    { name: "Frederik Aegidius", time: "5:06", },
    { name: "Justin Ahrens", time: "5:11", },
    { name: "Luke Schafer", time: "5:13", },
    { name: "Brandon Swan", time: "5:13", },
    { name: "Mohammed El Omda", time: "5:08", },
    { name: "Viktor Langsved", time: "5:05", },
    { name: "Griffin Roelle", time: "5:18", },
    { name: "Jake Marconi", time: "5:22", },
    { name: "Mitch Wagner", time: "5:22", },
    { name: "Bartek Lipka", time: "5:08", },
    { name: "Colten Mertens", time: "5:25", },
    { name: "Dane Smith", time: "5:26", },
    { name: "Tyler Tosunian", time: "5:40", },
];

const butteryBros = [
];

const dubaiLeaderboard = () => {
    const xAxis = [];
    const yAxis = [];
    const series = [];
    const dataset = [];
    const grid = [];
    const tooltip = [];

    grid.push({
        left: '25%',
    });

    tooltip.push({
        trigger: 'item',
        formatter: (params) => {
            return params.value.name + ' ' + dateTime.secs2mmss(params.value.time);
        },
    });

    xAxis.push({
        type: 'value',
        gridIndex: 0,
        axisLabel: {
            formatter: (value) => dateTime.secs2mmss(value),
        },
        min: dateTime.mmss2secs("4:40"),
        max: dateTime.mmss2secs("6:00"),
        /*
        axisPointer: {
            show: true,
            label: {
                formatter: (params) => dateTime.secs2mmss(params.value),
            },
        },
        */
    });
    yAxis.push({
        type: 'category',
        gridIndex: 0,
    });

    dataset.push({
        source: dubai2019.map((d) => {
            return {
                name: d.name,
                time: dateTime.mmss2secs(d.time),
            };
        }).sort((a, b) => a.time < b.time ? 1 : a.time > b.time ? -1 : 0),
    });

    series.push({
        type: 'bar',
        encode: {
            x: 'time',
            y: 'name',
        },
        label: {
            show: true,
            formatter: (params) => dateTime.secs2mmss(params.value.time),
            position: 'insideRight',
        },
    });

    return {
        xAxis,
        yAxis,
        dataset,
        series,
        grid,
        tooltip,
    };
};

const dubaiNormalDistribution = () => {
    const xAxis = [];
    const yAxis = [];
    const dataset = [];
    const series = [];
    const tooltip = [];
    const legend = [];
    const grid = [];

    const width = 55;

    legend.push({
        top: '10%',
    });

    grid.push({
        left: '20%',
        right: '20%',
    });

    const mean = calcMean(dubai2019.map((d) => dateTime.mmss2secs(d.time)));
    const sd = calcStandardDeviation(dubai2019.map((d) => dateTime.mmss2secs(d.time)), mean);

    yAxis.push({
        show: false,
        min: 'dataMin',
        max: 'dataMax',
    });

    xAxis.push({
        name: 'Time',
        nameGap: 30,
        nameLocation: 'middle',
        min: 'dataMin',
        max: 'dataMax',
        axisPointer: {
            show: true,
            label: {
                formatter: (params) => dateTime.secs2mmss(params.value),
            },
        },
        axisLabel: {
            formatter: (value) => dateTime.secs2mmss(value),
        },
        interval: sd,
        inverse: true,
    });

    dataset.push({
        dimensions: [ 'x', 'y' ],
        source: calcStandardNormalDistribution(mean, sd),
    });

    series.push({
        type: 'line',
        smooth: true,
        encode: {
            x: 'x',
            y: 'y',
        },
        gridIndex: 0,
    });

    return {
        xAxis,
        yAxis,
        dataset,
        series,
        legend,
        grid,
    };
};

export const acidBath = {
    dubaiLeaderboard,
    dubaiNormalDistribution,
};
