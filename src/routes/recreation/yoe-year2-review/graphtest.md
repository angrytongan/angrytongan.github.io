<script>
    import EChart from '$lib/components/EChart.svelte';
    import { theme } from '$lib/store';
    import * as charts from './charts.js';
    import { dev } from '$app/env';
</script>

<EChart
    id="graph-tt-airdyne-bikeerg"
    theme={$theme}
    height="150"
    option={charts.bikeergAirdyne()}
/>
