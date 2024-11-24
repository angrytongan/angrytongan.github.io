'use strict';

const phasesTree = {
    tooltip: {
        position: 'inside',
        formatter: (params) => {
            return `Phase ${params.dataIndex}`;
        },
    },
    series: {
        top: '0%',
        type: 'tree',
        data: [
            {
                name: 'Engine Builder',
                children: [
                    {
                        name: 'Polarisation',
                        children: [
                            {
                                name: 'Differentiation',
                                children: [
                                    {
                                        name: 'FLUX',
                                    },
                                ],
                            },
                        ],
                }],
            }
        ],
        animation: false,
        symbolSize: 15,
        expandAndCollapse: false,
        initialTreeDepth: null,
        label: {
            position: 'bottom',
            fontWeight: 'bold',
        },
    },
};

const tracksSankey = {
    /*
    tooltip: {
        trigger: 'item',
        formatter: (params) => {
            return params.name;
        },
    },
    */
    series: {
        type: 'sankey',
        data: [
            { name: 'Engine Builder' },
            { name: 'Polarisation - Pure Capacity' },
            { name: 'Polarisation - MetCon' },
            { name: 'Differentiation - Pure Capacity' },
            { name: 'Differentiation - MetCon' },
            { name: 'FLUX' },
        ],
        links: [
            { value: 2, source: 'Engine Builder', target: 'Polarisation - Pure Capacity' },
            { value: 2, source: 'Engine Builder', target: 'Polarisation - MetCon' },

            { value: 1, source: 'Polarisation - Pure Capacity', target: 'Differentiation - Pure Capacity' },
            { value: 1, source: 'Polarisation - MetCon', target: 'Differentiation - MetCon' },

            { value: 1, source: 'Polarisation - Pure Capacity', target: 'Differentiation - MetCon' },
            { value: 1, source: 'Polarisation - MetCon', target: 'Differentiation - Pure Capacity' },

            { value: 2, source: 'Differentiation - Pure Capacity', target: 'FLUX' },
            { value: 2, source: 'Differentiation - MetCon', target: 'FLUX' },
        ],

        label: {
            position: 'inside',
        },
        left: '10%',
        right: '5%',
        nodeWidth: 10,
        draggable: false,
        emphasis: {
            focus: 'adjacency',
        },
        animation: false,
    },
    animation: false,
};

export default {
    phasesOptions: () => phasesTree,
    tracksOptions: () => tracksSankey,
};
