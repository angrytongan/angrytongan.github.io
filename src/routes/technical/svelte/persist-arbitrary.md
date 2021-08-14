Storing typed data from [Svelte
stores](https://svelte.dev/docs#4_Prefix_stores_with_$_to_access_their_values)
to browser localStorage.

---

## Previously

In [part I](/technical/svelte/persist-localStorage) we wrapped
```localStorage.setItem()``` and ```localStorage.getItem()``` behind a [Svelte
store](https://svelte.dev/docs#svelte_store), giving the developer a consistent
interface to both normal stores and localStorage.

### Typed data?

Our previous solution allows us to store any type of data (say ```./store.js```):

```js
import { createLocalStorage } from './localStorage.js';

const aString = createLocalStorage('aString', 'hello');
const aStruct = createLocalStorage('aStruct', { hi: 'world' });
const aNumber = createLocalStorage('aNumber', 123);
const aBoolean = createLocalStorage('aBoolean', true);
```

but the developer must manually manage it's type:

```js
<script>
    import { aNumber, aBoolean } from './store.js';

    $aNumber += 123;            // we want 246, but got '123123'

    if ($aBoolean === true) {   // will fail as 'true' !== true
        ...
    }
</script>
```

## Our goal?

We want to provide wrappers around ```createLocalStorage()``` that handle
types. For the developer, we want the wrapper use to be as inconvenient as
possible.

## Method

We need to adjust ```createLocalStorage()``` to accept a &ldquo;pull&rdquo; and a
&ldquo;push&rdquo; functions. These functions will transform the data on the
way back in from  and to localStorage, respectively.

```js
import { writable } from 'svelte/store';

const createLocalStorage = (key, init, pushFn, pullFn) => {
    let value = localStorage.getItem(key);

    // Pull the previously stored value and transform it on
    // the way in. If we don't have a previously stored value,
    // transform the initial value and write to localStorage.
    if (value !== null) {
        value = pullFn(JSON.parse(value));
    } else {
        localStorage.setItem(
            key,
            JSON.stringify(pushFn(init))
        );
        value = init;
    }

    // Create our store.
    const { subscribe, set } = writable(value);

    return {
        subscribe,
        set: (v: any) => {
            // Apply push function on write.
            localStorage.setItem(
                key,
                JSON.stringify(pushFn(v)
            );
            return set(v);
        },
    };
};
```

We will create a number of wrapper functions that provide the developer with
options on the type of storage to create; for example:

```js
export const createBooleanStorage = (key, init) =>
    createLocalStorage(key, init, pushBoolean, pullBoolean);
```

and implement the pull and push functions:

```js
const pushBoolean = (value) => value ? 'true' : 'false';
const pullBoolean = (value) => value == 'true' ? true : false;
```

## Usage

Our store file looks familiar (say, ```./store.js```):

```js
import { createBooleanStorage } from './localStorage.js';

export const darkMode = createBooleanStorage(
    'darkMode',
    false
);
```

as do our components:

```js
<script>
    import { darkMode } from './store.js';
</script>

<select bind:value={darkMode}>
    <option value={true}>Yes</option>
    <option value={false}>No</option>
</selet>
```

but the developer no longer needs to worry about managing types after pulling
or before pushing to the store.

## Summary

We have provided wrappers around ```createLocalStorage()``` that handle types
without any additional burden on the developer.

### Improvements

- The above example only allows a single transform, centred around managing the
  data type. We expand this example to handle doing multiple, arbitrary transforms
  in [part III](/technical/svelte/persist-transforms).
- [SvelteKit](https://kit.svelte.dev) performs server-side rendering of the
  application, so ```localStorage``` is not available and the reference to it in
  the above example will fail. This should be guarded by ```browser``` from
  ```$app/env```. More details
  [here](https://kit.svelte.dev/docs#modules-$app-env).


## More information

- [Part I](/technical/svelte/persist-localStorage)
- [Part III](/technical/svelte/persist-transforms)
