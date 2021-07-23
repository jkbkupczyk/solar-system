export const solarData = {
    stars: [
        {
            id: 1,
            name: "Sol",
            mass: 100,
            diameter: 109,
            temperature: 5555,
            textures: {
                baseMap: "/assets/textures/sun.jpg"
            }
        }
    ],
    planets: [
        {
            id: 1,
            name: "Mercury",
            mass: 0.0553,
            diameter: 0.383,
            temperature: 200,
            rotationPeriod: 58.8,
            // orbitalLength: 4544.75,
            orbitalLength: 600,
            orbitalPeriod: 0.241,
            orbitalInclination: 7.005,
            axialTilt: 0.1,
            moons: [],
            textures: {
                baseMap: "/assets/textures/mercury.jpg",
                bumpMap: null,
                specularMap: null,
                cloudMap: null,
            }
        },
        {
            id: 2,
            name: "Venus",
            mass: 0.815,
            diameter: 0.949,
            temperature: 700,
            rotationPeriod: -244,
            // orbitalLength: 8492.34,
            orbitalLength: 650,
            orbitalPeriod: 0.615,
            orbitalInclination: 3.39,
            axialTilt: 177.30,
            moons: [],
            textures: {
                baseMap: "/assets/textures/venus.jpg",
                bumpMap: null,
                specularMap: null,
                cloudMap: "/assets/textures/venus_atmosphere.jpg",
            }
        },
        {
            id: 3,
            name: "Earth",
            mass: 1,
            diameter: 1,
            temperature: 20,
            rotationPeriod: 1,
            // orbitalLength: 11740.56,
            orbitalLength: 700,
            orbitalPeriod: 1,
            orbitalInclination: 0,
            axialTilt: 23.4393,
            moons: [
                {
                    id: 1,
                    name: "Moon",
                    mass: 0.0123,
                    diameter: 0.2724,
                    temperature: 20,
                    rotationPeriod: 27.4,
                    // orbitalLength: 30.16,
                    orbitalLength: 15,
                    orbitalPeriod: 1,
                    orbitalInclination: 90,
                    axialTilt: 1.50,
                    textures: {
                        baseMap: "/assets/textures/moon.jpg",
                        cloudMap: null,
                    }
                },
            ],
            textures: {
                baseMap: "/assets/textures/earth.jpg",
                bumpMap: null,
                specularMap: "/assets/textures/earth_specular.tif",
                cloudMap: "/assets/textures/earth_clouds.jpg",
            }
        },
        {
            id: 4,
            name: "Mars",
            mass: 0.107,
            diameter: 0.532,
            temperature: -40,
            rotationPeriod: 1,
            // orbitalLength: 17889.17,
            orbitalLength: 750,
            orbitalPeriod: 1,
            orbitalInclination: 1.85,
            axialTilt: 25.2,
            moons: [],
            textures: {
                baseMap: "/assets/textures/mars.jpg",
                bumpMap: null,
                specularMap: null,
                cloudMap: null
            }
        },
        {
            id: 5,
            name: "Jupiter",
            mass: 0.107,
            diameter: 11.21,
            temperature: -40,
            rotationPeriod: 1,
            // orbitalLength: 61084.66,
            orbitalLength: 800,
            orbitalPeriod: 1,
            orbitalInclination: 1.31,
            axialTilt: 3.13,
            moons: [],
            textures: {
                baseMap: "/assets/textures/jupiter.jpg",
                bumpMap: null,
                specularMap: null,
                cloudMap: null
            }
        },
        {
            id: 6,
            name: "Saturn",
            mass: 0.107,
            diameter: 9.45,
            temperature: -40,
            rotationPeriod: 1,
            // orbitalLength: 111965.65,
            orbitalLength: 850,
            orbitalPeriod: 1,
            orbitalInclination: 2.48,
            axialTilt: 26.73,
            moons: [],
            textures: {
                baseMap: "/assets/textures/saturn.jpg",
                bumpMap: null,
                specularMap: null,
                cloudMap: null
            }
        },
        {
            id: 7,
            name: "Uranus",
            mass: 0.107,
            diameter: 4.01,
            temperature: -40,
            rotationPeriod: 1,
            // orbitalLength: 225291.02,
            orbitalLength: 900,
            orbitalPeriod: 1,
            orbitalInclination: 0.772,
            axialTilt: 97.77,
            moons: [],
            textures: {
                baseMap: "/assets/textures/uranus.jpg",
                bumpMap: null,
                specularMap: null,
                cloudMap: null
            }
        },
        {
            id: 8,
            name: "Neptune",
            mass: 0.107,
            diameter: 3.88,
            temperature: -40,
            rotationPeriod: 1,
            // orbitalLength: 353036.92,
            orbitalLength: 950,
            orbitalPeriod: 1,
            orbitalInclination: 1.77,
            axialTilt: 28.32,
            moons: [],
            textures: {
                baseMap: "/assets/textures/neptune.jpg",
                bumpMap: null,
                specularMap: null,
                cloudMap: null
            }
        },
        {
            id: 9,
            name: "Pluto",
            mass: 0.107,
            diameter: 0.186,
            temperature: -40,
            rotationPeriod: 1,
            // orbitalLength: 463751.05,
            orbitalLength: 1000,
            orbitalPeriod: 1,
            orbitalInclination: 17.2,
            axialTilt: 120,
            moons: [],
            textures: {
                baseMap: "/assets/textures/pluto.jpg",
                bumpMap: null,
                specularMap: null,
                cloudMap: null
            }
        }
    ]
}