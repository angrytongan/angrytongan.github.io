<script lang="ts">
    import { onMount, onDestroy } from 'svelte';
    import WallClock from '$lib/components/WallClock.svelte';

    export let timezones = [
        'America/New_York',
        'Europe/London',
        'Asia/Tokyo',
        'Australia/Brisbane',
        'Australia/Perth',
    ];

    let intervalId: any;
    let now = new Date();

    onMount(() => {
        intervalId = setInterval(() => {
            now = new Date();
        }, 1000);
    });

    onDestroy(() => {
        if (intervalId) {
            clearInterval(intervalId);
        }
    });
</script>

<div class="clocks">
    {#each timezones as timezone}
        <div class="clock">
            <WallClock {now} {timezone} />
        </div>
    {/each}
</div>

<style>
    .clocks {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-evenly;
    }
    .clock {
        width: 30%;
    }
</style>
