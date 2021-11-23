A quick and dirty way to add breadcrumbs to your
[SvelteKit](https://kit.svelte.dev) application.

---

## What are breadcrumbs?

Breadcrumbs provide a visual indicator to a user where they are located in the
hierarchy of pages of a website. They also provide a quick way to navigate the
path back to the root of the hierarchy by adding links:

> <u>Home</u> &gt; <u>Technical</u> &gt; <u>Svelte</u> &gt; Breadcrumbs

## Our goal?

We want to build a simple breadcrumb component. We do not want to manually
include the component on each page, nor manage it's contents. The component
must update every time the user moves to a different page.

## Method

SvelteKit uses a filesystem-based router. Files named `__layout.svelte`
determine the layout for the current page and pages below itself in the file
hierarchy. We can use use SvelteKit's store `page` to determine what the current
path is, and pass that location to a breadcrumb component which we add to the
layout.

### The breadcrumb component

Our breadcrumb component is a normal Svelte component, accepting the current
path as a prop, and displays some variation of it as a breadcrumb (say
`$lib/components/breadcrumb.svelte`):

```js
<script>
    export let path;

    $: {
        // Remove zero-length tokens.
        const tokens = path.split('/').filter((t) => t !== '');

        // Create { label, href } pairs for each token.
        let tokenPath = '';
        crumbs = tokens.map((t) => {
            tokenPath += '/' + t;
            return {
                label: t,
                href: tokenPath,
            };
        });

        // Add a way to get home too.
        crumbs.unshift({ label: 'home', href: '/' });
    }
</script>

{#each crumbs as c, i}
    {#if i == crumbs.length-1}
        {c.label}
    {:else}
        <a href={c.href}>{c.label}</a> &gt;&nbsp;
    {/if}
{/each}
```

### `__layout.svelte`

In `src/routes/__layout.svelte`, we pull out the page from `$app/stores`, and
pass the path store to the breadcrumb component as a prop:

```js
<script>
    import Breadcrumb from '$lib/components/Breadcrumb.svelte';
    import { page } from '$app/stores';
</script>

<Breadcrumb path={$page.path} />
```

An implementation can be seen on this website, at the top of the page.

## Summary

We created a breadcrumb component that is simple, requires no manual
intervention for either it's inclusion or management, and is fully
reactive. New pages can be added to the application with no regard to
the breadcrumb, and it will act accordingly.

### Improvements

-   Our example solution above only shows elements from the path. Real
    applications may want to change these to use language more contextually
    correct. One way would be to map each path token to a dictionary; this
    would require maintaining the dictionary every time a new page is added.

## More information

-   [SvelteKit](https://kit.svelte.dev)
