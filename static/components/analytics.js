window.addEventListener('load', () => {
    if (window?.goatcounter?.count) {
        window.goatcounter.count({
            path: location.pathname + location.search + location.hash,
        });
    }
})
