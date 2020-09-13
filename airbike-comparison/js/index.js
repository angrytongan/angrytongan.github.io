'use strict';

import { airbike } from '/airbike-comparison/js/air-bike.js';

const defaultGraphHeight = 200;

const graphs = [ 
    { div: 'graph-speedVsPower', options: airbike.speedVsPower, height: 300 },

    { div: 'graph-RPMVsSpeed', options: airbike.RPMVsSpeed, height: 300 },

    { div: 'graph-RPMVsPower', options: airbike.RPMVsPower, height: 300 },
    { div: 'graph-RPMVsCalHour', options: airbike.RPMVsCalHour, height: 300 },
    { div: 'graph-speedVsCalHour', options: airbike.speedVsCalHour, height: 300 },
];

document.addEventListener('DOMContentLoaded', () => {
    let theme = '';
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
        theme = 'dark';
    }

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
            console.log(options);

            g.chart = echarts.init(g.element, theme);
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
