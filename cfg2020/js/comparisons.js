'use strict';

import { EChart } from '/yoe-year1-review/js/utils/echart.js';
import { dateTime } from '/yoe-year1-review/js/utils/datetime.js';

/*
 * Damn Diane
 */
const damnDiane = {
    athletes: [
        {
            name: 'Mat Fraser',
            video: 'https://www.youtube.com/watch?v=2ahJn_-env4',
            events: [
                { where: 'Transition',  start: 3.245329335942505,   stop: 4.085466853111816 },
                { where: 'Deadlift',    start: 4.085466853111816,   stop: 20.627931012722048 },
                { where: 'Transition',  start: 20.627931012722048,  stop: 25.27900814325879 },
                { where: 'HSPU',    start: 25.27900814325879,   stop: 41.488779322092654 },
                { where: 'Transition',  start: 41.488779322092654,  stop: 44.74402789689136 },
                { where: 'Deadlift',    start: 44.74402789689136,   stop: 62.623684551188475 },
                { where: 'Transition',  start: 62.623684551188475,  stop: 66.92985834683387 },
                { where: 'HSPU',    start: 66.92985834683387,   stop: 93.0602678087157 },
                { where: 'Transition',  start: 93.0602678087157,    stop: 97.19930086090417 },
                { where: 'Deadlift',    start: 97.19930086090417,   stop: 121.8838821724856 },
                { where: 'Transition',  start: 121.8838821724856,   stop: 125.88393598405115 },
                { where: 'HSPU',    start: 125.88393598405115,  stop: 165.8416222216869 },
                { where: 'Transition',  start: 165.8416222216869,   stop: 167.89871122884668 },
            ],
        },
        {
            name: 'Noah Olsen',
            video: 'https://www.youtube.com/watch?v=tkoeTJZ1N_8',
            events: [
                { where: 'Transition',  start: 14.125258655185302,  stop: 15.014334101277955 },
                { where: 'Deadlift',    start: 15.014334101277955,  stop: 31.562126121460082 },
                { where: 'Transition',  start: 31.562126121460082,  stop: 35.93398190805432 },
                { where: 'HSPU',    start: 35.93398190805432,   stop: 55.80639911264539 },
                { where: 'Transition',  start: 55.80639911264539,   stop: 61.57194005852393 },
                { where: 'Deadlift',    start: 61.57194005852393,   stop: 88.39700631898718 },
                { where: 'Transition',  start: 88.39700631898718,   stop: 93.02122306407666 },
                { where: 'HSPU',    start: 93.02122306407666,   stop: 115.68357995209266 },
                { where: 'Transition',  start: 115.68357995209266,  stop: 122.18357969003198 },
                { where: 'Deadlift',    start: 122.18357969003198,  stop: 149.1095757280863 },
                { where: 'Transition',  start: 149.1095757280863,   stop: 153.71278506462622 },
                { where: 'HSPU',    start: 153.71278506462622,  stop: 189.28062693764855 },
                { where: 'Transition',  start: 189.28062693764855,  stop: 190.89701972622046 },
            ],
        },
        {
            name: 'Chandler Smith',
            video: 'https://www.youtube.com/watch?v=JuLCMPM8AMQ',
            events: [
                { where: 'Transition',  start: 10.303110460086303,  stop: 11.255293102389771 },
                { where: 'Deadlift',    start: 11.255293102389771,  stop: 30.181834184661376 },
                { where: 'Transition',  start: 30.181834184661376,  stop: 37.382052008440915 },
                { where: 'HSPU',    start: 37.382052008440915,  stop: 62.434073813111816 },
                { where: 'Transition',  start: 62.434073813111816,  stop: 70.15090681386901 },
                { where: 'Deadlift',    start: 70.15090681386901,   stop: 89.42376589957824 },
                { where: 'Transition',  start: 89.42376589957824,   stop: 100.13370381348243 },
                { where: 'HSPU',    start: 100.13370381348243,  stop: 140.29394536583703 },
                { where: 'Transition',  start: 140.29394536583703,  stop: 152.36139129228113 },
                { where: 'Deadlift',    start: 152.36139129228113,  stop: 171.13683565105433 },
                { where: 'Transition',  start: 171.13683565105433,  stop: 182.80910499722364 },
                { where: 'HSPU',    start: 182.80910499722364,  stop: 248.66352514336427 },
                { where: 'Transition',  start: 248.66352514336427,  stop: 249.75060284222363 },
            ],
        },
        {
            name: 'Travis Mayer',
            video: 'https://www.youtube.com/watch?v=cI-u4yl1nLA',
            events: [
                { where: 'Transition',  start: 14.74378849037378,   stop: 15.579605212744385 },
                { where: 'Deadlift',    start: 15.579605212744385,  stop: 33.65264642762939 },
                { where: 'Transition',  start: 33.65264642762939,   stop: 38.70310961051758 },
                { where: 'HSPU',    start: 38.70310961051758,   stop: 67.7433091934121 },
                { where: 'Transition',  start: 67.7433091934121,    stop: 72.47127686755273 },
                { where: 'Deadlift',    start: 72.47127686755273,   stop: 103.73953589905115 },
                { where: 'Transition',  start: 103.73953589905115,  stop: 113.31273414162939 },
                { where: 'HSPU',    start: 113.31273414162939,  stop: 184.12255823631628 },
                { where: 'Transition',  start: 184.12255823631628,  stop: 188.1285554008882 },
                { where: 'Deadlift',    start: 188.1285554008882,   stop: 231.482671971885 },
                { where: 'Transition',  start: 231.482671971885,    stop: 243.93801576933862 },
                { where: 'HSPU',    start: 243.93801576933862,  stop: 352.35200458496485 },
                { where: 'Transition',  start: 352.35200458496485,  stop: 353.7679639444281 },
            ],
        },
        {
            name: 'Dan Bailey',
            video: 'https://www.youtube.com/watch?v=zwrINPMeQuw',
            events: [
                { where: 'Transition',  start: 72.31203668328112, stop: 72.31203668328112 },
                { where: 'Deadlift',    start: 72.31203668328112,   stop: 97.05446143457507 },
                { where: 'Transition',  start: 97.05446143457507,   stop: 101.66771032257508 },
                { where: 'HSPU',    start: 101.66771032257508,  stop: 133.43683167077955 },
                { where: 'Transition',  start: 133.43683167077955,  stop: 139.12789701023962 },
                { where: 'Deadlift',    start: 139.12789701023962,  stop: 189.35573078426197 },
                { where: 'Transition',  start: 189.35573078426197,  stop: 195.07763931061024 },
                { where: 'HSPU',    start: 195.07763931061024,  stop: 274.39737257694253 },
                { where: 'Transition',  start: 274.39737257694253,  stop: 279.706023542738 },
                { where: 'Deadlift',    start: 279.706023542738,    stop: 342.0921674291853 },
                { where: 'Transition',  start: 342.0921674291853,   stop: 346.95563877961024 },
                { where: 'HSPU',    start: 346.95563877961024,      stop: 435.0 },
                { where: 'Transition',  start: 435.0,               stop: 435.0 },
            ],
        },
    ],
};

