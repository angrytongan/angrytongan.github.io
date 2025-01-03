export const tick = (ctx) => {
    console.log('matrix.tick');

    return ctx.grid;
};

export const init = (rows, cols) => {
    console.log('matrix.init');

    const grid = [ ...Array(rows) ].map(() => [ ...Array(cols) ].map(() => [0, 0, 0]));

    const ctx = {
        rows,
        cols,
        grid,
    };

    return ctx;
};
