'use strict';

export const dateTime = {
    thisYear: () => luxon.DateTime.local().year,

    secs2mmss: (secs, add_ms = false) => {
        let format = 'm:ss';

        if (secs >= 86400) {
            format = 'd \'days,\' h:mm:ss';
        } else if (secs >= 3600) {
            format = 'h:mm:ss';
        }
        if (add_ms) {
            format += '.S';
        }
        return luxon.Duration.fromObject({ seconds: secs }).toFormat(format).replace(/\.([0-9]).*$/, '.$1');
    },
};
