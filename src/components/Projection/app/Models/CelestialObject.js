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
    constructor(name, mass, diameter, temperature, luminosity) {
        this.name = name;
        this.mass = mass;
        this.diameter = diameter;
        this.temperature = temperature;
        this.luminosity = luminosity;
    }

    /**
     * Getters
     */
    get name() { return this.name; }
    get mass() { return this.mass; }
    get diameter() { return this.diameter; }
    get temperature() { return this.temperature; }
    get luminosity() { return this.luminosity; }

    /**
     * Setters
     */
    set name(name) { this.name = name; }
    set mass(mass) { this.mass = mass; }
    set diameter(diameter) { this.diameter = diameter; }
    set temperature(temperature) { this.temperature = temperature; }
    set luminosity(luminosity) { this.luminosity = luminosity; }
}