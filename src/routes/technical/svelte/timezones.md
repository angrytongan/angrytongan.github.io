<script>
    import TimeZones from '$lib/components/TimeZones.svelte';
</script>

Display the current date and time from multiple timezones.

---

## Our goal?

We want to display the current time for a number of locations around the world
as a table:

<TimeZones />

## Method

Create a component that periodically uses ```Date().toLocaleString()``` to
format the current local time in arbitrary timezones and display as a table.

### onMount / onDestroy

We can use Svelte's lifecycle functions ```onMount()``` and ```onDestroy()```
to initialise and cleanup a periodic timer. The timer will get the date and
update a reactive varible, which will redraw the table when changed.

### The component

A single component fulfills our requirements (say ```./TimeZoneTable.svelte```):

```js
<script>
    import { onMount, onDestroy } from 'svelte';

    export let timezones = [
        'America/New_York',
        'Europe/London',
        'Asia/Tokyo',
        'Australia/Brisbane',
    ];

    const locale = 'en-US';

    let now = new Date();
    let intervalId;

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
    {#each timezones as z}
        <tr>
            <td>{z}</td>
            <td>{now.toLocaleString(locale, { timeZone: z })</td>
        </tr>
    {/each}
</table>
```

## Usage

Use the component wherever it's required:

```js
<script>
    import TimeZoneTable from './TimeZoneTable.svelte';
</script>

<TimeZoneTable />
```

## Summary

We created a simple method for displaying the time in differen timezones
around the world.

## More information

- [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)
