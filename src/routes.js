import Home from "./components/Main/Home.svelte";
import Scene from "./components/Scene.svelte";

export const routes = [
    { path: "/", name: "Home", component: Home },
    { path: "/scene", name: "Scene", component: Scene }
];