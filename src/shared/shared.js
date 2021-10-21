export const rand = (min, max) => Math.floor(Math.random() * (max - min + 1) + min);
export const capitalize = (str) => str && str[0].toUpperCase() + str.slice(1);