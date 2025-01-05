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

const MIN_ANIM_TIMEOUT = 50;
const MAX_ANIM_TIMEOUT = 1000;
const DEFAULT_ANIM_TIMEOUT = 100;
const STEP_ANIM_TIMEOUT = 50;

const MIN_LED_DRAW = 0.01;
const MAX_LED_DRAW = 0.05;
const STEP_LED_DRAW = 0.01;
const DEFAULT_LED_DRAW = 0.02;

const MIN_IDLE_DRAW = 0.0;
const MAX_IDLE_DRAW = 0.005;
const STEP_IDLE_DRAW = 0.001;
const DEFAULT_IDLE_DRAW = 0.001;

const MIN_BRIGHTNESS = 0;
const MAX_BRIGHTNESS = 1;
const STEP_BRIGHTNESS = 0.1;
const DEFAULT_BRIGHTNESS = 0.5;

const STATS_MAX_SAMPLES = 100;

const DEFAULT_EFFECT = "blink";
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
        margin: 0,
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
    const sampleMinAmperage = d3.minIndex(data);
    const sampleMaxAmperage = d3.maxIndex(data);
    const maxAmperage = data[sampleMaxAmperage];
    const minAmperage = data[sampleMinAmperage];

    const p = Plot.plot({
        width,
        height: 100,
        title: "Amperage draw",
        x: {
            domain: d3.range(0, STATS_MAX_SAMPLES),
            axis: null,
        },
        marks: [
            Plot.barY(data),
            Plot.line(
                data,
                Plot.windowY(7, {
                    x: (d, i) => i,
                    y: (d) => d,
                    stroke: "red",
                    strokeWidth: 1,
                    strokeOpacity: 0.8,
                })
            ),
            Plot.tip([`Min ${minAmperage.toFixed(1)}A`], {
                x: sampleMinAmperage,
                y: data[sampleMinAmperage],
            }),
            Plot.tip([`Max ${maxAmperage.toFixed(1)}A`], {
                x: sampleMaxAmperage,
                y: data[sampleMaxAmperage],
            }),
        ],
    });

    return p;
};

const litPixelPlot = (width, rows, cols, numPixelsLit) => {
    const totalPixels = rows * cols;
    const percentageLit = numPixelsLit / totalPixels;

    return Plot.plot({
        width,
        height: 100,
        title: `Lit pixels (${numPixelsLit} of ${totalPixels})`,
        x: {
            percent: true,
            domain: [0, 100],
        },
        marks: [
            Plot.barX([percentageLit]),
            Plot.tip([`${(percentageLit * 100).toFixed(0)}%`], {
                x: percentageLit,
                y: 0,
                anchor: "right",
            }),
        ],
    });
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
const litPixels = Mutable(0);
const updateStats = (grid) => {
    if (amperage.value.length === STATS_MAX_SAMPLES - 1) {
        amperage.value.shift();
    }

    let amps = 0;
    let numLit = 0;
    for (let y = 0; y < grid.length; y++) {
        for (let x = 0; x < grid[y].length; x++) {
            let pixelAmperage = 0;
            for (let i = 0; i < 3; i++) {
                pixelAmperage += grid[y][x][i] > 0 ? ledDraw : 0;
            }

            amps += pixelAmperage > 0 ? pixelAmperage : idleLEDDraw;
            numLit += pixelAmperage > 0 ? 1 : 0;
        }
    }

    amperage.value.push(amps * brightness); // assuming linear adjustment for brightness :shrug:
    litPixels.value = numLit;

    amperage.value = amperage.value;
};
```

```js
const tick = () => {
    if (context.effect) {
        // Run effect.
        const grid = context.effect.tick(context.ctx);

        // push stats
        updateStats(grid);

        // send to proxy

        // convert grid to observable format
        setObservablePlotData(grid);
    }
};
```

```js
initContext(effect, rows, cols, {
    blink: {
        fadeStep: blinkFadeStep,
        newLights: blinkNewLights,
        matrixGreen: blinkMatrixGreen,
    },
    equalizer: {
        newLights: equalizerNewLights,
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
} else {
    console.log("clearing animate");
    clearTickInterval();
}
tick();
```

<div class="grid grid-cols-4">
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
            value: DEFAULT_EFFECT,
        }
    )
);
```

</div>
    <div class="card">

```js
const ledDraw = view(
    Inputs.range([MIN_LED_DRAW, MAX_LED_DRAW], {
        label: "LED colour draw (A)",
        value: DEFAULT_LED_DRAW,
        step: STEP_LED_DRAW,
    })
);
const idleLEDDraw = view(
    Inputs.range([MIN_IDLE_DRAW, MAX_IDLE_DRAW], {
        label: "Idle draw (A)",
        value: DEFAULT_IDLE_DRAW,
        step: STEP_IDLE_DRAW,
    })
);
const brightness = view(
    Inputs.range([MIN_BRIGHTNESS, MAX_BRIGHTNESS], {
        label: "Brightness",
        value: DEFAULT_BRIGHTNESS,
        step: STEP_BRIGHTNESS,
    })
);
```

</div>
    <div class="card grid-colspan-2">
        ${resize((width) => LEDMatrix(width, context.ctx, data))}
    </div>
</div>

<!-- stats -->
<div class="grid grid-cols-4">
    <div class="card">
        ${resize((width) => amperagePlot(width, amperage))}
    </div>
    <div class="card">
        ${resize((width) => litPixelPlot(width, context.ctx.rows, context.ctx.cols, litPixels))}
    </div>
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

```js
const equalizerNewLights = view(
    Inputs.range([equalizer.MIN_NEWLIGHTS, equalizer.MAX_NEWLIGHTS], {
        value: equalizer.DEFAULT_NEWLIGHTS,
        label: "New lights",
        step: 1,
    })
);
```

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
