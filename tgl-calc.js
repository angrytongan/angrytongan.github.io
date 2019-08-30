/*
 * To add a new lift:
 * 1) Add the label to lift_labels, ordered.
 * 2) Add the multipliers to lift_multipliers.
 *
 * The entry in lifts_label should be the full, english un-abbreviated name of
 * the lift. Avoid elements that require escaping (eg. ampersands, umlauts).
 *
 * The corresponding entry in lift_multipliers should match the new label, in
 * all lower case, with spaces converted to underscores.
 *
 * Good examples:
 * - 'Truck Pull' converts to 'truck_pull'
 * - 'Atlas stone' converts to 'atlas_stone'
 *
 * Bad examples:
 * - 'Clean & Jerk'
 */
const lift_labels = [
    'Back Squat',
    'Snatch',
    'Power Snatch',
    'Overhead Squat',
    'Clean and Jerk',
    'Clean',
    'Jerk',
    'Front Squat',
    'Power Clean',
    'Deadlift',
    'Push Press',
    'Strict Press',
    'Bench Press'
];

const LOW = 0;
const HIGH = 1;
const lift_multipliers = {
    'back_squat': {
        'back_squat':       [ 1.0,  1.0 ],
        'snatch':           [ 0.63, 0.71 ],
        'power_snatch':     [ 0.46, 0.54 ],
        'overhead_squat':   [ 0.63, 0.71 ],
        'clean_and_jerk':   [ 0.71, 0.79 ],
        'clean':            [ 0.71, 0.79 ],
        'jerk':             [ 0.75, 0.85 ],
        'front_squat':      [ 0.85, 0.95 ],
        'power_clean':      [ 0.63, 0.71 ],
        'deadlift':         [ 1.09, 1.21 ],
        'push_press':       [ 0.63, 0.71 ],
        'strict_press':     [ 0.46, 0.54 ],
        'bench_press':      [ 0.71, 0.79 ]
    },
    'snatch': {
        'back_squat':       [ 1.44, 1.56 ],
        'snatch':           [ 1.0,  1.0  ],
        'power_snatch':     [ 0.76, 0.84 ],
        'overhead_squat':   [ 0.95, 1.05 ],
        'clean_and_jerk':   [ 1.07, 1.19 ],
        'clean':            [ 1.07, 1.19 ],
        'jerk':             [ 1.15, 1.25 ],
        'front_squat':      [ 1.29, 1.41 ],
        'power_clean':      [ 0.96, 1.04 ],
        'deadlift':         [ 1.65, 1.81 ],
        'push_press':       [ 0.96, 1.04 ],
        'strict_press':     [ 0.76, 0.84 ],
        'bench_press':      [ 1.07, 1.19 ]
    },
    'power_snatch': {
        'back_squat':       [ 1.92, 2.08 ],
        'snatch':           [ 1.26, 1.40 ],
        'power_snatch':     [ 1.0,  1.0  ],
        'overhead_squat':   [ 1.26, 1.40 ],
        'clean_and_jerk':   [ 1.44, 1.56 ],
        'clean':            [ 1.44, 1.56 ],
        'jerk':             [ 1.54, 1.66 ],
        'front_squat':      [ 1.73, 1.87 ],
        'power_clean':      [ 1.27, 1.39 ],
        'deadlift':         [ 2.22, 2.38 ],
        'push_press':       [ 1.27, 1.39 ],
        'strict_press':     [ 0.96, 1.04 ],
        'bench_press':      [ 1.43, 1.57 ]
    },
    'overhead_squat': {
        'back_squat':       [ 1.43, 1.57 ],
        'snatch':           [ 0.96, 1.04 ],
        'power_snatch':     [ 0.71, 0.79 ],
        'overhead_squat':   [ 1.0,  1.0  ],
        'clean_and_jerk':   [ 1.07, 1.19 ],
        'clean':            [ 1.07, 1.19 ],
        'jerk':             [ 1.13, 1.27 ],
        'front_squat':      [ 1.28, 1.42 ],
        'power_clean':      [ 0.96, 1.04 ],
        'deadlift':         [ 1.64, 1.82 ],
        'push_press':       [ 0.96, 1.04 ],
        'strict_press':     [ 0.71, 0.79 ],
        'bench_press':      [ 1.07, 1.19 ],
    },
    'clean_and_jerk': {
        'back_squat':       [ 1.26, 1.40 ],
        'snatch':           [ 0.85, 0.93 ],
        'power_snatch':     [ 0.63, 0.71 ],
        'overhead_squat':   [ 0.85, 0.93 ],
        'clean_and_jerk':   [ 1.0,  1.0  ],
        'clean':            [ 0.96, 1.04 ],
        'jerk':             [ 1.02, 1.12 ],
        'front_squat':      [ 1.14, 1.26 ],
        'power_clean':      [ 0.85, 0.93 ],
        'deadlift':         [ 1.46, 1.60 ],
        'push_press':       [ 0.85, 0.93 ],
        'strict_press':     [ 0.63, 0.71 ],
        'bench_press':      [ 0.96, 1.04 ]
    },
    'clean': {
        'back_squat':       [ 1.26, 1.40 ],
        'snatch':           [ 0.84, 0.92 ],
        'power_snatch':     [ 0.63, 0.71 ],
        'overhead_squat':   [ 0.85, 0.93 ],
        'clean_and_jerk':   [ 0.96, 1.04 ],
        'clean':            [ 1.0,  1.0  ],
        'jerk':             [ 1.02, 1.12 ],
        'front_squat':      [ 1.15, 1.25 ],
        'power_clean':      [ 0.85, 0.93 ],
        'deadlift':         [ 1.47, 1.59 ],
        'push_press':       [ 0.85, 0.93 ],
        'strict_press':     [ 0.63, 0.71 ],
        'bench_press':      [ 0.96, 1.04 ]
    },
    'jerk': {
        'back_squat':       [ 1.18, 1.32 ],
        'snatch':           [ 0.79, 0.87 ],
        'power_snatch':     [ 0.59, 0.67 ],
        'overhead_squat':   [ 0.79, 0.87 ],
        'clean_and_jerk':   [ 0.90, 0.98 ],
        'clean':            [ 0.90, 0.98 ],
        'jerk':             [ 1.0,  1.0  ],
        'front_squat':      [ 1.07, 1.17 ],
        'power_clean':      [ 0.79, 0.87 ],
        'deadlift':         [ 1.37, 1.51 ],
        'push_press':       [ 0.79, 0.87 ],
        'strict_press':     [ 0.58, 0.67 ],
        'bench_press':      [ 0.90, 0.98 ]
    },
    'front_squat': {
        'back_squat':       [ 1.05, 1.17 ],
        'snatch':           [ 0.70, 0.78 ],
        'power_snatch':     [ 0.52, 0.60 ],
        'overhead_squat':   [ 0.70, 0.78 ],
        'clean_and_jerk':   [ 0.79, 0.87 ],
        'clean':            [ 0.79, 0.87 ],
        'jerk':             [ 0.85, 0.93 ],
        'front_squat':      [ 1.0,  1.0  ],
        'power_clean':      [ 0.70, 0.78 ],
        'deadlift':         [ 1.22, 1.34 ],
        'push_press':       [ 0.70, 0.78 ],
        'strict_press':     [ 0.52, 0.60 ],
        'bench_press':      [ 0.79, 0.87 ]
    },
    'power_clean': {
        'back_squat':       [ 1.44, 1.56 ],
        'snatch':           [ 0.95, 1.05 ],
        'power_snatch':     [ 0.71, 0.79 ],
        'overhead_squat':   [ 0.95, 1.05 ],
        'clean_and_jerk':   [ 1.07, 1.19 ],
        'clean':            [ 1.07, 1.13 ],
        'jerk':             [ 1.14, 1.26 ],
        'front_squat':      [ 1.28, 1.42 ],
        'power_clean':      [ 1.0,  1.0  ],
        'deadlift':         [ 1.66, 1.80 ],
        'push_press':       [ 0.95, 1.05 ],
        'strict_press':     [ 0.71, 0.79 ],
        'bench_press':      [ 1.07, 1.19 ]
    },
    'deadlift': {
        'back_squat':       [ 0.83, 0.91 ],
        'snatch':           [ 0.54, 0.62 ],
        'power_snatch':     [ 0.39, 0.47 ],
        'overhead_squat':   [ 0.54, 0.62 ],
        'clean_and_jerk':   [ 0.61, 0.69 ],
        'clean':            [ 0.61, 0.69 ],
        'jerk':             [ 0.66, 0.74 ],
        'front_squat':      [ 0.74, 0.82 ],
        'power_clean':      [ 0.54, 0.62 ],
        'deadlift':         [ 1.0,  1.0  ],
        'push_press':       [ 0.54, 0.62 ],
        'strict_press':     [ 0.39, 0.47 ],
        'bench_press':      [ 0.61, 0.69 ]
    },
    'push_press': {
        'back_squat':       [ 1.44, 1.56 ],
        'snatch':           [ 0.96, 1.04 ],
        'power_snatch':     [ 0.71, 0.79 ],
        'overhead_squat':   [ 0.96, 1.04 ],
        'clean_and_jerk':   [ 1.07, 1.19 ],
        'clean':            [ 1.07, 1.19 ],
        'jerk':             [ 1.14, 1.26 ],
        'front_squat':      [ 1.28, 1.42 ],
        'power_clean':      [ 0.96, 1.04 ],
        'deadlift':         [ 1.65, 1.81 ],
        'push_press':       [ 1.0,  1.0  ],
        'strict_press':     [ 0.71, 0.79 ],
        'bench_press':      [ 1.07, 1.19 ]
    },
    'strict_press': {
        'back_squat':       [ 2.12, 2.32 ],
        'snatch':           [ 1.42, 1.54 ],
        'power_snatch':     [ 1.06, 1.16 ],
        'overhead_squat':   [ 1.42, 1.54 ],
        'clean_and_jerk':   [ 1.62, 1.78 ],
        'clean':            [ 1.60, 1.74 ],
        'jerk':             [ 1.70, 1.86 ],
        'front_squat':      [ 1.90, 2.10 ],
        'power_clean':      [ 1.41, 1.55 ],
        'deadlift':         [ 2.40, 2.70 ],
        'push_press':       [ 1.42, 1.54 ],
        'strict_press':     [ 1.0,  1.0  ],
        'bench_press':      [ 1.60, 1.74 ]
    },
    'bench_press': {
        'back_squat':       [ 1.27, 1.39 ],
        'snatch':           [ 0.84, 0.94 ],
        'power_snatch':     [ 0.63, 0.71 ],
        'overhead_squat':   [ 0.84, 0.94 ],
        'clean_and_jerk':   [ 0.96, 1.04 ],
        'clean':            [ 0.96, 1.04 ],
        'jerk':             [ 1.01, 1.13 ],
        'front_squat':      [ 1.14, 1.26 ],
        'power_clean':      [ 0.84, 0.94 ],
        'deadlift':         [ 1.45, 1.61 ],
        'push_press':       [ 0.84, 0.94 ],
        'strict_press':     [ 0.63, 0.71 ],
        'bench_press':      [ 1.0,  1.0  ]
    }
};

