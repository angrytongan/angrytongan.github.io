A simple way to toggle light and dark mode in a [Svelte](https://svelte.dev)
application.

---

## What is dark mode?

When enabled on a website, dark mode (also &ldquo;night mode&rdquo;) reduces
the amount of light emitted by a screen by changing the palette of colours
it uses. For instance, changing the background from a paper-white to a dark
gray, and text colour from black to light gray.

Dark mode can be more comfortable to use in low-light conditions. Some
technologies, such as OLED panels, may consume less power which is better
suited for mobile devices.

## Our goal?

We want a component that allows the user to change between light and dark
mode. Third party components should also be notified of the colour mode.

## Method

We specify a dark style in our application stylesheet. When triggered,
we manipulate
[Element.classList](https://developer.mozilla.org/en-US/docs/Web/API/Element/classList)
on ```&lt;body&gt;``` to add or remove this class. We use a Svelte
[store](https://svelte.dev/docs#4_Prefix_stores_with_$_to_access_their_values)
to track the change, which allows third-party components to alter their
rendering.

### The CSS

A very simple implementation of the CSS required may look like (say ```static/styles.css```):

```css
.light {
    background: #eee;
    color: #121212;
}
.dark {
    background: #121212;
    color: #aaa;
}
```

### The store

We track the selected mode in our store, say ```store.js```:

```js
import { writable } from 'svelte/store';
export const colourScheme = writable('light');
```

### The component

A ```&lt;select&gt;``` element allows the user to switch between modes. We bind
to ```$colourScheme``` so any subscribers will get notification of the change
(say ```./ColourScheme.svelte```):

```js
<script>
    import { colourScheme } from './store.js';

    const schemes = [ 'light', 'dark' ];

    $: {
        document.body.classList.remove(...schemes);
        document.body.classList.add($colourScheme);
    }
</script>

<select bind:value={$colourScheme}>
    {#each schemes as s}
        <option value={s}>{s}</option>
    {/each}
</select>
```

## Usage

Include the component wherever it's required:

```js
<script>
    import ColourScheme from './ColourScheme.svelte';
</script>

<ColourScheme />
```

An implementation can be seen on this website, at the top of the page.

## Summary

We created a component that allows the user to choose between two colour modes, specified in CSS. The chosen colour mode is stored in a Svelte store, available to other subscribed components.

### Improvements

- Some applications may require extending light / dark mode to a generic
  &ldquo;theme&rdquo; mode, where selection from a number of palettes can be
  performed by the user. Extending the above solution would be trivial for this
  case.
- The solution demonstrated above ignores the CSS media
  [prefers-color-scheme](https://developer.mozilla.org/en-US/docs/Web/CSS/@media/prefers-color-scheme). At a minimum, the default selection for the mode chooser should
  adhere to the value of this feature.
- [SvelteKit](https://kit.svelte.dev) performs server-side rendering of the
  application, so ```document``` is not available and the reference to it in
  the above example will fail. This should be guarded by ```browser``` from
  ```$app/env```. More details
  [here](https://kit.svelte.dev/docs#modules-$app-env).

## More information

- [Element.classList](https://developer.mozilla.org/en-US/docs/Web/API/Element/classList)
- [Svelte stores](https://svelte.dev/docs#4_Prefix_stores_with_$_to_access_their_values)
