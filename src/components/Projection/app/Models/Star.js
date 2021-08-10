import CelestialObject from "./CelestialObject";
import { Group, Mesh, MeshPhongMaterial, SphereGeometry, SpotLight } from "three";
/**
 * Represents a Star
 * @extends CelestialObject
 * @constructor
 * @param { Object } data - Physical and orbital data for the star
 * @param { Object } threeData - Contains number of ThreeJS data (scene, loaders etc.)
 */
class Star extends CelestialObject {
    constructor(data, threeData) {
        super(data.name, data.mass, data.diameter, data.temperature);
        this.threeData = threeData;
        this.textureLoader = threeData.textureLoader;
        this.threeScene = threeData.scene;
        this.threeSpotlights = this.createSpotlights();
        this.threeStarGroup = this.createStar(data.textures.baseMap);
    }

    /**
     * Creates star
     * @method
     * @param { String } baseMap - src to baseMap texture
     * @returns { THREE.Group } - Group (container) with star
     */
    createStar(baseMap) {
        if (!baseMap) return null;

        const map = this.textureLoader.load(baseMap);

        const starMesh = new MeshPhongMaterial({ map: map });

        const starGeometry = new SphereGeometry(this.diameter, 64, 64);

        const starGroup = new Group();

        const star = new Mesh(starGeometry, starMesh);

        starGroup.add(star);

        this.threeData.scene.add(starGroup);

        return starGroup;
    }

    /**
     * Creates spotlights to illuminate star
     * @method
     * @returns { undefined | void }
     */
    createSpotlights() {
        new Array(7).fill(0).forEach((s, idx) => {
            const spotLight = new SpotLight(0xffffff, 3, this.diameter + 300, Math.PI / 2);
            const position = idx % 2 == 0 ? 3 * this.diameter : -3 * this.diameter;

            spotLight.position.set(
                idx < 2 ? position : 0,
                idx >= 2 && idx < 4 ? position : 0,
                idx >= 4 ? position : 0,
            );

            this.threeScene.add(spotLight);
        });
    }
}

export default Star;