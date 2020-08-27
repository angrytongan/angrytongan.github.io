'use strict';

import { dateTime } from '/yoe-year1-review/js/utils/datetime.js';

/*
 * :g/[0-9][0-9]\.[0-9]^I^I^I^I/d
 * :,108s/^I/, aab: /
 * :,108s/^I/, aabRpm: /
 * :,108s/^I/, ad6: /
 * :,108s/^I/, ad6Rpm: /
 * :,108s/^/    { speed: /
 * :%s/ $//g
 */
const data = [
    { speed: 10.1, watts: { ad6: 15 }, rpm: { } },
    { speed: 10.5, watts: { aab: 16 }, rpm: { aab: 17 } },
    { speed: 10.6, watts: { ad6: 17 }, rpm: { } },
    { speed: 11.1, watts: { ad6: 18 }, rpm: { ad6: 20 } },
    { speed: 11.5, watts: { ad6: 20 }, rpm: { } },
    { speed: 12.0, watts: { ad6: 21 }, rpm: { } },
    { speed: 12.3, watts: { aab: 21 }, rpm: { aab: 20 } },
    { speed: 12.9, watts: { aab: 23 }, rpm: { aab: 21 } },
    { speed: 13.0, watts: { ad6: 26 }, rpm: { } },
    { speed: 13.5, watts: { ad6: 28 }, rpm: { } },
    { speed: 13.6, watts: { aab: 26 }, rpm: { aab: 22 } },
    { speed: 14.0, watts: { ad6: 30 }, rpm: { } },
    { speed: 14.2, watts: { aab: 28 }, rpm: { aab: 23 } },
    { speed: 14.4, watts: { ad6: 32 }, rpm: { } },
    { speed: 14.8, watts: { aab: 31 }, rpm: { aab: 24 } },
    { speed: 14.9, watts: { ad6: 34 }, rpm: { } },
    { speed: 15.4, watts: { aab: 33, ad6: 37 }, rpm: { aab: 25 } },
    { speed: 15.9, watts: { ad6: 39 }, rpm: { } },
    { speed: 16.0, watts: { aab: 36 }, rpm: { aab: 26 } },
    { speed: 16.4, watts: { ad6: 43 }, rpm: { } },
    { speed: 16.6, watts: { aab: 40 }, rpm: { aab: 27 } },
    { speed: 16.9, watts: { ad6: 45 }, rpm: { } },
    { speed: 17.3, watts: { aab: 43, ad6: 48 }, rpm: { aab: 28 } },
    { speed: 17.9, watts: { aab: 47 }, rpm: { aab: 29 } },
    { speed: 18.3, watts: { ad6: 56 }, rpm: { } },
    { speed: 18.5, watts: { aab: 50 }, rpm: { aab: 30 } },
    { speed: 18.8, watts: { ad6: 60 }, rpm: { } },
    { speed: 19.1, watts: { aab: 54 }, rpm: { aab: 31 } },
    { speed: 19.3, watts: { ad6: 63 }, rpm: { ad6: 40 } },
    { speed: 19.7, watts: { aab: 58 }, rpm: { aab: 32 } },
    { speed: 19.8, watts: { ad6: 67 }, rpm: { } },
    { speed: 20.2, watts: { ad6: 70 }, rpm: { } },
    { speed: 20.3, watts: { aab: 63 }, rpm: { aab: 33 } },
    { speed: 20.7, watts: { ad6: 75 }, rpm: { } },
    { speed: 21.0, watts: { aab: 67 }, rpm: { aab: 34 } },
    { speed: 21.2, watts: { ad6: 79 }, rpm: { } },
    { speed: 21.6, watts: { aab: 71 }, rpm: { aab: 35 } },
    { speed: 21.7, watts: { ad6: 83 }, rpm: { } },
    { speed: 22.2, watts: { aab: 77, ad6: 88 }, rpm: { aab: 36 } },
    { speed: 22.7, watts: { ad6: 92 }, rpm: { } },
    { speed: 22.8, watts: { aab: 82 }, rpm: { aab: 37 } },
    { speed: 23.1, watts: { ad6: 96 }, rpm: { } },
    { speed: 23.4, watts: { aab: 88 }, rpm: { aab: 38 } },
    { speed: 23.6, watts: { ad6: 102 }, rpm: { } },
    { speed: 24.0, watts: { aab: 93 }, rpm: { aab: 39 } },
    { speed: 24.6, watts: { aab: 99, ad6: 112 }, rpm: { aab: 40 } },
    { speed: 25.1, watts: { ad6: 118 }, rpm: { } },
    { speed: 25.3, watts: { aab: 106 }, rpm: { aab: 41 } },
    { speed: 25.6, watts: { ad6: 122 }, rpm: { } },
    { speed: 25.9, watts: { aab: 113 }, rpm: { aab: 42 } },
    { speed: 26.0, watts: { ad6: 129 }, rpm: { } },
    { speed: 26.5, watts: { aab: 120, ad6: 136 }, rpm: { aab: 43 } },
    { speed: 27.0, watts: { ad6: 144 }, rpm: { } },
    { speed: 27.1, watts: { aab: 127 }, rpm: { aab: 44 } },
    { speed: 27.5, watts: { ad6: 150 }, rpm: { } },
    { speed: 27.7, watts: { aab: 134 }, rpm: { aab: 45 } },
    { speed: 28.0, watts: { ad6: 157 }, rpm: { } },
    { speed: 28.3, watts: { aab: 142 }, rpm: { aab: 46 } },
    { speed: 28.4, watts: { ad6: 164 }, rpm: { } },
    { speed: 28.9, watts: { ad6: 170 }, rpm: { ad6: 60 } },
    { speed: 29.0, watts: { aab: 151 }, rpm: { aab: 47 } },
    { speed: 29.4, watts: { ad6: 181 }, rpm: { } },
    { speed: 29.6, watts: { aab: 159 }, rpm: { aab: 48 } },
    { speed: 29.9, watts: { ad6: 187 }, rpm: { } },
    { speed: 30.2, watts: { aab: 168 }, rpm: { aab: 49 } },
    { speed: 30.4, watts: { ad6: 195 }, rpm: { } },
    { speed: 30.8, watts: { aab: 176 }, rpm: { aab: 50 } },
    { speed: 31.3, watts: { ad6: 210 }, rpm: { } },
    { speed: 31.8, watts: { ad6: 220 }, rpm: { } },
    { speed: 32.0, watts: { aab: 197 }, rpm: { aab: 52 } },
    { speed: 32.3, watts: { ad6: 227 }, rpm: { } },
    { speed: 32.7, watts: { aab: 207 }, rpm: { aab: 53 } },
    { speed: 32.8, watts: { ad6: 239 }, rpm: { } },
    { speed: 33.3, watts: { aab: 218, ad6: 247 }, rpm: { aab: 54 } },
    { speed: 33.9, watts: { aab: 228 }, rpm: { aab: 55 } },
    { speed: 34.2, watts: { ad6: 269 }, rpm: { } },
    { speed: 34.5, watts: { aab: 240 }, rpm: { aab: 56 } },
    { speed: 34.7, watts: { ad6: 275 }, rpm: { } },
    { speed: 35.1, watts: { aab: 252 }, rpm: { aab: 57 } },
    { speed: 35.7, watts: { ad6: 296 }, rpm: { } },
    { speed: 36.4, watts: { aab: 276 }, rpm: { aab: 59 } },
    { speed: 37.0, watts: { aab: 288 }, rpm: { aab: 60 } },
    { speed: 37.6, watts: { aab: 302, ad6: 341 }, rpm: { aab: 61 } },
    { speed: 38.2, watts: { aab: 316 }, rpm: { aab: 62 } },
    { speed: 38.6, watts: { ad6: 368 }, rpm: { ad6: 80 } },
    { speed: 38.8, watts: { aab: 331 }, rpm: { aab: 63 } },
    { speed: 39.1, watts: { ad6: 381 }, rpm: { } },
    { speed: 39.4, watts: { aab: 345 }, rpm: { aab: 64 } },
    { speed: 39.6, watts: { ad6: 392 }, rpm: { } },
    { speed: 40.0, watts: { ad6: 405 }, rpm: { } },
    { speed: 40.1, watts: { aab: 359 }, rpm: { aab: 65 } },
    { speed: 40.5, watts: { ad6: 419 }, rpm: { } },
    { speed: 40.7, watts: { aab: 376 }, rpm: { aab: 66 } },
    { speed: 41.3, watts: { aab: 392 }, rpm: { aab: 67 } },
    { speed: 41.5, watts: { ad6: 444 }, rpm: { } },
    { speed: 41.9, watts: { aab: 409 }, rpm: { aab: 68 } },
    { speed: 42.5, watts: { aab: 425, ad6: 473 }, rpm: { aab: 69 } },
    { speed: 42.9, watts: { ad6: 488 }, rpm: { } },
    { speed: 43.1, watts: { aab: 442 }, rpm: { aab: 70 } },
    { speed: 43.8, watts: { aab: 461 }, rpm: { aab: 71 } },
    { speed: 44.4, watts: { aab: 480 }, rpm: { aab: 72 } },
    { speed: 45.0, watts: { aab: 498 }, rpm: { aab: 73 } },
    { speed: 45.6, watts: { aab: 517 }, rpm: { aab: 74 } },
    { speed: 46.2, watts: { aab: 536 }, rpm: { aab: 75 } },
    { speed: 46.8, watts: { aab: 558 }, rpm: { aab: 76 } },
    { speed: 47.5, watts: { aab: 579 }, rpm: { aab: 77 } },
];

