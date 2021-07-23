import { solarData } from "./solar";

// import { proximaData } from "./proxima.json";
// import { trappistData } from "./trappist.json";

export const planetarySystems = [
    {
        id: 1,
        tagged: true,
        name: "Solar System",
        desc: "Lorem dolor sit",
        data: solarData,
        link: "/scene/solar",
        cardImg: "/assets/sun.webp"
    },
    {
        id: 2,
        tagged: false,
        name: "Proxima System",
        desc: "Lorem dolor sit",
        // data: proximaData,
        link: "/scene/proxima",
        cardImg: "/assets/proxima.webp",
    },
    {
        id: 3,
        tagged: false,
        name: "Trappist System",
        desc: "Lorem dolor sit",
        // data: trappistData,
        link: "/scene/trappist",
        cardImg: "/assets/trappist.webp",
    },
];