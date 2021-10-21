import { writable } from 'svelte/store';

/**
 * Settings for stats (fps, latency, memory)
 * @param selectedStyle - indicator position (default is bottom left)
 * @param indicators - indicators
 */
export const settings = writable({
    selectedStyle: "bottom: 0px; left: calc(0px + ",
    indicators: [
        { desc: "fps", visible: true },
        { desc: "latency", visible: true },
        { desc: "memory", visible: true },
    ]
});