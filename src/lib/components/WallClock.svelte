<script lang="ts">
    /*
     * Clock SVG construction from https://svelte.dev/examples#clock
     */
    export let timezone: string = 'Australia/Brisbane';
    export let now: any;

    let hours: number = 0;
    let minutes: number = 0;
    let seconds: number = 0;
    let amPm: string = '';

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
    <svg viewBox='-50 -50 100 100'>
        <circle class='clock-face {amPm}' r='48' />

        <!-- markers -->
        {#each [0, 5, 10, 15, 20, 25, 30, 35, 40, 45, 50, 55] as minute}
            <line
                class='major {amPm}'
                y1='35'
                y2='45'
                transform='rotate({30 * minute})'
            />

            {#each [1, 2, 3, 4] as offset}
                <line
                    class='minor {amPm}'
                    y1='42'
                    y2='45'
                    transform='rotate({6 * (minute + offset)})'
                />
            {/each}
        {/each}

        <!-- hour hand -->
        <line
            class='hour'
            y1='2'
            y2='-20'
            transform='rotate({30 * hours + minutes / 2})'
        />

        <!-- minute hand -->
        <line
            class='minute'
            y1='4'
            y2='-30'
            transform='rotate({6 * minutes + seconds / 10})'
        />

        <!-- second hand -->
        <g transform='rotate({6 * seconds})'>
            <line class='second' y1='10' y2='-38'/>
            <line class='second-counterweight' y1='10' y2='2'/>
        </g>
    </svg>
    <p style="text-align: center;">
        {hours}:{minutes}:{seconds} {amPm}<br />
        {timezone}
    </p>
</div>

<style>
	svg {
		width: 100%;
		height: 100%;
	}

	.clock-face {
		stroke: #333;
		fill: white;
	}

	.minor {
		stroke: #999;
		stroke-width: 0.5;
	}

	.major {
		stroke: #333;
		stroke-width: 1;
	}

	.hour {
		stroke: #333;
	}

	.minute {
		stroke: #666;
	}

	.second, .second-counterweight {
		stroke: rgb(180,0,0);
	}

	.second-counterweight {
		stroke-width: 3;
	}

    .clock-face.PM {
        fill: black;
    }
    .minor.PM, .major.PM {
        stroke: white;
    }
</style>
