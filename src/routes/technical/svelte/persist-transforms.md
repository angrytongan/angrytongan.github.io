Transforming data between [Svelte
stores](https://svelte.dev/docs#4_Prefix_stores_with_$_to_access_their_values)
and browser localStorage.

---

## Previously

In [part I](/technical/svelte/persist-localStorage) we wrapped
```localStorage.setItem()``` and ```localStorage.getItem()``` behind a [Svelte
store](https://svelte.dev/docs#svelte_store). In [part
II](/technical/svelte/persist-arbitrary) we wrapped our store creator behind
functions that handled different types.

## Arbitrary functions?

We can add functions that transform data to and from localStorage, similar to
the ```reviver``` parameter of
[```JSON.parse```](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON/parse#syntax).

### Why?

Arbitrary functions on data may be useful, such as compressing large structures
when they are written to localStorage in order to save space.

## Our goal?

Provide a way to supply user-defined functions to our custom store that will
transform data to and from localStorage.

## Method

We modify ```createLocalStorage``` to accept an arbitrary number of push and
pull functions, which will be applied in order:

```js
import { writable } from 'svelte/store';

const transform = (fncs, init) =>
    pullFn.reduce((acc, fn) => fn(acc), JSON.parse(init));

const createLocalStorage = (
    key,
    init,
    pushFn = [],
    pullFn = []
) => {
    let value = localStorage.getItem(key);

    // Pull from storage.
    if (value !== null) {
        value = transform(pullFn, value);
    } else {
        // Push to storage.
        localStorage.setItem(key, transform(pushFn, init));
        value = init;
    }

    // Create our store.
    const { subscribe, set } = writable(value);

    return {
        subscribe,
        set: (v) => {
            // Push to storage.
            localStorage.setItem(key, transform(pushFn, v));
            return set(v);
        },
    };
};
```

Existing wrapper functions are adjusted a little:

```js
export const createBooleanStorage = (key, init) =>
    createLocalStorage(key,
        init,
        [ pushBoolean ],
        [ pullBoolean ]
    );
```

and new wrapper functions that do multiple transforms must apply them in the right
order:

```js
import LZString from 'lz-string';
export const createCompressedStructureStorage = (key, init) =>
    createLocalStorage(
        name,
        init,
        [ JSON.stringify, LZString.compress ],
        [ LZString.decompress, JSON.parse ],
    );
```

## Usage

Little change to our store (say, ```./store.js```):

```js
import {
    createCompressedStructureStorage
} from './localStorage.js';

export const smallStruct = createCompressedStructureStorage(
    'smallStruct',
    {}
);
```

and our components don't know the difference:

```js
<script>
    import { smallStruct } from './store.js';

    // Assigned to application store _and_ written to
    // localStorage as an LZ compressed string in one go!
    $smallStruct = {
        hello: 'world',
    };
</script>
```

## Summary

We have created a way to supply user-defined data transform functions to our
custom store backed by localStorage. There is no change to our developers -
they use these custom stores exactly how they use regular stores.

## More information

- [Part I](/technical/svelte/persist-localStorage)
- [Part II](/technical/svelte/persist-arbitrary)
