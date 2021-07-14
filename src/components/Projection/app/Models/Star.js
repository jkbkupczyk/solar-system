
/**
 * Represents a Star
 * @extends CelestialObject
 * @constructor
 * @param { Object } data - Physical and orbital data for the planet
 * @param { Object } threeData - Contains number of ThreeJS data (scene, loaders etc.)
 */
class Star extends CelestialObject {
    constructor(data, threeData) {
        super(data.name, data.mass, data.diameter, data.temperature, data.luminosity);

    }
}