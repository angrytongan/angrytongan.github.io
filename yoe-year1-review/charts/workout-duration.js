'use strict';

export const workoutDuration = (workouts) => {
    const forDistance = workouts.reduce((acc, val) => {
        return acc + (val.workTime % 1 == 0);
    }, 0);
    const forTime = workouts.length - forDistance;

    return {
        tooltip: {
            trigger: 'item',
        },
        series: {
            type: 'pie',
            data: [
                {
                    name: 'Workouts for distance',
                    value: forDistance,
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
            animation: false,
        },
    };
};
