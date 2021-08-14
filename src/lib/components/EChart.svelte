<script lang="ts">
    import { onMount, onDestroy } from 'svelte';
    import * as echarts from 'echarts';

    export let id: string;
    export let theme: string;
    export let width: number = 200;
    export let height: number = 200;

    export let option = {
        backgroundColor: 'rgba(0, 0, 0, 0)',
        title: {
            text: 'Default chart placeholder',
        },
    };
    export let notMerge: boolean = false;
    export let replaceMerge: string | string[] = undefined;
    export let lazyUpdate: boolean = false;

    let chart: any;

    const setOption = () => {
        if (chart && !chart.isDisposed()) {
            option.backgroundColor = 'rgba(0, 0, 0, 0)';
            chart.setOption(option, notMerge, replaceMerge, lazyUpdate);
        }
    };

    const destroyChart = () => {
        if (chart && !chart.isDisposed()) {
            chart.dispose();
        }
    };

    const makeChart = () => {
        destroyChart();
        chart = echarts.init(document.getElementById(id), theme);
    };

    onMount(() => {
        makeChart();
    });

    onDestroy(() => {
        destroyChart();
    });

    let timeoutId: any;
    const handleResize = () => {
        if (timeoutId == undefined) {
            timeoutId = setTimeout(() => {
                if (chart && !chart.isDisposed()) {
                    chart.resize();
                }
                timeoutId = undefined;
            }, 500);
        }
    };

    $: width && handleResize();
    $: option && setOption();
    $: if (chart && theme) {
        makeChart();
        setOption();
    }
</script>

<div bind:clientWidth={width}>
    <div
        id={id}
        style="height: {height}px"
    />
</div>
