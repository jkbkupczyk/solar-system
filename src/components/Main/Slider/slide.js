import { sineInOut } from 'svelte/easing';

export const slideTransition = (node, { delay = 0, duration = 500, easing = sineInOut }) => {
    const style = getComputedStyle(node);

    return {
        delay,
        duration,
        easing,
        css: curr =>
            `width: ${curr * parseFloat(style.width)}px;` +
            `margin-left: ${curr * parseFloat(style.marginLeft)}px;` +
            `margin-right: ${curr * parseFloat(style.marginRight)}px;` +
            `padding-left: ${curr * parseFloat(style.paddingLeft)}px;` +
            `padding-right: ${curr * parseFloat(style.paddingRight)}px;` +
            `border-left-width: ${curr * parseFloat(style.borderLeftWidth)}px;` +
            `border-right-width: ${curr * parseFloat(style.borderRightWidth)}px;` +
            `opacity: ${Math.min(curr * 20, 1) * (+style.opacity)};` +
            `overflow: hidden;`
    };
}