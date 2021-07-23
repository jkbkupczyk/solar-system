<script>
    import { onMount } from "svelte";
    import { fade, fly } from "svelte/transition";
    import Projection from "./app/Projection";

    export let props;
    let canvas

    onMount(() => {
        const projection = new Projection(props.data, canvas);
        projection.project();
    });
</script>

<div class="absolute w-full h-full">
    <canvas id="canvas" class="block inset-0 w-full h-full overflow-hidden" width="100%" height="100%" bind:this={canvas} />
</div>

<style>
    #canvas {
        z-index: -1;
    }
</style>
