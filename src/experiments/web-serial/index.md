# Web Serial

-   <https://developer.mozilla.org/en-US/docs/Web/API/Web_Serial_API>
-   <https://developer.mozilla.org/en-US/docs/Web/API/Web_Serial_API#browser_compatibility>
-   <https://github.com/funnierinspanish/web-serial-example/blob/master/src/serial-handler.ts>

```js
const makeSerialHandler = () => {
    let reader; // ReadableStreamDefaultReader
    let writer; // WriteableStreamDefaultWriter

    let encoder = new TextEncoder();
    let decoder = new TextDecoder();

    let port = null;

    return {
        init: async () => {
            if ("serial" in navigator) {
                port = await navigator.serial.requestPort();
                await port.open({ baudRate: 115200 });

                writer = port.writable.getWriter();
                reader = port.readable.getReader();
            } else {
                console.log("web serial not available");
            }
        },

        write: async (data) => {
            if (port) {
                const dataArrayBuffer = encoder.encode(data);
                return await writer?.write(dataArrayBuffer);
            }

            return null;
        },

        read: async () => {
            try {
                const readerData = await reader?.read();
                return readerData ? decoder.decode(readerData.value) : "";
            } catch (err) {
                const errorMessage = `error reading data: ${err}`;
                console.error(errorMessage);
                return "";
            }
        },

        signals: async () => {
            return port ? port.getSignals() : {};
        },
    };
};
const serialHandler = makeSerialHandler();
```

```js
const doRead = async (sh) => {
    const message = await serialHandler.read();
    if (message.length > 0) {
        console.log(message);
    }
};
```

```js
let readTimer = Mutable(0);
const startListening = () => {
    readTimer.value = setInterval(async () => {
        doRead(serialHandler);
    }, 1000);
};
const stopListening = () => {
    if (readTimer.value) {
        clearInterval(readTimer);
    }
};

invalidation.then(() => {
    stopListening();
});
```

```js
navigator.serial.addEventListener("connect", (e) => {
    console.log("connect", e);
});

navigator.serial.addEventListener("disconnect", (e) => {
    console.log("disconnect", e);
});

navigator.serial.getPorts().then((ports) => {
    console.log("getPorts", ports);
});
```

```js
const requestPort = () => {
    serialHandler.init();
    startListening();
};
const sendMessage = () => {
    serialHandler.write(new Date());
};
```

${Inputs.button('Request port', { reduce: requestPort, })}
${Inputs.button('Send', { reduce: sendMessage })}
