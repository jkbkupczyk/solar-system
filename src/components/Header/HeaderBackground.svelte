<script>
    import { onDestroy, onMount } from "svelte";
    import { createScene, resize, idx } from "./warp";

    let canvas;

    onMount(() => createScene(canvas));
</script>

<div class="flex absolute w-full h-full">
    <canvas id="canvas" class="block inset-0 w-full h-full overflow-hidden" width="100%" height="100%" bind:this={canvas} />
</div>

<style>
    #canvas {
        z-index: -1;
    }
</style>
