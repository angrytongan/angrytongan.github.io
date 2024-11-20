'use strict';

import { dev } from '$app/env';
import { workouts } from './data.js';

const summary = () => {
    const phases = workouts.reduce((acc, val) => {
        if (!acc.includes(val.phase)) {
            acc.push(val.phase);
        }
        return acc;

    }, []).sort();

    const out = {
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
            range: [ '2020-09-17', '2021-09-30' ],
            dayLabel: {
                firstDay: 1,
            },
        },

        series: phases.map((p) => {
            return {
                type: 'heatmap',
                coordinateSystem: 'calendar',
                name: p,
                calendarIndex: 0,
                data: workouts.reduce((acc, val) => {
                    if (val.phase == p) {
                        acc.push([
                            val.date,
                            true,
                            val.workout
                        ]);
                    }

                    return acc;
                }, []),
                tooltip: {
                    formatter: (params) => {
                        return `Workout ${params.data[2]}`;
                    },
                },
            };
        }),
    };

    /*
     * V5 needs a visualmap to link against while in dev; reported in
     * https://github.com/apache/echarts/issues/15098
     */
    if (dev) {
        out['visualMap'] = {
            show: false,
        };
    }

    return out;
};

export default {
    summary,
}
