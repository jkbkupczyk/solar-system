import { DoubleSide, Group, Mesh, MeshPhongMaterial, Scene, SphereGeometry, TextureLoader } from "three";
import Constants from "../Constants/Constants";
import Orbit from "./Orbit";

/**
 * Represents a Planet
 * @extends CelestialObject
 * @constructor
 * @param { Object } data - Physical and orbital data for the planet
 * @param { Object } threeData - Contains number of ThreeJS data (scene, loaders etc.)
 */
class Planet extends CelestialObject {
    constructor(data, threeData) {
        super(data.name, data.mass, data.diameter, data.temperature, data.luminosity);
        this.id = data.id;
        this.rotationPeriod = data.rotationPeriod;
        this.orbitalLength = data.orbitalLength;
        this.orbitalPeriod = data.orbitalPeriod;
        this.orbitalInclination = data.orbitalInclination;
        this.axialTilt = data.axialTilt;
        this.textureLoader = new TextureLoader(); // threeData.loader;
        this.threeSurfaceGraphics = this.createSurfaceGraphics(data.textures.baseMap, data.textures.bumpMap, data.textures.specularMap);
        this.threeAtmosphereGraphics = this.createAtmosphereGraphics(data.textures.cloudMap);
        this.threePlanetGroup = new Group();
        this.threePlanetObject = this.createPlanet();
        this.threeOrbitObject = new Orbit(data.orbitalLength, data.orbitalInclination);
        this.threeScene = new Scene(); // threeData.scene;
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

        const planetGeometry = new SphereGeometry(this.diameter, 32, 32);

        return new Mesh(planetGeometry, surface);
    }

    /**
     * Adds atmosphere (OR clouds) to planet
     * @method
     * @param { String } cloudMap - src to cloud textures
     * @returns { THREE.Mesh } - Atmosphere or Cloud Mesh
     */
    createAtmosphereGraphics(cloudMap) {
        if (!cloudMap) return null;

        const geometry = new SphereGeometry(this.diameter * 1.01, 32, 32);
        const material = new MeshPhongMaterial({
            map: this.textureLoader.load(cloudMap),
            side: DoubleSide,
            opacity: 0.8,
            depthWrite: false,
            transparent: true,
        });

        return new Mesh(geometry, material);
    }

    /**
     * Creates planet and adds it to the group
     * @method
     * @returns { THREE.Group } - Group (container) for planet
     */
    createPlanet() {
        // Set orbital inclination
        target.rotateX(this.orbitalInclination * Constants.degreesToRadiansRatio);

        // Set axial tilt
        this.threePlanetGroup.rotateX(this.axialTilt * Constants.degreesToRadiansRatio);

        // Add atmosphere to planet
        if (this.threeSurfaceGraphics) {
            this.threeSurfaceGraphics.add(this.threeAtmosphereGraphics);
        }

        // Add planet object (with atmosphere) to group
        this.threePlanetGroup.add(this.threeSurfaceGraphics);

        // Add group to current scene
        this.threeScene.add(this.threePlanetGroup);

        return this.threePlanetGroup;
    }


}

export default Planet;