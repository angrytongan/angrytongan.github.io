<script>
    import EChart from '$lib/components/EChart.svelte';
    import { theme } from '$lib/store';
    import * as charts from './charts.js';
    import { dev } from '$app/env';
</script>

<EChart
    id="graph-time-commitment"
    theme={$theme}
    height="250"
    option={charts.timeCommitment()}
/>
