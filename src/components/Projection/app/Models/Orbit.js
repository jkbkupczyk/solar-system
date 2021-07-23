import { BufferGeometry, Line, LineBasicMaterial, Vector3 } from "three";
import Constants from "../Constants/Constants";
/**
 * Represents the gravitationally curved trajectory of an object (Orbit)
 * @constructor
 * @param { Number } radius - Orbit radius
 * @param { Number } inclination - Orbit inclination
 * @param { Array<Number> } centroid - Orbit centroid ([x, y, z])
 */
class Orbit {
    constructor(radius, inclination, planetaryGroup) {
        this.radius = radius;
        this.inclination = inclination;
        this.color = 0x505050;
        this.planetaryGroup = planetaryGroup;
        this.orbit = this.createOrbit();
    }

    /**
     * Creates graphical representation of orbit
     * @method
     * @returns { THREE.Mesh } - Orbit mesh
     */
    createOrbit() {
        const points = [];

        for (let i = 0; i <= 360; i++) {
            points.push(
                new Vector3(
                    Math.sin(i * (Math.PI / 180)) * this.radius,
                    Math.cos(i * (Math.PI / 180)) * this.radius,
                    0
                )
            );
        }

        // Create geometry from 'points' (array of vectors)
        const orbitGeometry = new BufferGeometry().setFromPoints(points);

        // Default buffer geometry rotation is 90°, we want to make it 0° + inclination instead
        orbitGeometry.rotateX((-Math.PI / 2) + this.inclination * Constants.degreesToRadiansRatio);

        const orbitMaterial = new LineBasicMaterial({ color: this.color, linewidth: 1 });
        const orbitObject = new Line(orbitGeometry, orbitMaterial);

        // Make setter method to change color of orbit dynamically
        orbitObject.setColor = (newColor) => {
            orbitObject.material.color.set(newColor);
        }

        // Sets transparency to orbit mesh
        orbitObject.setTransparency = (transparent = false) => {
            orbitObject.material.transparent = transparent;
        }

        // Sets orbit centroid
        orbitObject.setCentroid = (centroid) => {
            orbitObject.position.set(centroid);
        }

        this.planetaryGroup.add(orbitObject);

        return orbitObject;
    }
}

export default Orbit;