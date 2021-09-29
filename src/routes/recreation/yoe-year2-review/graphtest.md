<script>
    import EChart from '$lib/components/EChart.svelte';
    import { theme } from '$lib/store';
    import * as charts from './charts.js';
    import { dev } from '$app/env';
</script>

<EChart
    id="test-chart"
    theme={$theme}
    height="400"
    option={charts.compareSplits([52817150,55235950])}
/>