const vs = (dims) => {
    const xAxis = [];
    const yAxis = [];
    const dataset = [];
    const series = [];
    const legend = [];
    const tooltip = [];
    const dataZoom = [];

    const label = (v) => {
        switch (v) {
            case 'ad6': return 'AirDyne6';
            case 'aab': return 'Assault Air Bike';
            case 'echo': return 'Echo Bike';
            case 'bikeerg': return 'BikeErg';

            case 'speed': return 'Speed';
            case 'rpm': return 'RPM';
            case 'watts': return 'Watts';
        };
    };

    const units = (k, v) => {
        switch (k) {
            case 'speed': return `${v}km/h`;
            case 'rpm': return `${v}rpm`;
            case 'watts': return `${v}W`;
        };
    };

    /*
     * XXX Gah, but it works. We should know what apparatus we have before
     * coming in here.
     */
    const apparatus = data.reduce((acc, val) => {
        Object.keys(val.watts).forEach((a) => {
            if (!acc.includes(a)) {
                acc.push(a);
            }
        });

        return acc;
    }, []);

    legend.push({
        top: '10%',
    });

    dataZoom.push({
    });

    tooltip.push({
        trigger: 'axis',
        axisPointer: {
            type: 'cross',
            label: {
                show: true,
                formatter: (params) => units(params.axisDimension === 'x' ? dims[0] : dims[1], params.value),
            },
        },
    });

    xAxis.push({
        name: label(dims[0]),
        nameLocation: 'middle',
        nameGap: 30,
        axisLabel: {
            formatter: (value) => units(dims[0], value),
        },
    });
    yAxis.push({
        name: label(dims[1]),
        nameLocation: 'middle',
        nameGap: 50,
        axisLabel: {
            formatter: (value) => units(dims[1], value),
        },
    });

    apparatus.forEach((a, i) => {
        dataset.push({
            source: data.reduce((acc, d) => {
                const foo = {};

                if (d[dims[0]] != undefined) {
                    foo[dims[0]] = d[dims[0]];
                }
                if (d[dims[1]] != undefined) {
                    foo[dims[1]] = d[dims[1]];
                }

                if (d[dims[0]] && (d[dims[0]][a] != undefined)) {
                    foo[dims[0]] = d[dims[0]][a];
                }
                if (d[dims[1]] && (d[dims[1]][a] != undefined)) {
                    foo[dims[1]] = d[dims[1]][a];
                }

                if (Object.keys(foo).length) {
                    acc.push(foo);
                }

                return acc;
            }, []),
        });

        series.push({
            type: 'line',
            name: label(a),
            encode: {
                x: dims[0],
                y: dims[1],
            },
            datasetIndex: i,
            showSymbol: true,
            connectNulls: true,
        });
    });

    return {
        xAxis,
        yAxis,
        dataset,
        series,
        legend,
        tooltip,
        //dataZoom,
    };
};

export const airbike = {
    speedVsWatts: () => vs([ 'speed', 'watts' ]),
    wattsVsSpeed: () => vs([ 'watts', 'speed' ]),
    speedVsRPM: () => vs([ 'speed', 'rpm' ]),
    RPMVsSpeed: () => vs([ 'rpm', 'speed' ]),
    wattsVsRPM: () => vs([ 'watts', 'rpm' ]),
    RPMVsWatts: () => vs([ 'rpm', 'watts' ]),
};
