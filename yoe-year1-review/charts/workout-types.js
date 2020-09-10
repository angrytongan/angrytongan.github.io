'use strict';

export const workoutTypes = () => {
    return {
        series: {
            type: 'sunburst',
            data: [
                {
                    name: 'Endurance',
                    value: 3,
                },
                {
                    name: 'Interval',
                    value: 3,
                    children: [
                        { name: 'Speed / Threshold', value: 1 },
                        { name: 'Anaerobic', value: 1 },
                        { name: 'Max aerobic power', value: 1 },
                    ],
                },
                {
                    name: 'MetCon',
                    value: 3,
                },
                {
                    name: 'Time Trials',
                    value: 3,
                },
                {
                    name: 'Polarisation',
                    value: 3,
                },
                {
                    name: 'FLUX',
                    value: 3,
                },
            ],

            radius: [ 0, 200 ],
            center: [ '42%', '50%' ],
            nodeClick: false,
            highlightPolicy: 'descendant',  // XXX not working?
            animation: false,
        },
    };
};
