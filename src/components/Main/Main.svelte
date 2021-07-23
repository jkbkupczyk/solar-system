<script>
    import { onMount } from "svelte";
    import About from "./About.svelte";
    import SystemList from "./System/SystemList.svelte";
    import Gallery from "./Gallery.svelte";
    // import { systems } from "../../data/systems.json";

    // let toggleSwitch;
    // let statFPS, statLAT, statMEM;
    // let selected;

    // let statsState = [
    //     { id: 1, style: "bottom: 0px; left: ", shift: "0px", text: "Bottom Left" },
    //     { id: 2, style: "bottom: 0px; right: ", shift: "80px", text: "Bottom Right" },
    //     { id: 3, style: "top: 0px; right: ", shift: "160px", text: "Top Right" },
    // ];

    // const style = "display: block; position: fixed;";

    // const stats = new Stats();
    // stats.showPanel(0);
    // document.body.appendChild(stats.dom);

    // const stats2 = new Stats();
    // stats2.showPanel(1);
    // document.body.appendChild(stats2.dom);

    // const stats3 = new Stats();
    // stats3.showPanel(2);
    // document.body.appendChild(stats3.dom);

    // $: {
    //     statFPS ? stats.domElement.style.cssText = `${style} ${selected} 0px;` : stats.domElement.style.cssText = 'display: none';
    //     statLAT ? stats2.domElement.style.cssText = `${style} ${selected} 80px;` : stats2.domElement.style.cssText = 'display: none';
    //     statMEM ? stats3.domElement.style.cssText = `${style} ${selected} 160px;` : stats3.domElement.style.cssText = 'display: none';
    // }
</script>

<main class="bg flex justify-center p-2 md:px-11 md:py-0 text-center text-gray-200">
    <div class="container py-0 md:p-8">
        <About />

        <SystemList />

        <!-- <Gallery /> -->
    </div>
    <!-- <select bind:value={selected}>
        {#each statsState as state}
            <option value={state.style}>{state.text}</option>
        {/each}
    </select> -->

    <!-- <ToggleSwitch bind:checkedVal={statFPS} />
    <ToggleSwitch bind:checkedVal={statLAT} />
    <ToggleSwitch bind:checkedVal={statMEM} /> -->
</main>

<style>
    .bg {
        background-image: url("/assets/bg.png");
        background-repeat: repeat;
    }

    .container {
        background: rgba(0, 0, 0, 0.7);
    }
</style>