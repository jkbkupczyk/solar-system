<script>
    import { onMount } from "svelte";
    import Projection from "./app/Projection";
    import SettingsCog from "../UI/SettingsCog.svelte";
    import Menu from "./Menu.svelte";

    export let props;
    let canvas;
    let projection;

    onMount(() => {
        if (!props.tag) return;
        projection = new Projection(props.data, canvas);
        projection.project();
    });
</script>

{#if !props.tag}
    <section class="h-screen grid place-content-center text-center p-7 text-xl font-semibold">
        <div>
            <p>Sorry, the system you are looking for is currently disabled 😥</p>
            <span class="mt-4">
                Go back to
                <a href="/#systems" class="text-blue-600 hover:underline">System List</a>
            </span>
        </div>
    </section>
{:else}
    <section>
        <Menu data={props.data} {projection} />
        <div class="absolute w-full h-full">
            <canvas id="canvas" class="block inset-0 w-full h-full overflow-hidden" width="100%" height="100%" bind:this={canvas} />
        </div>
        <SettingsCog {projection} on:click={() => console.log("Modal") } />
    </section>
{/if}

<style>
    #canvas {
        z-index: -1;
    }
</style>
