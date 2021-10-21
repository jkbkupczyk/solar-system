import { AmbientLight, Group, PerspectiveCamera, PointLight, Scene, TextureLoader, WebGLRenderer } from "three";
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
/**
 * Contain number of data used by WebGL engine
 * @constructor
 * @param { HTMLCanvasElement | OffscreenCanvas } canvas - Canvas used by renderer to output data
 */
class ThreeData {
    constructor(canvas) {
        this.camera = new PerspectiveCamera(75, window.innerWidth / window.innerHeight, 1, 9007199254740991);
        this.renderer = this.buildRenderer(canvas);
        this.textureLoader = new TextureLoader();
        this.light = new PointLight(0xffffff, 1, 999999, 1);
        this.scene = this.buildScene();
        this.controls = new OrbitControls(this.camera, this.renderer.domElement);
        this.parentGroup = new Group();
    }

    /**
     * Initialize renderer with default data
     * @param { HTMLCanvasElement | OffscreenCanvas } canvas - Canvas used by renderer to output data
     * @returns { THREE.WebGLRenderer } - WebGL renderer
     */
    buildRenderer(canvas) {
        const renderer = new WebGLRenderer({ canvas: canvas });

        renderer.setPixelRatio(window.devicePixelRatio);
        renderer.setSize(window.innerWidth, window.innerHeight);
        renderer.setClearColor(0x000000, 1);

        const resize = () => {
            renderer.setPixelRatio(window.devicePixelRatio);
            renderer.setSize(window.innerWidth, window.innerHeight);
            this.camera.aspect = window.innerWidth / window.innerHeight;
            this.camera.updateProjectionMatrix();
        }

        window.addEventListener('resize', resize);

        return renderer;
    }

    buildScene() {
        this.camera.position.set(-2181, 34102, 59697);
        // this.camera.position.set(1200, 256, 350);
        const scene = new Scene();

        const ambientLight = new AmbientLight(0xffffff);

        scene.add(this.light);

        return scene;
    }
}

export default ThreeData;