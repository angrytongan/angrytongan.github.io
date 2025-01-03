import { randomInt } from './math.js';

export const tick = (ctx) => {
    // Fade out existing lights.
    for (let y = 0; y < ctx.rows; y++) {
        for (let x = 0; x < ctx.cols; x++) {
            for (let i = 0; i < 3; i++) { // iterate red, green, blue
                if (ctx.grid[y][x][i] > 0) {
                    ctx.grid[y][x][i] -= ctx.fadeStep;
                    if (ctx.grid[y][x][i] < 0) {
                        ctx.grid[y][x][i] = 0;
                    }
                }
            }
        }
    }

    // Add new lights.
    const n = Math.trunc(Math.random() * ctx.newLights);
    for (let i = 0; i < n; i++) {
        const y = randomInt(0, ctx.rows);
        const x = randomInt(0, ctx.cols);
        ctx.grid[y][x] = [
            ctx.matrixGreen ? 0 : randomInt(0, 255), // red
            randomInt(0, 255), // green
            ctx.matrixGreen ? 0 : randomInt(0, 255), // blue
        ];
    }

    return ctx.grid;
};

export const init = (rows, cols, opts) => {
    console.log('blink.init');

    const grid = [ ...Array(rows) ].map(() => [ ...Array(cols) ].map(() => [0, 0, 0]));

    const ctx = {
        rows,
        cols,
        grid,
        fadeStep: opts.blink.fadeStep,
        newLights: opts.blink.newLights,
        matrixGreen: opts.blink.matrixGreen,   // Only use green pixels.
    };

    return ctx;
};

export const MIN_FADESTEP = 5;
export const MAX_FADESTEP = 64;
export const DEFAULT_FADESTEP = 10;

export const MIN_NEWLIGHTS = 5;
export const MAX_NEWLIGHTS = 20;
export const DEFAULT_NEWLIGHTS = 10;

export const DEFAULT_MATRIX_GREEN = false;
