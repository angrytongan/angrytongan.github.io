'use strict';

/*
 * XXX Check distance = 0 records in js/data.js against log
 */

import { workouts } from '/yoe-year1/js/data.js';
import { wtf } from '/yoe-year1/js/wtf.js';

import { Statistics } from '/yoe-year1/js/statistics.js';
import { Frequency } from '/yoe-year1/js/frequency.js';
import { WorkRest } from '/yoe-year1/js/workrest.js';
import { WorkoutType } from '/yoe-year1/js/workout-type.js';
import { Weekly } from '/yoe-year1/js/weekly.js';
import { TimeTrials } from '/yoe-year1/js/tt.js';

const controls = {};
const options = {};

const toSeconds = (t) => {
    const [ min, secs ] = t.split(':');
    return +min * 60 + +secs;
};

const initControls = () => {
    const selects = [
        'apparatus',
        'type',
        'phase',
    ];

    selects.forEach((s) => {
        controls[s] = workouts.reduce((acc, val) => {
            if (!acc.includes(val[s])) {
                acc.push(val[s]);
            }
            return acc;
        }, []).sort((a, b) => (a < b ? -1 : a > b ? 1 : 0));
    });

    controls.apparatus.unshift('All');
    controls.type.unshift('All');
    controls.phase.unshift('All');

    options.apparatus = 'All';
    options.type = 'All';
    options.phase = 'All';
};

/*
 * Apply control filters.
 * Change printable times to seconds.
 */
const sanitiseAndFilterData = (o, wd) => {
    return wd
        .filter((e) => o.apparatus == 'All' || e.apparatus == o.apparatus)
        .filter((e) => o.type == 'All' || e.type == o.type)
        .filter((e) => o.phase == 'All' || e.phase == o.phase)
        .map((val) => {
            const o = { ...val };

            o.workTime = toSeconds(val.workTime);
            o.restTime = toSeconds(val.restTime);
            o.distance = +val.distance;

            return o;
        });
};

const Controls = {
    view: () => {
        return [
            m('span', 'Apparatus'),
            m('select', {
                onchange: (e) => {
                    options.apparatus = e.currentTarget.value;
                },
            }, controls.apparatus.map((a) => m('option', a))),

            m('span', 'Type'),
            m('select', {
                onchange: (e) => {
                    options.type = e.currentTarget.value;
                },
            }, controls.type.map((a) => m('option', a))),

            m('span', 'Phase'),
            m('select', {
                onchange: (e) => {
                    options.phase = e.currentTarget.value;
                },
            }, controls.phase.map((c) => m('option', c))),
        ];
    },
};

const WTF = {
    view: () => {
        return [
            m('hr'),
            m.trust(wtf),
            m('hr'),
        ];
    },
};

const Root = {
    view: () => {
        const data = sanitiseAndFilterData(options, workouts);

        return m('', [
            m('#controls', [
                m(Controls),
            ]),
            m('#graphs', [
                m(WTF),
                m(Statistics, { data: data }),
                m(Frequency, { data: data }),
                m(WorkRest, { data: data }),
                m(WorkoutType, { data: data }),
                m(Weekly, { data: data }),
                m(TimeTrials, { data: data }),
            ]),
        ]);
    },
};

document.addEventListener('DOMContentLoaded', () => {
    initControls();

    m.route(document.body, '/', {
        '/': Root,
    });
});
