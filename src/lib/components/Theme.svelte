<script lang="ts">
    import { browser } from '$app/env';
    import { theme } from '$lib/store';

    const themes = [ 'light', 'dark' ];

    $: if (browser) {
        document.body.classList.remove(...themes);
        document.body.classList.add($theme);
    }
</script>

<select bind:value={$theme}>
    {#each themes as s}
        <option value={s}>{s}</option>
    {/each}
</select>
