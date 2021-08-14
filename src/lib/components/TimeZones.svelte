<script lang="ts">
    import { onMount, onDestroy } from 'svelte';

    export let timezones = [
        'America/New_York',
        'Europe/London',
        'Asia/Tokyo',
        'Australia/Brisbane',
    ];

    const locale = 'en-US';
    const options: Intl.DateTimeFormatOptions = {
        weekday: 'long',
        month: 'long',
        day: 'numeric',
        year: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: false,
    };

    let now = new Date();
    let intervalId: any;

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

<table>
    {#each timezones as tz}
        <tr>
            <td>{tz}</td>
            <td>{now.toLocaleString(locale, { ...options, timeZone: tz })}</td>
        </tr>
    {/each}
</table>
