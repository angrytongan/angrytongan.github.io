'use strict';

import { multiOptions } from '/yoe-year1-review/charts/multi.js';
import { biologicalMarkers } from '/yoe-year1-review/charts/biological.js';

const defaultGraphHeight = 300;

const graphs = [ 
    { div: 'multi', options: multiOptions },
    {
        div: 'graph-bloodPressure',
        options: biologicalMarkers.bloodPressureOptions,
        height: 250,
    },
    {
        div: 'graph-restingHeartRate',
        options: biologicalMarkers.restingHeartRateOptions,
        height: 250,
    },
    {
        div: 'graph-weight',
        options: biologicalMarkers.weightOptions,
        height: 250,
    },
    {
        div: 'graph-haemoglobin',
        options: biologicalMarkers.haemoglobinOptions,
        height: 250,
    }
];

document.addEventListener('DOMContentLoaded', () => {
    graphs.forEach((g) => {
        g.element = document.getElementById(g.div);

        if (!g.element) {
            g.element = document.createElement('div');
            g.element.id = g.div;

            document.body.appendChild(g.element);
        }

        g.chart = echarts.init(g.element);
        g.chart.showLoading();
        g.chart.setOption(g.options());
        g.chart.hideLoading();

        if (g.height === undefined) {
            g.height = defaultGraphHeight;
        }

        if (g.chart.getHeight() != g.height) {
            g.chart.resize({ height: g.height });
        }
    });

    window.addEventListener('resize', () => {
        setTimeout(() => {
            const w = document.body.offsetWidth;
            graphs.forEach((g) => {
                g.chart && g.chart.resize({ width: w });
            });
        }, 500);
    });
});
