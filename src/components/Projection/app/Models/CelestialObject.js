/**
 * Represents a Celestial object (Astronomical object)
 * @constructor
 * @param { Number } name - Celestial object name
 * @param { Number } mass - Celestial object mass
 * @param { Number } diameter - Celestial object diameter
 * @param { Number } temperature - Celestial object temperature
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