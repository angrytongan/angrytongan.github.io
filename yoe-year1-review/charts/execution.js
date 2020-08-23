'use strict';

import { dateTime } from '/yoe-year1-review/js/utils/datetime.js';

const summary = (workouts) => {
    const phases = workouts.reduce((acc, val) => {
        if (!acc.includes(val.phase)) {
            acc.push(val.phase);
        }
        return acc;

    }, []).sort();

    return {
        legend: {
            top: '5%',
        },

        tooltip: {
            trigger: 'item',
        },

        calendar: {
            right: '5%',
            bottom: '15%',
            cellSize: [ 'auto', 'auto' ],
            range: [ '2019-09-16', '2020-09-16' ],
            dayLabel: {
                firstDay: 1,
            },
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

export const execution = {
    summary,
}
