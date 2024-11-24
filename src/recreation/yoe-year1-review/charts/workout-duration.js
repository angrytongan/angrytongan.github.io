'use strict';

import { workouts } from './data.js';

const workoutDuration = () => {
    const forDistance = workouts.filter((w) => w.workTime.match(/\.[0-9]/));
    const forTime = workouts.length - forDistance.length;

    return {
        animation: false,
        tooltip: {
            trigger: 'item',
        },
        series: {
            type: 'pie',
            data: [
                {
                    name: 'Workouts for distance',
                    value: forDistance.length,
                },
                {
                    name: 'Workouts for time',
                    value: forTime,
                },
            ],
            tooltip: {
                formatter: (params) => {
                    return `${params.value} ${params.name}`;
                },
            },
        },
    };
};

export default {
    workoutDuration,
}
