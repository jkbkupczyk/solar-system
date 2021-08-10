import Planet from "./Planet";
import Star from "./Star";
/**
 * Represents stellar system with its stars, planets etc.
 * @constructor
 * @param { Object } data - Stellar system data
 * @param { Object } threeData - Contains number of ThreeJS data (scene, loaders etc.)
 */
class StellarSystem {
    constructor(data, threeData) {
        this.id = data.id;
        this.name = data.name;
        this.threeData = threeData;
        this.stars = this.createStars(data.stars);
        this.planets = this.createPlanets(data.planets);
    }

    /**
     * Creates stars
     * @param { Object } dataStars - Object containing star data
     * @returns { Array<Star> } - Array of stars
     */
    createStars(dataStars) {
        const stars = [];

        dataStars.forEach(s => stars.push(new Star(s, this.threeData)));

        return stars;
    }

    /**
     * Creates planets
     * @param { Object } dataPlanets - Object containing planetary data
     * @returns { Array<Planet> } - Array of planets
     */
    createPlanets(dataPlanets) {
        const planets = [];

        dataPlanets.forEach(p => planets.push(new Planet(p, this.threeData)));

        return planets;
    }

    /**
     * Builds stellar system
     */
    buildStellarSystem() {
    }

    /**
     * Removes orbit highlighting
     * @method
     * @returns { undefined | void }
     */
    removeOrbitHighlight() {
        this.planets.forEach(planet => planet.threeOrbitObject.orbit.setColor(0x000000));
    }

    /**
     * Adds orbit highlighting
     * @method
     * @returns { undefined | void }
     */
    addOrbitHighlight() {
        this.planets.forEach(planet => planet.threeOrbitObject.orbit.setColor(0x505050));
    }
}

export default StellarSystem;