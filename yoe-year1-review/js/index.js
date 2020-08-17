'use strict';

import { workouts } from '/yoe-year1-review/charts/data.js';

import { programPhases } from '/yoe-year1-review/charts/phases.js';
import { workoutTypes } from '/yoe-year1-review/charts/workout-types.js';
import { biologicalMarkers } from '/yoe-year1-review/charts/biological.js';
import { timeTrial } from '/yoe-year1-review/charts/time-trial.js';
import { timeCommitment } from '/yoe-year1-review/charts/time-commitment.js';

const defaultGraphHeight = 300;

const graphs = [ 
    { div: 'graph-phases', options: programPhases.phasesOptions, height: 50, },
    { div: 'graph-tracks', options: programPhases.tracksOptions, height: 75, },
    { div: 'graph-workout-types', options: workoutTypes, height: 200 },
    { div: 'graph-tt-airdyne', options: timeTrial.ttAirDyne, height: 200 },
    { div: 'graph-time-commitment', options: timeCommitment.summary },
    {
        div: 'graph-bloodPressure',
        options: biologicalMarkers.bloodPressureOptions,
        height: 250,
    },
    {
        div: 'graph-restingHeartRate',
        options: biologicalMarkers.restingHeartRateOptions,
        height: 250,
    },
    {
        div: 'graph-weight',
        options: biologicalMarkers.weightOptions,
        height: 250,
    },
    {
        div: 'graph-haemoglobin',
        options: biologicalMarkers.haemoglobinOptions,
        height: 250,
    }
];

document.addEventListener('DOMContentLoaded', () => {
    const sanitiseAndFilterData = (wd) => {
        const toSeconds = (t) => {
            const [ min, secs ] = t.split(':');
            return +min * 60 + +secs;
        };

        return wd
            .map((val) => {
                const o = { ...val };

                o.workTime = toSeconds(val.workTime);
                o.restTime = toSeconds(val.restTime);
                o.distance = +val.distance;

                return o;
            });
    };
    const workoutData = sanitiseAndFilterData(workouts);

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
