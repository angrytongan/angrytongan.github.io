<script lang="ts">
    /*
     * Simple breadcrumb component.
     */
    export let path: string;

    interface Crumb {
        label: string;
        href: string;
    }

    let crumbs: Array<Crumb> = [];

    $: {
        /*
         * Strip zero-length tokens.
         */
        const tokens: Array<string> = path.split('/').filter((t: string) => t !== '');

        /*
         * Create the breadcrumb trail.
         */
        let tokenPath = '';
        crumbs = tokens.map((t: string) => {
            tokenPath += '/' + t;
            return {
                label: t,
                href: tokenPath,
            };
        });

        /*
         * Put in a link to home.
         */
        crumbs.unshift({ label: 'home', href: '/' });
    }
</script>

{#each crumbs as c, i}
    {#if i == crumbs.length-1}
        / {c.label}
    {:else}
        / <a href={c.href}>{c.label}</a>&nbsp;
    {/if}
{/each}
