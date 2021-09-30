<script>
    import EChart from '$lib/components/EChart.svelte';
    import { theme } from '$lib/store';
    import * as charts from './charts.js';
    import { dev } from '$app/env';
</script>

<EChart
    id="test-chart"
    theme={$theme}
    height="300"
    option={charts.compareStrokeFrequency([52817150,55235950])}
/>
