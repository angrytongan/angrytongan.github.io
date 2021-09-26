'use strict';

import { workouts } from './data.js';

const summary = () => {
    const phases = workouts.reduce((acc, val) => {
        if (!acc.includes(val.phase)) {
            acc.push(val.phase);
        }
        return acc;

    }, []).sort();

    return {
        animation: false,
        legend: {
            top: '5%',
            type: 'scroll',
        },

        tooltip: {
            trigger: 'item',
        },

        calendar: {
            right: '5%',
            bottom: '15%',
            cellSize: [ 'auto', 'auto' ],
            range: [ '2020-09-17', '2021-09-27' ],
            dayLabel: {
                firstDay: 1,
            },
        },

        /*
         * V5 needs a visualmap to linkk against; reported in
         * https://github.com/apache/echarts/issues/15098
         */
        visualMap: {
            show: false,
        },

        series: phases.map((p) => {
            return {
                type: 'heatmap',
                coordinateSystem: 'calendar',
                name: p,
                data: workouts.reduce((acc, val) => {
                    if (val.phase == p) {
                        acc.push([
                            val.date,
                            1,
                            val.workout,
                        ]);
                    }

                    return acc;
                }, []),
                tooltip: {
                    formatter: (params) => {
                        return `Workout ${params.value[2]}`;
                    },
                },
                animation: false,
            };
        }),
    };
};

export default {
    summary,
}