/*
 * Friendly Fran
 */
const friendlyFran = {
    athletes: [
        {
            name: 'Mat Fraser',
            video: 'https://www.youtube.com/watch?v=ix22fp-GXVg',
            events: [
                { where: 'Transition',  start: 4.195692942760376,   stop: 5.730776220853027 },
                { where: 'Thrusters',   start: 5.730776220853027,   stop: 39.387695500402586 },
                { where: 'Transition',  start: 39.387695500402586,  stop: 43.59936359399683 },
                { where: 'C2B',         start: 43.59936359399683,   stop: 65.77851560205433 },
                { where: 'Transition',  start: 65.77851560205433,   stop: 69.10145139944727 },
                { where: 'Thrusters',   start: 69.10145139944727,   stop: 102.8075821088147 },
                { where: 'Transition',  start: 102.8075821088147,   stop: 106.53245404011182 },
                { where: 'C2B',         start: 106.53245404011182,  stop: 128.32642211027795 },
                { where: 'Transition',  start: 128.32642211027795,  stop: 131.78879862203198 },
                { where: 'Thrusters',   start: 131.78879862203198,  stop: 165.75979614470606 },
                { where: 'Transition',  start: 165.75979614470606,  stop: 169.46497493844092 },
                { where: 'C2B',         start: 169.46497493844092,  stop: 191.2295994617412 },
                { where: 'Transition',  start: 191.2295994617412,   stop: 192.96383004373803 },
            ]
        },
        /*
        {
            name: 'Tia-Clair Toomey',
            video: 'https://www.youtube.com/watch?v=96lnwFRblbQ',
            events: [
                { where: 'Transition',  start: 5.422516505389771,   stop: 6.384627211057495 },
                { where: 'Thrusters',   start: 6.384627211057495,   stop: 40.28464830279871 },
                { where: 'Transition',  start: 40.28464830279871,   stop: 43.374200567530394 },
                { where: 'C2B',         start: 43.374200567530394,  stop: 64.06519550038342 },
                { where: 'Transition',  start: 64.06519550038342,   stop: 66.53790677503834 },
                { where: 'Thrusters',   start: 66.53790677503834,   stop: 103.53400480009265 },
                { where: 'Transition',  start: 103.53400480009265,  stop: 107.83355335407984 },
                { where: 'C2B',         start: 107.83355335407984,  stop: 128.84960706196483 },
                { where: 'Transition',  start: 128.84960706196483,  stop: 133.12812606119164 },
                { where: 'Thrusters',   start: 133.12812606119164,  stop: 178.41991440196483 },
                { where: 'Transition',  start: 178.41991440196483,  stop: 187.99444796698083 },
                { where: 'C2B',         start: 187.99444796698083,  stop: 224.4421324771278 },
                { where: 'Transition',  start: 224.4421324771278,   stop: 226.09456379031312 },
            ],
        },
        {
            name: 'Kara Saunders',
            video: 'https://www.youtube.com/watch?v=GrGzJHHHiJU',
            events: [
                { where: 'Transition',  start: 8.037041861185303,   stop: 10.024688888616577 },
                { where: 'Thrusters',   start: 10.024688888616577,  stop: 44.50708983391052 },
                { where: 'Transition',  start: 44.50708983391052,   stop: 48.997435016907346 },
                { where: 'C2B', start: 48.997435016907346,  stop: 69.6042850593866 },
                { where: 'Transition',  start: 69.6042850593866,    stop: 73.3985590812716 },
                { where: 'Thrusters',   start: 73.3985590812716,    stop: 112.13556124846326 },
                { where: 'Transition',  start: 112.13556124846326,  stop: 121.96251661798718 },
                { where: 'C2B', start: 121.96251661798718,  stop: 142.21972444340577 },
                { where: 'Transition',  start: 142.21972444340577,  stop: 147.15849824155907 },
                { where: 'Thrusters',   start: 147.15849824155907,  stop: 190.06489891940893 },
                { where: 'Transition',  start: 190.06489891940893,  stop: 201.61707969644092 },
                { where: 'C2B', start: 201.61707969644092,  stop: 235.16338333638976 },
                { where: 'Transition',  start: 235.16338333638976,  stop: 238.06980723681787 },
            ],
        },
        */
        {
            name: 'Noah Olsen',
            video: 'https://youtu.be/Hb0w8i_aCN8',
            events: [
                { where: 'Transition',  start: 15.763345387265137,  stop: 17.35106081391052 },
                { where: 'Thrusters',   start: 17.35106081391052,   stop: 49.814348184926516 },
                { where: 'Transition',  start: 49.814348184926516,  stop: 53.8602999797572 },
                { where: 'C2B',         start: 53.8602999797572,    stop: 75.58456132661023 },
                { where: 'Transition',  start: 75.58456132661023,   stop: 82.47005616681152 },
                { where: 'Thrusters',   start: 82.47005616681152,   stop: 116.46126721375403 },
                { where: 'Transition',  start: 116.46126721375403,  stop: 124.35360892082751 },
                { where: 'C2B',         start: 124.35360892082751,  stop: 146.74356277809264 },
                { where: 'Transition',  start: 146.74356277809264,  stop: 163.20121842786585 },
                { where: 'Thrusters',   start: 163.20121842786585,  stop: 198.7637077525974 },
                { where: 'Transition',  start: 198.7637077525974,   stop: 213.8195584873546 },
                { where: 'C2B',         start: 213.8195584873546,   stop: 249.83214295223644 },
                { where: 'Transition',  start: 249.83214295223644,  stop: 251.60957793366137 },
            ],
        },
        {
            name: 'Chandler Smith',
            video: 'https://youtu.be/Rxjm_y4X1hk',
            events: [
                { where: 'Transition',  start: 15.524682032239625,  stop: 17.13326853216931 },
                { where: 'Thrusters',   start: 17.13326853216931,   stop: 51.19894047017249 },
                { where: 'Transition',  start: 51.19894047017249,   stop: 56.965064859559085 },
                { where: 'C2B',         start: 56.965064859559085,  stop: 80.01066886061022 },
                { where: 'Transition',  start: 80.01066886061022,   stop: 89.06416063649841 },
                { where: 'Thrusters',   start: 89.06416063649841,   stop: 135.18481095107347 },
                { where: 'Transition',  start: 135.18481095107347,  stop: 147.04969678671887 },
                { where: 'C2B',         start: 147.04969678671887,  stop: 170.1998814857412 },
                { where: 'Transition',  start: 170.1998814857412,   stop: 183.6196736371533 },
                { where: 'Thrusters',   start: 183.6196736371533,   stop: 231.9805312411278 },
                { where: 'Transition',  start: 231.9805312411278,   stop: 240.81541613542493 },
                { where: 'C2B',         start: 240.81541613542493,  stop: 284.3886093362971 },
                { where: 'Transition',  start: 284.3886093362971,   stop: 286.2244216676102 },
            ]
        },
        {
            name: 'Travis Mayer',
            video: 'https://youtu.be/y1bjBEVuzWQ',
            events: [
                { where: 'Transition',  start: 15.777692443817871,  stop: 17.756024791757202 },
                { where: 'Thrusters',   start: 17.756024791757202,  stop: 52.198939261645386 },
                { where: 'Transition',  start: 52.198939261645386,  stop: 60.65498990484668 },
                { where: 'C2B',         start: 60.65498990484668,   stop: 82.77860788970288 },
                { where: 'Transition',  start: 82.77860788970288,   stop: 93.02479800094885 },
                { where: 'Thrusters',   start: 93.02479800094885,   stop: 131.7218429120735 },
                { where: 'Transition',  start: 131.7218429120735,   stop: 143.58753626492333 },
                { where: 'C2B',         start: 143.58753626492333,  stop: 179.75152688396486 },
                { where: 'Transition',  start: 179.75152688396486,  stop: 195.61329185647924 },
                { where: 'Thrusters',   start: 195.61329185647924,  stop: 248.90496098751757 },
                { where: 'Transition',  start: 248.90496098751757,  stop: 266.3790466220958 },
                { where: 'C2B',         start: 266.3790466220958,   stop: 303.713311738278 },
                { where: 'Transition',  start: 303.713311738278,    stop: 306.0061193746869 },
            ],
        },
        {
            name: 'Dan Bailey',
            video: 'https://www.youtube.com/watch?v=s7xyahifCbs',
            events: [
                { where: 'Transition',  start: 52.35234437635779,   stop: 52.35234437635779 },
                { where: 'Thrusters',   start: 52.35234437635779,   stop: 94.83325208144727 },
                { where: 'Transition',  start: 94.83325208144727,   stop: 100.04533473909265 },
                { where: 'C2B',         start: 100.04533473909265,  stop: 122.0852319349425 },
                { where: 'Transition',  start: 122.0852319349425,   stop: 129.6434772188882 },
                { where: 'Thrusters',   start: 129.6434772188882,   stop: 194.63537315566455 },
                { where: 'Transition',  start: 194.63537315566455,  stop: 199.77730366627478 },
                { where: 'C2B',         start: 199.77730366627478,  stop: 234.60465794349523 },
                { where: 'Transition',  start: 234.60465794349523,  stop: 240.671608664869 },
                { where: 'Thrusters',   start: 240.671608664869,    stop: 323.3906946115016 },
                { where: 'Transition',  start: 323.3906946115016,   stop: 328.2175135623514 },
                { where: 'C2B',         start: 328.2175135623514,   stop: 367.07261417207667 },
                { where: 'Transition',  start: 367.07261417207667,  stop: 367.07261417207667 },
            ],
        },
    ]
};

