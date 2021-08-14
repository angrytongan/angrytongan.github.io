Easily persisting data in [Svelte
stores](https://svelte.dev/docs#4_Prefix_stores_with_$_to_access_their_values)
to browser localStorage.

---

## What is localStorage?

Browser
[localStorage](https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage)
allows web applications to retain application data within the browser, with no
expiration date, which persists after the browser is shutdown. It is limited in
size and should not be used for private data, but very useful for storing
application state.

## Our goal?

We want to persist data that we put in a Svelte store in localStorage. For the
developer, the interface to a localStorage store should use be no different to
using a standard Svelte store.

### Aside: Svelte stores

Svelte stores are accessed by prefixing the store variable with ```$```:

```js
<script>
    import { writable } from 'svelte/store';

    const value = writable(0);  // create a store holding 0

    console.log($value);        // outputs 0
    $value = 12345;             // puts 12345 in the store
    console.log($value);        // outputs 12345
</script>
```

Convention is to place store variables in a file (say ```store.js```) that can
be imported into multiple components:

```js
<script>
    import { value } from './store.js';

    console.log($value);
    $value = 54321;
</script>
```

Stores are also reactive. Components who subscribe to the store will be
notified when the store value changes.

## Method

We will create a [custom Svelte store](https://svelte.dev/docs#svelte_store)
that uses ```localStorage.setItem()``` and ```localStorage.getItem()``` behind
the ```$``` accessor. This maintains a consistent interface with existing stores.

### The custom store

A simple custom store for handling localStorage would look like this (say
```localStorage.js```):

```js
import { writable } from 'svelte/store';

const createLocalStorage = (key, init) => {
    let value = localStorage.getItem(key);

    if (!value) {
        localStorage.setItem(key, JSON.stringify(init));
        value = init;
    } else {
        value = JSON.parse(value);
    }

    // Create our store.
    const { subscribe, set } = writable(value);

    // Adhere to the store contract.
    return {
        subscribe,
        set: (v) => {
            localStorage.setItem(key, JSON.stringify(v));
            return set(v);
        },
    };
};
```

## Usage

To setup our stores (say ```store.js```):

```js
import { createLocalStorage } from './localStorage.js';

export const theme = createLocalStorage('theme', 'pink');
export const fontSize = createLocalStorage('fontSize', '10px');
```

To use the localStorage stores in our components:

```js
<script>
    import { theme, fontSize } from './store.js';
</script>

<p style="font-size: {$fontSize};">
    ...
</p>

<select bind:value={$theme}>
    <option value="blue">Blue</option>
    <option value="green">Green</option>
    ...
</select>
```

An implementation can be seen on this website, tracking the current theme using
the selector at the top of the page.

## Summary

We have written a custom store that wraps localStorage, and created a function
to that returns an instance of this custom store. The interface is no different
to a normal Svelte store, creating a consistent experience for the developer.

### Improvements

- The above example only shows basic handling of storing &ldquo;something&rdquo; -
  the developer would still be required to know what type of data is being stored
  and convert it appropriately before use. We expand this example to handle
  covering different types in [part II](/technical/svelte/persist-arbitrary).
- [SvelteKit](https://kit.svelte.dev) performs server-side rendering of the
  application, so ```localStorage``` is not available and the reference to it in
  the above example will fail. This should be guarded by ```browser``` from
  ```$app/env```. More details
  [here](https://kit.svelte.dev/docs#modules-$app-env).

## More information

- [Part II](/technical/svelte/persist-arbitrary)
- [localStorage](https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage)
- [Stores](https://svelte.dev/docs#svelte_store)
- [Store Contract](https://svelte.dev/docs#Store_contract)
