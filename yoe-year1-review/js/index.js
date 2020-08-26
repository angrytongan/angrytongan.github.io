'use strict';

import { workouts } from '/yoe-year1-review/charts/data.js';

import { programPhases } from '/yoe-year1-review/charts/phases.js';
import { workoutTypes } from '/yoe-year1-review/charts/workout-types.js';
import { timeTrial } from '/yoe-year1-review/charts/time-trial.js';
import { timeCommitment } from '/yoe-year1-review/charts/time-commitment.js';
import { workoutDuration } from '/yoe-year1-review/charts/workout-duration.js';
import { workoutSpread } from '/yoe-year1-review/charts/workout-spread.js';
import { constantlyVaried } from '/yoe-year1-review/charts/constantly-varied.js';
import { execution } from '/yoe-year1-review/charts/execution.js';
import { strokedata } from '/yoe-year1-review/charts/strokedata.js';
import { repeated } from '/yoe-year1-review/charts/repeated.js';
import { intervalGraph } from '/yoe-year1-review/charts/interval-graph.js';

const defaultGraphHeight = 200;

const graphs = [ 
    { div: 'graph-phases', options: programPhases.phasesOptions, height: 50, },
    { div: 'graph-tracks', options: programPhases.tracksOptions, height: 75, },
    { div: 'graph-workout-types', options: workoutTypes },
    { div: 'graph-tt-airdyne', options: timeTrial.ttAirDyne },
    { div: 'graph-tt-rower', options: timeTrial.ttRower },
    { div: 'graph-tt-rower-2000-full-history', options: timeTrial.ttRower2000FullHistory },
    { div: 'graph-repeated-24_30_30', options: timeTrial.repeated243030 },
    { div: 'graph-time-commitment-summary', options: timeCommitment.summary },
    { div: 'graph-time-commitment-sd-by-type', options: timeCommitment.sdByType },
    { div: 'graph-workout-duration', options: workoutDuration, height: 150 },
    { div: 'graph-workout-spread-scatter', options: workoutSpread.scatter },
    { div: 'graph-workout-spread-pies', options: workoutSpread.pies },
    { div: 'graph-constantly-varied-apparatus', options: constantlyVaried.apparatus },
    { div: 'graph-execution-summary', options: execution.summary, height: 170 },
    { div: 'graph-strokedata-tt20', options: strokedata.tt20 },
    { div: 'graph-repeated-24_30_30-strokesPerInterval', options: repeated.interval_24_30_30.strokesPerInterval },
    { div: 'graph-repeated-24_30_30-distanceDeltaPerInterval', options: repeated.interval_24_30_30.distanceDeltaPerInterval },
    { div: 'graph-repeated-24_30_30-distancePerIntervalAllStrokes', options: repeated.interval_24_30_30.distancePerIntervalAllStrokes },
    { div: 'graph-repeated-24_30_30-bankedDistanceByInterval', options: repeated.interval_24_30_30.bankedDistanceByInterval },
    { div: 'graph-repeated-24_30_30-pacePerInterval', options: repeated.interval_24_30_30.pacePerInterval },
    { div: 'graph-repeated-24_30_30-wattsPerStroke', options: repeated.interval_24_30_30.wattsPerStroke },
    { div: 'graph-interval.workout_40553854', options: intervalGraph.workout_40553854 },
    { div: 'graph-interval.workout_41335805', options: intervalGraph.workout_41335805 },
    { div: 'graph-repeated-24_30_30-normalDistributionPace', options: repeated.interval_24_30_30.normalDistributionPace },
    { div: 'graph-repeated-24_30_30-normalDistributionWatts', options: repeated.interval_24_30_30.normalDistributionWatts },
    { div: 'graph-repeated-3_2000_300', options: timeTrial.repeated32000300 },
    { div: 'graph-repeated-3_2000_300-summary', options: repeated.interval_3_2000_300.summary },
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
