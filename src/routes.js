import Home from "./pages/Home.svelte";
import Scene from "./pages/Scene.svelte";

export const routes = [
    { path: "/", component: Home },
    { path: "/scene/:solar", component: Scene },
    { path: "/scene/:proxima", component: Scene },
    { path: "/scene/:trappist", component: Scene }
];