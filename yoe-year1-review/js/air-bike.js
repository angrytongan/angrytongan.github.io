'use strict';


const defaultGraphHeight = 200;

const graphs = [ 
    { div: 'graph-airbike-test', options: airbike.test },
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
        g.chart.setOption(g.options(workoutData));
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
