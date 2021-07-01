<script>
    import { onMount } from "svelte";
    import { createScene } from "./warp";

    let canvas;

    onMount(() => {
        createScene(canvas);
    });
</script>

<canvas id="canvas" bind:this={canvas} />

<style>
    #canvas {
        position: absolute;
        z-index: -1;
        top: 0;
        left: 0;
    }
</style>
