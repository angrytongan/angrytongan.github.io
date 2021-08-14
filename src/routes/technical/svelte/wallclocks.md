<script>
    import WallClocks from '$lib/components/WallClocks.svelte';
</script>

Display the current date and time from multiple timezones as a bunch of wall clocks.

---

## Our goal?

We want to display the current time for a number of locations around the world in
the form of a wall of clocks:

<WallClocks />

## Method

We will need two components: an individual clock component (say
```./WallClock.svelte```) and a container that manages the clocks by feeding
them the current local time and required locale (say
```./WallClocks.svelte```). ```WallClock.svelte``` will calculate the time in
it's locale and draw a clock with this time.

### ```WallClocks.svelte```

Similarly to [our table of locations and times](/technical/svelte/timezones),
we will set an interval that updates a variable, which is used as a prop
to the clock component:

```js
<script>
    import { onMount, onDestroy } from 'svelte';
    import WallClock from './WallClock.svelte';

    export let timezones = [
        'America/New_York',
        'Europe/London',
        'Asia/Tokyo',
        'Australia/Brisbane',
    ];

    let intervalId;
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
```

### ```WallClock.svelte```

The individual clock component uses ```toLocaleString()``` as our [table
version](/technical/svelte/timezones), and parses the output:

```js
<script>
    export let timezone;
    export let now;

    let hours = 0;
    let minutes = 0;
    let seconds = 0;
    let amPm = '';

    $: {
        const d = now.toLocaleString('en-US', {
            timeZone: timezone,
            hour: 'numeric',
            minute: 'numeric',
            second: 'numeric',
        });

        [ hours, minutes, seconds, amPm ] = d.split(/[ :]/);
    }
</script>

<div>
    <svg>
        ...
    </svg>
</div>

```

The clock face itself is built with SVG. Rather than reproduce the
it here, you are encouraged to check the [clock
example](https://svelte.dev/examples#clock) from the [Svelte Example
list](https://svelte.dev/examples); the example at the top of this page uses
this code verbatim.

## Usage

Use the component wherever it's required:

```js
<script>
    import WallClocks from './WallClocks.svelte';
</script>

<WallClocks />
```

## Summary

We have created two components that can be used to display wall clocks based on
timezone.

## More information

- [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)
- [Svelte Examples: clock](https://svelte.dev/examples#clock)