function label_indexable(l) {
    return l.toLowerCase().replace(/ /g, '_');
}

function label_result_low(l) {
    return 'result_' + label_indexable(l) + '_low';
}

function label_result_high(l) {
    return 'result_' + label_indexable(l) + '_high';
}

function table_create(th_labels) {
    const table = document.querySelector('#results');

    /*
     * Header.
     */
    const th = table.createTHead();
    const th_row = th.insertRow(0);
    th_labels.forEach(function(l, i) {
        const cell = document.createElement('th');
        cell.innerHTML = l;
        cell.style = 'padding: 0.5em;'
        th_row.appendChild(cell);
    });

    /*
     * Content.
     */
    const tbody = table.createTBody();
    lift_labels.forEach(function(l, i) {
        const row = tbody.insertRow();
        const lift_label = row.insertCell();
        const lift_low = row.insertCell();
        const lift_high = row.insertCell();

        lift_label.appendChild(document.createTextNode(l));
        lift_label.style = 'padding: 0.5em;';

        lift_low.id = label_result_low(l);
        lift_low.style = 'text-align: right; padding: 0.5em;';

        lift_high.id = label_result_high(l);
        lift_high.style = 'text-align: right; padding: 0.5em;';

        row.style.background = (i % 2) ? '#efefef' : '#dfdfdf';
    });
}