const comparisonGraph = (workout, name) => {
    const xAxis = [];
    const yAxis = [];
    const series = [];
    const dataset = [];
    const legend = [];
    const tooltip = [];
    const grid = [];
    const title = [];

    grid.push({
        left: '15%',
    });

    legend.push({
        top: '9%',
    });

    tooltip.push({
        formatter: (params) => {
            if (params.length == undefined) {
                return `${params.value.athlete}<br />${params.marker} ${params.seriesName}: ${dateTime.secs2mmss(params.value.duration, true)}<br />`;
            }
        },
    });

    title.push({
        text: `CF Games 2020 - ${name}`,
        textAlign: 'center',
        left: 'middle',
    });

    xAxis.push({
        type: 'value',
        axisLabel: {
            formatter: (value) => dateTime.secs2mmss(value),
        },
        axisPointer: {
            show: true,
            label: {
                formatter: (value) => dateTime.secs2mmss(value.value),
            },
        },
    });
    yAxis.push({
        type: 'category',
    });

    /*
     * results = [
     *      { where: 'Transition', durations: [ { athlete: 'Noah Olsen', duration: 1.7 }, ... ] },
     *      ...
     * ]
     */

    const wheres = workout.athletes.length > 0 ? workout.athletes[0].events.map((ev) => ev.where) : [];
    const results = wheres.map((w) => ({ where: w, durations: [] }));

    workout.athletes.forEach((athlete) => {
        athlete.events.forEach((ev, i) => {
            results[i].durations.push({
                athlete: athlete.name,
                duration: ev.stop - ev.start,
            });
        });
    });

    results.forEach((r, i) => {
        dataset.push({
            dimensions: [ 'athlete', 'duration' ],
            source: r.durations,
        });

        series.push({
            type: 'bar',
            name: r.where,
            stack: 'fred',
            encode: {
                x: 'duration',
                y: 'athlete',
            },
            label: {
                show: !r.where.match(/transition/i),
                position: 'insideRight',
                formatter: (params) => dateTime.secs2mmss(params.value.duration, true),
            },
            datasetIndex: i,
        });
    });

    return {
        title,
        grid,
        xAxis,
        yAxis,
        series,
        dataset,
        legend,
        tooltip,
    };
};

export const comparisons = {
    friendlyFran: () => comparisonGraph(friendlyFran, 'Friendly Fran'),
    damnDiane: () => comparisonGraph(damnDiane, 'Damn Diane'),
};
