<script>
    import { onMount } from "svelte";
    import PlanetaryProjection from "../components/Projection/PlanetaryProjection.svelte";
    import { planetarySystems } from "../data/planetarySystems";
    import { resize } from "../components/Header/warp";
    import { capitalize } from "../shared/shared";
    import Modal from "../components/UI/Modal.svelte";

    export let system;
    let systemName = Object.values(system)[0];
    let curr;

    onMount(() => {
        window.removeEventListener("resize", resize);
    })

    $: {
        switch(systemName) {
            case "solar": curr = 0; break;
            case "proxima": curr = 1; break;
            case "trappist": curr = 2; break;
        }
    }
</script>

<svelte:head>
    <title>{capitalize(systemName)} System</title>
</svelte:head>

<Modal>
    <PlanetaryProjection props={{ tag: planetarySystems[curr].tagged, data: planetarySystems[curr].data }} />
</Modal>