<script>
    import { onMount } from "svelte";
    import { Projection } from "./app/Projection";

    export let props;
    let canvas

    onMount(() => {
        const projection = new Projection(canvas, props.data);
    });
</script>

<div class="absolute w-full h-full">
    <canvas id="canvas" class="block inset-0 w-full h-full overflow-hidden" bind:this={canvas} />
</div>

<style>
    #canvas {
        z-index: -1;
    }
</style>
