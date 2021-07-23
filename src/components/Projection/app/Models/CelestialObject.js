/**
 * Represents a Celestial object (Astronomical object)
 * @constructor
 * @param { Number } mass - Celestial object mass
 * @param { Number } mass - Celestial object diameter
 * @param { Number } mass - Celestial object temperature
 * @param { Number } mass - Celestial object luminosity
 * @param { Number } mass - Celestial object period (in seconds)
 */
class CelestialObject {
    constructor(name, mass, diameter, temperature) {
        this.name = name;
        this.mass = mass;
        this.diameter = diameter;
        this.temperature = temperature;
    }
}

export default CelestialObject;