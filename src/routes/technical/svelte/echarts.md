<script lang="ts">
    import { onMount, onDestroy } from 'svelte';
    import { theme } from '$lib/store';
    import EChart from '$lib/components/EChart.svelte';

    let marching = true;
    let refresh = 2;

    const randomData = (n) => {
        return [ ...Array(30).keys() ].map((i) => {
            return [ i, Math.random() ];
        });
    };

    const option = {
        animation: false,
        title: {
            text: 'Sample chart',
            left: 'center',
            top: 0,
        },
        legend: {
            type: 'scroll',
            top: 25,
        },
        grid: [{
            top: 50,
            bottom: 0,
            left: 0,
            right: 0,
            containLabel: true,
        }],
        xAxis: [{
            type: 'category',
        }],
        yAxis: [{
            type: 'value',
        }],
        dataset: [
            { sourceHeader: false, source: randomData(30), },
            { sourceHeader: false, source: randomData(30), },
            { sourceHeader: false, source: randomData(30), },
            { sourceHeader: false, source: randomData(30), },
        ],
        series: [
            {
                name: 'Series 1',
                type: 'bar',
                gridIndex: 0,
                xAxisIndex: 0,
                yAxisIndex: 0,
                datasetIndex: 0,
                stack: 'the-stack',
            },
            {
                name: 'Series 2',
                type: 'bar',
                gridIndex: 0,
                xAxisIndex: 0,
                yAxisIndex: 0,
                datasetIndex: 1,
            },
            {
                name: 'Series 3',
                type: 'line',
                symbolSize: 10,
                gridIndex: 0,
                xAxisIndex: 0,
                yAxisIndex: 0,
                datasetIndex: 2,
                stack: 'the-stack',
            },
            {
                name: 'Series 4',
                type: 'bar',
                symbolSize: 10,
                gridIndex: 0,
                xAxisIndex: 0,
                yAxisIndex: 0,
                datasetIndex: 3,
                stack: 'the-stack',
            },
        ],
    };

    const march = () => {
        option.dataset.forEach((o) => {
            o.source.shift();
            o.source.push([ o.source[o.source.length-1][0]+1, Math.random() ]);
        });
        option = option;
    };

    let intervalId: any;

    onDestroy(() => {
        if (intervalId) {
            clearInterval(intervalId);
        }
    });

    $: if (marching) {
        clearInterval(intervalId);
        intervalId = setInterval(march, refresh * 1000);
    } else {
        if (intervalId) {
            clearInterval(intervalId);
            intervalId = undefined;
        }
    }

    $: {
        if (intervalId) {
            clearInterval(intervalId);
            intervalId = setInterval(march, refresh * 1000);
        }
    }

</script>

A minimal component that wraps [Apache ECharts](https://echarts.apache.org).

---

<div>
    <EChart
        id="echart-article-chart"
        {option}
        theme={$theme}
    />
    <label>
        <input type="checkbox" bind:checked={option.animation} /> Animation
    </label>
    <label>
        <input type="checkbox" bind:checked={marching} /> March
    </label>
    <label>
        <input type="range" bind:value={refresh} min="0.5" max="3" step="0.5" /> {refresh}Hz
    </label>
</div>

## Our goal?

Provide a minimal wrapper around Apache ECharts. It must be responsive to
size, options and theme changes.

## Method

Install echarts as per [the manual](https://echarts.apache.org/en/tutorial.html#Get%20Started%20with%20ECharts%20in%205%20minutes):

```
% npm install echarts
```

The component itself is straightforward, if a little long. We will break it up
into parts.

### Component initialisation

```js
    import { onMount, onDestroy } from 'svelte';
    import * as echarts from 'echarts';
```

```onMount()``` and ```onDestroy()``` are used for initialisation and cleanup
of the ECharts instance.

### Props

Required for [chart initialisation](https://echarts.apache.org/en/api.html#echarts.init):

```js
    export let id;
    export let theme;
    export let width = 200;
    export let height = 200;
```

Required for [setting chart
options](https://echarts.apache.org/en/api.html#echartsInstance.setOption):

```js
    export let option;
    export let notMerge = false;
    export let replaceMerge = undefined;
    export let lazyUpdate = false;
```

### Setup

Creating and destroying the chart, as well as setting chart options:

```js
    let chart;                      // our chart instance

    const setOption = () => {
        if (chart && !chart.isDisposed()) {
            chart.setOption(
                option,
                notMerge,
                replaceMerge,
                lazyUpdate
            );
        }
    };

    const destroyChart = () => {
        if (chart && !chart.isDisposed()) {
            chart.dispose();
        }
    };

    const makeChart = () => {
        destroyChart();
        chart = echarts.init(
            document.getElementById(id),
            theme
        );
    };
```

Initialisation and teardown:

```js
    onMount(() => {
        makeChart();
    });

    onDestroy(() => {
        destroyChart();
    });
```

### Resizing

Resizing with ECharts is done using ```echartsInstance.resize()```.
Debouncing has been added in this example:

```js
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
```

### Reactivity

We want the component to react to changes in size, option and theme. While
```width``` and ```option``` are easy, changing the theme requires destroying
the chart and remaking it:

```js
    $: width && handleResize();
    $: option && setOption();
    $: if (chart && theme) {
        makeChart();
        setOption();
    }
```

### The DOM

ECharts requires attaching to a DOM element, identified by ```id```. We take
advantage of [Svelte's block element
bindings](https://svelte.dev/docs#Block-level_element_bindings) to watch for
changes in width:

```js
<div bind:clientWidth={width}>
    <div
        id={id}
        style="height: {height}px"
    />
</div>
```

### All together

Putting all those elements together (say, ```./EChart.js```):

```js
<script>
    // component initialisation
    // props
    // setup
    // resizing
    // reactivity
</script>

<!-- the DOM -->

```

## Usage

Use the component whever it's required. Supply arguments as per [the
manual](https://echarts.apache.org/en/option.html#title):

```js
<script>
    import EChart from './EChart.js';

    let option = {
        title: {
            text: 'Chart title',
        },
        ...
    };
</script>

<div>
    <EChart {option} />
</div>
```

## Summary

We created the minimal wrapper around Apache ECharts. It is a fully reactive
component, handling sizing, options and theme changes.

### Improvements

- This component does the minimum required; it could be filled out to better
match the [ECharts Instance API](https://echarts.apache.org/en/api.html#echarts).

## More information

- [Apache ECharts](https://echarts.apache.org)
