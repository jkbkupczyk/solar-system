import CelestialObject from "./CelestialObject";
import { DoubleSide, Group, Mesh, MeshBasicMaterial, MeshPhongMaterial, SphereGeometry } from "three";
import Constants from "../Constants/Constants";
import Orbit from "./Orbit";
import Moon from "./Moon";
/**
 * Represents a Planet
 * @extends CelestialObject
 * @constructor
 * @param { Object } data - Physical and orbital data for the planet
 * @param { Object } threeData - Contains number of ThreeJS data (scene, loaders etc.)
 */
class Planet extends CelestialObject {
    constructor(data, threeData) {
        super(data.name, data.mass, data.diameter, data.temperature);
        this.id = data.id;
        this.rotationPeriod = data.rotationPeriod;
        this.orbitalLength = data.orbitalLength;
        this.orbitalPeriod = data.orbitalPeriod;
        this.orbitalInclination = data.orbitalInclination;
        this.axialTilt = data.axialTilt;
        this.textureLoader = threeData.textureLoader;
        this.threeScene = threeData.scene;
        this.threeSurfaceGraphics = this.createSurfaceGraphics(data.textures.baseMap, data.textures.bumpMap, data.textures.specularMap);
        this.threeAtmosphereGraphics = this.createAtmosphereGraphics(data.textures.cloudMap);
        this.threeStarPlanetGroup = new Group();
        this.threePlanetGroup = new Group();
        this.threePlanetObject = this.createPlanet(data.moons, threeData);
        this.moons = this.createMoons(data.moons, threeData);
        this.threeOrbitObject = new Orbit(data.orbitalLength, data.orbitalInclination, threeData.scene);
    }

    /**
     * Creates textured planet mesh with bump map
     * @method
     * @param { String } baseMap - src to baseMap texture
     * @param { String } bumpMap - src to bumpMap texture
     * @param { String } specularMap - src to specularMap texture
     * @returns { THREE.Mesh } - Textured planet mesh
     */
    createSurfaceGraphics(baseMap, bumpMap, specularMap) {
        if (!baseMap) return null;

        const map = this.textureLoader.load(baseMap);
        const bump = this.textureLoader.load(bumpMap) ?? null;
        const specular = this.textureLoader.load(specularMap) ?? null;

        const surface = new MeshPhongMaterial({
            map: map,
            bumpMap: bump,
            bumpScale: bumpMap ? 0.03 : null,
            specularMap: specular,
            specular: 0x404040, // defines how shiny the material is - dark gray
        });

        const planetGeometry = new SphereGeometry(2*this.diameter, 32, 32);

        return new Mesh(planetGeometry, surface);
    }

    /**
     * Adds atmosphere to planet
     * @method
     * @param { String } cloudMap - src to cloud textures
     * @returns { THREE.Mesh } - Atmosphere or Cloud Mesh
     */
    createAtmosphereGraphics(cloudMap) {
        if (!cloudMap) return null;

        const geometry = new SphereGeometry(2*this.diameter * 1.01, 32, 32);

        const clouds = new MeshPhongMaterial({
            map: this.textureLoader.load(cloudMap),
            side: DoubleSide,
            opacity: 0.8,
            depthWrite: false,
            transparent: true,
        });

        return new Mesh(geometry, clouds);
    }

    /**
     * Creates moons for planet
     * @method
     * @param { Object } moonData - Physical and orbital data for the moon
     * @param { Object } threeData - Contains number of ThreeJS data (scene, loaders etc.)
     * @returns { Array<Moon> } - Array with moons
     */
    createMoons(moonData, threeData) {
        const moons = [];

        moonData.forEach(m => {
            const moon = new Moon(m, threeData, this.threePlanetGroup);
            this.threePlanetGroup.add(moon.threeMoonGroup);
            moons.push(moon);
        });

        return moons;
    }

    /**
     * Creates planet and adds it to the group
     * @method
     * @param { Object } moonData - Physical and orbital data for the moon
     * @param { Object } threeData - Contains number of ThreeJS data (scene, loaders etc.)
     * @returns { THREE.Group } - Group (container) for planet
     */
    createPlanet() {
        // Set orbital inclination
        this.threeStarPlanetGroup.rotateX(this.orbitalInclination * Constants.degreesToRadiansRatio);

        // Set axial tilt
        this.threeSurfaceGraphics.rotateX(this.axialTilt * Constants.degreesToRadiansRatio);
        this.threePlanetGroup.position.set(this.orbitalLength, 0, 0);

        // Add atmosphere to planet
        if (this.threeSurfaceGraphics) {
            this.threeSurfaceGraphics.add(this.threeAtmosphereGraphics);
        }

        // Add planet object (with atmosphere) to group
        this.threePlanetGroup.add(this.threeSurfaceGraphics);

        this.threeStarPlanetGroup.add(this.threePlanetGroup);

        // Add group (planet & moon) to current scene
        this.threeScene.add(this.threeStarPlanetGroup);

        return this.threePlanetGroup;
    }


}

export default Planet;