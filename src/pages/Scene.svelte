<script>
    import { onMount } from "svelte";
    import PlanetaryProjection from "../components/Projection/PlanetaryProjection.svelte";
    import { planetarySystems } from "../data/planetarySystems";
    import { resize } from "../components/Header/warp";

    export let system;
    let systemName = Object.values(system)[0];
    let curr;

    onMount(() => {
        window.removeEventListener("resize", resize);
    })

    const capitalize = (str) => str && str[0].toUpperCase() + str.slice(1);

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

<PlanetaryProjection props={{ tag: planetarySystems[curr].tagged, data: planetarySystems[curr].data }} />