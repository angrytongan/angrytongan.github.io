import { randomInt } from './math.js';

export const tick = (ctx) => {
    // From bottom up: pull down pixels that are lit. Going this direction
    // means we don't tread on future work.
    for (let y = ctx.rows-2; y >= 0; y--) {
        for (let x = 0; x < ctx.cols; x++) {
            const valid = ctx.grid[y][x][0] > 0 || ctx.grid[y][x][1] > 0  || ctx.grid[y][x][2] > 0;

            // Copy this pixel down.
            if (valid) {
                ctx.grid[y+1][x][0] = ctx.grid[y][x][0];
                ctx.grid[y+1][x][1] = ctx.grid[y][x][1];
                ctx.grid[y+1][x][2] = ctx.grid[y][x][2];
            }
        }
    }

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
    console.log('matrix.init');

    const grid = [ ...Array(rows) ].map(() => [ ...Array(cols) ].map(() => [0, 0, 0]));

    const ctx = {
        rows,
        cols,
        grid,
        fadeStep: opts.matrix.fadeStep,
        newLights: opts.matrix.newLights,
        matrixGreen: opts.matrix.matrixGreen,   // Only use green pixels.
    };

    return ctx;
};

export const MIN_FADESTEP = 5;
export const MAX_FADESTEP = 64;
export const DEFAULT_FADESTEP = 10;

export const MIN_NEWLIGHTS = 5;
export const MAX_NEWLIGHTS = 20;
export const DEFAULT_NEWLIGHTS = 15;

export const DEFAULT_MATRIX_GREEN = true;
