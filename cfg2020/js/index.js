'use strict';

import { comparisons } from '/cfg2020/js/comparisons.js';

const defaultGraphHeight = 250;

const graphs = [ 
    { div: 'graph-friendly-fran', options: comparisons.friendlyFran },
    { div: 'graph-damn-diane', options: comparisons.damnDiane },
];

document.addEventListener('DOMContentLoaded', () => {
    graphs.forEach((g) => {
        g.element = document.getElementById(g.div);

        if (!g.element) {
            g.element = document.createElement('div');
            g.element.id = g.div;

            document.body.appendChild(g.element);
        }

        if (g.element) {
            /*
             * Remember to do this if we want to re-initialise everything on the
             * run for whatever reason (eg. light / dark mode change).
             */
            if (g.chart) {
                g.chart.dispose();
            }

            const options = g.options();

            g.chart = echarts.init(g.element);
            g.chart.showLoading();
            g.chart.setOption(options);
            g.chart.hideLoading();

            if (g.height === undefined) {
                g.height = defaultGraphHeight;
            }

            if (g.chart.getHeight() != g.height) {
                g.element.style.height = g.height + 'px';
                g.chart.resize({ height: g.height });
            }
        }
    });

    window.addEventListener('resize', () => {
        setTimeout(() => {
            graphs.forEach((g) => {
                g.chart && g.chart.resize({ width: g.element.offsetWidth });
            });
        }, 500);
    });
});
