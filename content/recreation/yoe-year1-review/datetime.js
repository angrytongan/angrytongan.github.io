'use strict';

const pad = (n) => String(n).padStart(2, '0');

export const dateTime = {
    thisYear: () => new Date().getFullYear(),

    // secs (seconds, may have a fractional tenths part) -> "m:ss", "h:mm:ss" or "d days, h:mm:ss"
    secs2mmss: (secs, add_ms = false) => {
        const whole = Math.floor(secs);
        const tenth = Math.floor((secs - whole) * 10 + 1e-9);
        const s = whole % 60;
        const totalMins = Math.floor(whole / 60);
        const m = totalMins % 60;
        const totalHours = Math.floor(totalMins / 60);
        const h = totalHours % 24;
        const d = Math.floor(totalHours / 24);

        let out;
        if (secs >= 86400) {
            out = `${d} days, ${h}:${pad(m)}:${pad(s)}`;
        } else if (secs >= 3600) {
            out = `${h}:${pad(m)}:${pad(s)}`;
        } else {
            out = `${m}:${pad(s)}`;
        }
        if (add_ms) {
            out += `.${tenth}`;
        }
        return out;
    },

    mmss2secs: (mmss) => {
        const [ m, s ] = mmss.split(':');
        return +m * 60 + +s;
    },

    // ds (deciseconds, i.e. tenths of a second) -> "m:ss.d" or "h:mm:ss.d"
    ds2time: (ds, add_ms = true) => {
        const wholeSecs = Math.floor(ds / 10);
        const tenth = ds % 10;
        const s = wholeSecs % 60;
        const totalMins = Math.floor(wholeSecs / 60);
        const m = totalMins % 60;
        const h = Math.floor(totalMins / 60);

        let out = ds > 36000 ? `${h}:${pad(m)}:${pad(s)}` : `${m}:${pad(s)}`;
        if (add_ms) {
            out += `.${tenth}`;
        }
        return out;
    },
};
