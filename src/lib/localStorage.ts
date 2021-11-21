import { browser } from '$app/env';
import { writable } from 'svelte/store';

type pushFn = (a: any) => any;
type pullFn = (a: any) => any;

const createLocalStorage = (name: string, init: any,
       toStorage: Array<pushFn> = [], fromStorage: Array<pullFn> = []) => {
    if (browser) {
        const storedValue: string = localStorage.getItem(name);

        if (storedValue) {
            init = fromStorage.reduce((acc, fn) => fn(acc), storedValue);
        }
    }

    const { subscribe, set } = writable(init);

    return {
        subscribe,

        set: (v: any) => {
            if (browser) {
                localStorage.setItem(name, toStorage.reduce((acc, fn) => fn(acc), v));
            }
            return set(v);
        },
    };
};

export const createStringStorage = (name: string, init: string) =>
    createLocalStorage(name, init);
