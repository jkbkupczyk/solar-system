import Planet from "./Models/Planet";

/**
 * Represents stellar system projection
 * @constructor
 * @param { Object } canvas - Canvas used for projection
 * @param { Object } data - Data used to generate stellar system
 */
class Projection {
    constructor(canvas, data) {
        this.canvas = canvas;
        this.data = data;
        this.threeData = "xd";
    }

    /**
     * Builds stellar projection
     */
    buildStellarProjection() {
        this.data.stars.forEach(s => new ());
        this.data.planets.forEach(p => new Planet(p, this.threeData));
    }
}

export default Projection;