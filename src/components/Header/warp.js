import * as THREE from 'three';

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 1, 1000);

camera.position.z = 1;

let renderer;

const generateStars = (n) => {
    const stars = [];

    for (let i = 0; i < n; i++) {
        stars.push(
            new THREE.Vector3(
                Math.random() * 1400 - 700,
                Math.random() * 1400 - 700,
                Math.random() * 2800 - 1400,
            )
        );
    }

    return stars;
}

const starGeo = new THREE.BufferGeometry();

const stars = generateStars(6000);

starGeo.setFromPoints(stars);

const material = new THREE.PointsMaterial({
    color: 0xeeeeee,
});

const starPoints = new THREE.Points(starGeo, material);

scene.add(starPoints);

camera.position.z = 1400;

const animate = () => {

    if (camera.position.z <= -1300) {
        camera.position.z = 1400;
        starPoints.position.z = 0;
    }

    camera.position.z -= 5;
    starPoints.position.z -= 2;

    requestAnimationFrame(animate);
    renderer.render(scene, camera);
};

const resize = () => {
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(window.devicePixelRatio);
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
};

export const createScene = (el) => {
    renderer = new THREE.WebGLRenderer({ canvas: el });
    resize();
    animate();
}

window.addEventListener('resize', resize);