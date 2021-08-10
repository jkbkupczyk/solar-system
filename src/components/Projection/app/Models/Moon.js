import { Group, Mesh, MeshBasicMaterial, MeshPhongMaterial, SphereGeometry } from "three";
import Constants from "../Constants/Constants";
import CelestialObject from "./CelestialObject";
import Orbit from "./Orbit";
/**
 * Represents a natural satellite (moon)
 * @extends CelestialObject
 * @constructor
 * @param { Object } data - Physical and orbital data for the moon
 * @param { Object } threeData - Contains number of ThreeJS data (scene, loaders etc.)
 * @param { THREE.Group } planetGroup - Planet Group
 */
class Moon extends CelestialObject {
    constructor(data, threeData, planetGroup) {
        super(data.name, data.mass, data.diameter, data.temperature);
        this.id = data.id;
        this.name = data.name;
        this.rotationPeriod = data.rotationPeriod;
        this.orbitalLength = data.orbitalLength;
        this.orbitalPeriod = data.orbitalPeriod;
        this.orbitalInclination = data.orbitalInclination;
        this.axialTilt = data.axialTilt;
        this.textureLoader = threeData.textureLoader;
        this.scene = threeData.scene;
        this.threeMoonGroup = this.createMoon(data.textures.baseMap, planetGroup);
        this.threeOrbitObject = new Orbit(data.orbitalLength, data.orbitalInclination, threeData.scene);
    }

    /**
     * Creates moon
     * @method
     * @param { String } baseMap - string url to baseMap
     * @param { THREE.Group } planetGroup - Container with planet
     * @returns { THREE.Group } - Group (container) with moon
     */
    createMoon(baseMap, planetGroup) {
        if (!baseMap) return null;

        const map = this.textureLoader.load(baseMap);

        const moonMesh = new MeshPhongMaterial({
            map: map,
        });

        const moonGeometry = new SphereGeometry(2 * this.diameter, 64, 64);

        // Create container for moon
        const moonGroup = new Group();

        const moon = new Mesh(moonGeometry, moonMesh);

        // Set orbital inclination for moon
        planetGroup.rotateX(this.orbitalInclination * Constants.degreesToRadiansRatio);

        // Moon axial tilt (obliquity)
        moonGroup.rotateX(this.axialTilt * Constants.degreesToRadiansRatio);

        moonGroup.position.set(this.orbitalLength, 0, 0);

        moonGroup.add(moon);

        return moonGroup;
    }
}

export default Moon;