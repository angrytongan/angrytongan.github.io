---
toc: false
---

# LED matrix simulator

```js
import { matrix, blink, equalizer, rgb2hex } from "./effects/index.js";

const MIN_ROWS = 1;
const MAX_ROWS = 256;
const DEFAULT_ROWS = 5;

const MIN_COLS = 1;
const MAX_COLS = 256;
const DEFAULT_COLS = 28;

const MIN_BRIGHTNESS = 1;
const MAX_BRIGHTNESS = 256;
const DEFAULT_BRIGHTNESS = 128;

const MIN_ANIM_TIMEOUT = 50;
const MAX_ANIM_TIMEOUT = 1000;
const DEFAULT_ANIM_TIMEOUT = 100;
const STEP_ANIM_TIMEOUT = 50;

const STATS_MAX_SAMPLES = 100;

const effects = new Map([
    ["blink", { init: blink.init, tick: blink.tick }],
    ["equalizer", { init: equalizer.init, tick: equalizer.tick }],
    ["matrix", { init: matrix.init, tick: matrix.tick }],
]);
```

```js
const LEDMatrix = (width, ctx, data) =>
    Plot.plot({
        width,
        aspectRatio: true,
        x: {
            domain: d3.range(0, ctx.cols),
            axis: null,
        },
        y: {
            domain: d3.range(0, ctx.rows),
            axis: null,
        },
        marks: [
            Plot.cell(data, {
                x: "x",
                y: "y",
                fill: "value",
            }),
        ],
    });

const amperagePlot = (width, data) => {
    const p = Plot.plot({
        width,
        height: 100,
        title: "Amperage draw",
        x: {
            domain: d3.range(0, STATS_MAX_SAMPLES),
            axis: null,
        },
        marks: [Plot.barY(data)],
    });

    return p;
};
```

```js
const tickInterval = Mutable(0);
const setTickInterval = (fn, tm) => {
    if (tickInterval.value) {
        clearInterval(tickInterval.value);
    }
    tickInterval.value = setInterval(fn, tm);
};
const clearTickInterval = () => {
    if (tickInterval.value) {
        clearInterval(tickInterval.value);
    }
};
invalidation.then(() => {
    if (tickInterval.value) {
        clearInterval(tickInterval.value);
    }
});
```

```js
const context = Mutable({});
const initContext = (effect, rows, cols, opts) => {
    const e = effects.get(effect);
    context.value = { effect: e, ctx: e.init(rows, cols, opts) };
};
```

```js
const data = Mutable([]);
const setObservablePlotData = (grid) => {
    data.value = [];
    for (let y = 0; y < context.ctx.rows; y++) {
        for (let x = 0; x < context.ctx.cols; x++) {
            data.value.push({
                x,
                y,
                value: rgb2hex(grid[y][x]),
            });
        }
    }
};
```

```js
const amperage = Mutable([]);
const updateStats = (grid) => {
    if (amperage.value.length === STATS_MAX_SAMPLES - 1) {
        amperage.value.shift();
    }

    let amps = 0;
    for (let y = 0; y < grid.length; y++) {
        for (let x = 0; x < grid[y].length; x++) {
            for (let i = 0; i < 3; i++) {
                // rgb
                amps += grid[y][x][i] > 0 ? 0.02 : 0.001; // TODO tie these back to controls
            }
        }
    }

    amperage.value.push(amps);

    amperage.value = amperage.value;
};
```

```js
const tick = () => {
    // Run effect.
    const grid = context.effect.tick(context.ctx);

    // push stats
    updateStats(grid);

    // send to proxy

    // convert grid to observable format
    setObservablePlotData(grid);
};
```

```js
initContext(effect, rows, cols, {
    blink: {
        fadeStep: blinkFadeStep,
        newLights: blinkNewLights,
        matrixGreen: blinkMatrixGreen,
    },
    matrix: {
        fadeStep: matrixFadeStep,
        newLights: matrixNewLights,
        matrixGreen: matrixMatrixGreen,
    },
});
```

```js
if (animate) {
    console.log("setting animate");
    clearTickInterval();
    setTickInterval(tick, animInterval);
    tick();
} else {
    console.log("clearing animate");
    clearTickInterval();
}
```

<div class="grid grid-cols-2">
    <div class="card">

```js
const animate = view(Inputs.toggle({ label: "Animate", value: false }));
const animInterval = view(
    Inputs.range([MIN_ANIM_TIMEOUT, MAX_ANIM_TIMEOUT], {
        step: STEP_ANIM_TIMEOUT,
        label: "Animation timeout",
        value: DEFAULT_ANIM_TIMEOUT,
    })
);
const rows = view(
    Inputs.range([MIN_ROWS, MAX_ROWS], {
        step: 1,
        label: "Rows",
        value: DEFAULT_ROWS,
    })
);
const cols = view(
    Inputs.range([MIN_COLS, MAX_COLS], {
        step: 1,
        label: "Columns",
        value: DEFAULT_COLS,
    })
);
const effect = view(
    Inputs.select(
        [...effects].map((k) => k[0]),
        {
            label: "Effect",
            value: "matrix",
        }
    )
);
```

</div>
    <div class="card">
        ${resize((width) => LEDMatrix(width, context.ctx, data))}
    </div>
</div>

<!-- stats -->
<div class="card">
    ${resize((width) => amperagePlot(width, amperage))}
</div>

<div class="grid grid-cols-4">
    <div class="card">
        <h2>Blink</h2>

```js
const blinkFadeStep = view(
    Inputs.range([blink.MIN_FADESTEP, blink.MAX_FADESTEP], {
        value: blink.DEFAULT_FADESTEP,
        label: "Fade step",
        step: 1,
    })
);
const blinkNewLights = view(
    Inputs.range([blink.MIN_NEWLIGHTS, blink.MAX_NEWLIGHTS], {
        value: blink.DEFAULT_NEWLIGHTS,
        label: "New lights",
        step: 1,
    })
);
const blinkMatrixGreen = view(
    Inputs.toggle({ label: "Matrix green", value: blink.DEFAULT_MATRIX_GREEN })
);
```

</div>
    <div class="card">
        <h2>Equalizer</h2>
    </div>
    <div class="card">
        <h2>Matrix</h2>

```js
const matrixFadeStep = view(
    Inputs.range([matrix.MIN_FADESTEP, matrix.MAX_FADESTEP], {
        value: matrix.DEFAULT_FADESTEP,
        label: "Fade step",
        step: 1,
    })
);
const matrixNewLights = view(
    Inputs.range([matrix.MIN_NEWLIGHTS, matrix.MAX_NEWLIGHTS], {
        value: matrix.DEFAULT_NEWLIGHTS,
        label: "New lights",
        step: 1,
    })
);
const matrixMatrixGreen = view(
    Inputs.toggle({ label: "Matrix green", value: matrix.DEFAULT_MATRIX_GREEN })
);
```

</div>

</div>
