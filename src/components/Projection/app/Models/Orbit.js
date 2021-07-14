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
    constructor(radius, inclination, centroid) {
        this.radius = radius;
        this.inclination = inclination;
        this.centroid = centroid;
        this.color = 0x505050;
        this.threeOrbitObject = this.createOrbit();
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

        const orbitGeometry = new BufferGeometry().setFromPoints(points);

        // Default buffer geometry rotation is 90°, we want to make it 0° + inclination instead
        orbitGeometry.rotateX((-Math.PI / 2) + this.inclination * Constants.degreesToRadiansRatio);

        const orbitMaterial = new LineBasicMaterial({ color: this.color, linewidth: 1 });
        const orbitMesh = new Line(orbitGeometry, orbitMaterial);

        // Make setter method to change color of orbit dynamically
        orbitMesh.setColor = (newColor) => {
            orbitMesh.material.color.set(newColor);
        }

        // Set orbit centroid
        orbitMesh.position.set(this.centroid);

        return orbitMesh;
    }
}

export default Orbit;