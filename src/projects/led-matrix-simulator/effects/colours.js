export const rgb2hex = (rgb) => {
    let out = '#';

    for (let i = 0; i < 3; i++) {
        const hex = rgb[i].toString(16);
        out += hex.length === 1 ? '0' + hex : hex;
    }

    return out;
};
