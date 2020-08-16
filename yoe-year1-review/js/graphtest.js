'use strict';

import { programPhases } from '/yoe-year1-review/charts/phases.js';
import { workoutTypes } from '/yoe-year1-review/charts/workoutTypes.js';
import { biologicalMarkers } from '/yoe-year1-review/charts/biological.js';

const defaultGraphHeight = 300;

const graphs = [ 
    /*
    { div: 'graph-phases', options: programPhases.phasesOptions, height: 50 },
    { div: 'graph-tracks', options: programPhases.tracksOptions, height: 75 },
    */
    { div: 'graph-workout-types', options: workoutTypes, height: 200 },
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
