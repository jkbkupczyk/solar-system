import ThreeData from "./Three/ThreeData";
import StatsManager from "./Three/StatsManager";
import StellarSystem from "./Models/StellarSystem";
/**
 * Represents stellar system projection
 * @constructor
 * @param { Object } data - Data used to generate stellar system
 * @param { HTMLCanvasElement | OffscreenCanvas } canvas - Canvas used by renderer to output data
 */
class Projection {
    constructor(data, canvas) {
        this.data = data;
        this.threeData = new ThreeData(canvas);
        this.statsManager = new StatsManager();
        this.stellarSystem = null;
    }

    /**
     * Builds stellar projection
     * @method
     * @returns { undefined | void }
     */
    project() {
        console.log(this.threeData.scene);
        this.statsManager.buildStats();
        this.stellarSystem = new StellarSystem(this.data, this.threeData);

        this.animate();
    }

    /**
     * Animation loop
     */
    animate() {
        this.statsManager.begin();

        this.stellarSystem.planets.forEach(p => {
            p.threeStarPlanetGroup.rotation.y += 0.0005;
            p.threePlanetObject.rotation.y += 0.0005;
            p.threePlanetGroup.rotation.y += 0.0005;
        });

        this.stellarSystem.planets[2].moons[0].threeMoonGroup.rotation.y += 0.0005;

        this.threeData.controls.update();
        this.threeData.renderer.render(this.threeData.scene, this.threeData.camera);

        this.statsManager.end();
        requestAnimationFrame(this.animate.bind(this));
    }
}

export default Projection;