function doCalculation(e) {
    const sel_lifts = document.querySelector('#sel_lifts');
    const sel_lift = sel_lifts.options[sel_lifts.selectedIndex].value;
    const load = document.querySelector('#one_rm').value;

    lift_labels.forEach(function(l) {
        const alt_lift = label_indexable(l);
        let low = Math.round(lift_multipliers[sel_lift][alt_lift][LOW] * load);
        let high = Math.round(lift_multipliers[sel_lift][alt_lift][HIGH] * load);

        if (alt_lift == sel_lift) {
            low = "---";
            high = "---";
        }
        document.querySelector('#' + label_result_low(l)).innerHTML = low;
        document.querySelector('#' + label_result_high(l)).innerHTML = high;
    });

    e.preventDefault();
    return false;
}

document.addEventListener('DOMContentLoaded', function() {
    /*
     * Create the calcualtor and results areas.
     */
    const calc = document.querySelector('#tgl-calc');
    const form = document.createElement('form');
    calc.appendChild(form);

    const label_1_rm = document.createElement('span');
    label_1_rm.innerHTML = '1RM';
    label_1_rm.style = 'margin-right: 0.5em;';
    form.appendChild(label_1_rm);

    const input_1_rm = document.createElement('input');
    input_1_rm.id = 'one_rm';
    input_1_rm.type = 'number';
    input_1_rm.style = 'width: 4em; margin-right: 0.5em;';
    form.appendChild(input_1_rm);

    const select_lifts = document.createElement('select');
    select_lifts.id = 'sel_lifts';
    select_lifts.style = 'margin-right: 0.5em;';
    form.append(select_lifts);

    const button_calculate = document.createElement('button');
    button_calculate.id = 'calculate';
    button_calculate.innerHTML = 'Calculate lifts';
    form.append(button_calculate);

    const table_results = document.createElement('table');
    table_results.id = 'results';
    calc.append(table_results);

    /*
     * Populate select in order.
     */
    const sel_lifts = document.querySelector('#sel_lifts');
    lift_labels.forEach(function(l) {
        let opt = document.createElement('option');
        opt.value = label_indexable(l);
        opt.innerHTML = l;
        sel_lifts.appendChild(opt);
    });

    /*
     * Tie submit to calculator.
     */
    document.querySelector('#calculate').addEventListener('click', doCalculation);

    table_create([ 'Lift', 'Low', 'High' ]);
});
