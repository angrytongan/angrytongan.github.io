'use strict';

/*
const EChartsExample = () => {
    const options = () => {
        return {
            title: {
                text: 'Rower personal bests'
            },
            tooltip: {
                trigger: 'axis'
            },
            legend: {
                data: ['500m', '1,000m', '2,000m'],
            },
            xAxis: {
                type: 'category',
            },
            yAxis: {
                type: 'value'
            },
            dataset: {
                source: [
                    ['distance', '500m','1,000m', '2,000m'],
                    ['2018', 210, 250, 300 ],
                    ['2017', 200, 240, 290 ],
                    ['2016', 100, 120, 270 ],
                ]
            },
            series: [
                { type: 'line' },
                { type: 'line' },
                { type: 'line' },
            ]
        };
    };

    const height = () => 250;

    return {
        view: () => {
            return m(EChart, {
                div: 'some-chart',
                options: options(),
                height: height()
            });
        },
    };
};
*/

export const EChart = () => {
    let chart = null;
    let resizeTimer = null;
    let lastOffsetWidth = 0;

    const resizeHandler = () => {
        if (!chart) {
            return;
        }

        /*
         * XXX double check EChart docs on optimisations
         * and reducing / removing resize calls
         */
        if (resizeTimer === null) {
            resizeTimer = setTimeout(() => {
                /*
                 * XXX We _may_ need to resize explicitly here. For calendar
                 * it doesn't look like it's necessary, but for pie charts it
                 * does (in testing). Check and code up.
                 */
                chart.resize();
                m.redraw(); /* https://mithril.js.org/redraw.html#how-it-works */
                resizeTimer = null;
            }, 500);
        }
    };

    return {
        oninit: (vnode) => {
            //console.log('EChart.oninit', vnode.attrs.div, vnode.attrs.height);
        },

        oncreate: (vnode) => {
            chart = echarts.init(vnode.dom);
            //chart.showLoading();
            chart.setOption(vnode.attrs.options);
            //chart.hideLoading();

            /*
             * Setup any handlers.
             */
            if (vnode.attrs.on) {
                const on = Array.isArray(vnode.attrs.on) ? vnode.attrs.on : [ vnode.attrs.on ];

                on.forEach((h) => {
                    if (h.subType) {
                        chart.on(h.type, h.subType, h.fn);
                    } else {
                        chart.on(h.type, h.fn);
                    }
                });
            }

            lastOffsetWidth = document.getElementById(vnode.attrs.div).offsetWidth;

            window.addEventListener('resize', resizeHandler);
            m.redraw();
        },

        /*
         * If our containing div gets bumped around with an explicit resize, we
         * still need to update our graph. Treat it like a resize.
         */
        onupdate: (vnode) => {
            //chart.showLoading();
            chart.setOption(vnode.attrs.options, true);
            //chart.hideLoading();

            /*
             * If we have a change of width, kick the resize handler.
             */
            const offsetWidth = document.getElementById(vnode.attrs.div).offsetWidth;
            if (lastOffsetWidth != offsetWidth) {
                lastOffsetWidth = offsetWidth;
                resizeHandler();
            }
        },

        onremove: (vnode) => {
            chart && chart.dispose();
            chart = null;

            window.removeEventListener('resize', resizeHandler);
        },

        view: (vnode) => {
            if (chart) {
                if (chart.getHeight() != vnode.attrs.height) {
                    chart.resize({ height: vnode.attrs.height });
                }
            }

            return m(`#${vnode.attrs.div}`, { style: `height: ${vnode.attrs.height}px;` });
        },
    };
};
