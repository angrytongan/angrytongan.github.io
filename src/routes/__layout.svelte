<script lang="ts">
    import Theme from '$lib/components/Theme.svelte';
    import Breadcrumb from '$lib/components/Breadcrumb.svelte';
    import { page } from '$app/stores';
</script>

<svelte:head>
    <title>df.id.au - {$page.path}</title>
</svelte:head>

<div class="wrapper">
    <main>
        <div class="header">
            <img src="/13109002_223898111320684_484395489_n.jpg" alt="Dean Fogarty" />
            <span class="theme"><Theme /></span>
            <h1>df.id.au</h1>
            <h4>Dean Fogarty</h4>
            <Breadcrumb path={$page.path} />

            <hr />
        </div>

        <slot />
    </main>

    <footer>
        <hr />
        <p>
            Want to say g'day? Drop me an <a href="mailto:dean@df.id.au">email</a>.
            <span class="right">
                Style by <a target="_blank" href="https://uglyduck.ca/typesafe-css">TypeSafe CSS</a>
            </span>
        </p>
    </footer>
</div>

<style>
    h1,
    h4 {
        margin: 0;
    }
    img {
        width: 100px;
        border-radius: 50%;
        float: left;
        margin-right: 1em;
    }
    .right,
    .theme {
        float: right;
    }
    .wrapper {
        display: flex;
        min-height: 96vh;
        flex-direction: column;
        justify-content: space-between;
    }

    @media print {
        .header,
        footer {
            display: none;
        }
    }
</style>
