import { browser } from '$app/env';
import { writable } from 'svelte/store';

const createLocalStorage = (name: string, init: any) => {
    let value: string | null;

    if (browser) {
        value = localStorage.getItem(name);
        if (!value) {
            localStorage.setItem(name, JSON.stringify(init));
            value = init;
        } else {
            value = JSON.parse(value);
        }
    } else {
        value = init;
    }

    const { subscribe, set } = writable(value);

    return {
        subscribe,

        set: (v: any) => {
            if (browser) {
                localStorage.setItem(name, JSON.stringify(v));
            }
            return set(v);
        },
    };
};

export const createStringStorage = (name: string, init: string) =>
    createLocalStorage(name, init);
