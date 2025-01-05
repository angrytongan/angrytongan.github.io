import { randomInt } from "./math.54451539.js";

export const tick = (ctx) => {
    // Increase or decrease column.
    for (let x = 0; x < ctx.cols; x++) {
        let top = 0;

        for (let y = 0; y < ctx.rows; y++) {
            const lit = ctx.grid[y][x][0] > 0 || ctx.grid[y][x][1] > 0 || ctx.grid[y][x][2] > 0;
            if (lit) {
                top = y;
                break;
            }
        }

        const up = randomInt(0, 10) > 5;
        if (up && top > 0) {
            ctx.grid[top-1][x][0] = 0;
            ctx.grid[top-1][x][1] = 255;
            ctx.grid[top-1][x][2] = 0;
        } else {
            ctx.grid[top][x][0] = 0;
            ctx.grid[top][x][1] = 0;
            ctx.grid[top][x][2] = 0;
        }
    }

    // Set new lights on bottom row.
    const n = Math.trunc(Math.random() * ctx.newLights);
    for (let i = 0; i < n; i++) {
        const y = ctx.rows-1;
        const x = randomInt(0, ctx.cols);

        // Only if we don't have an active column yet.
        if (ctx.grid[y][x][0] === 0 && ctx.grid[y][x][1] === 0 && ctx.grid[y][x][2] === 0) {
            ctx.grid[y][x] = [ 0, 255, 0 ];
        }
    }

    return ctx.grid;
};

export const init = (rows, cols, opts) => {
    console.log('equalizer.init');

    const grid = [ ...Array(rows) ].map(() => [ ...Array(cols) ].map(() => [0, 0, 0]));

    const ctx = {
        rows,
        cols,
        grid,
        newLights: opts.equalizer.newLights,
    };

    return ctx;
};

export const MIN_NEWLIGHTS = 5;
export const MAX_NEWLIGHTS = 30;
export const DEFAULT_NEWLIGHTS = 15;
