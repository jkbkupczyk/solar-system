<script>
    import ToggleSwitch from "../UI/ToggleSwitch.svelte";
    import { settings } from "../../stores";

    export let statsManager;

    let statsState = [
        { id: 1, style: "bottom: 0px; left: calc(0px + ", shift: "0px", text: "Bottom Left" },
        { id: 2, style: "bottom: 0px; right: calc(0px + ", shift: "80px", text: "Bottom Right" },
        { id: 3, style: "z-index: 100; top: 0px; right: calc(80px + ", shift: "160px", text: "Top Right" },
    ];

    const defaultStyle = "display: block; position: fixed;";

    // used to shift indicator every 80px
    let dist;
    
    $: {
        dist = 0, $settings.indicators.forEach((sw, i) => {
            sw.visible
                ? statsManager.stats[i].setCSS(`${defaultStyle} ${$settings.selectedStyle} ${dist}px);`) 
                : statsManager.stats[i].setCSS('display: none');

            dist += 80;
        });
    }
</script>

<div class="p-2">
    <header class="flex text-xl md:text-2xl font-bold">
        <h1>Settings</h1>
    </header>

    <div class="grid md:grid-rows-2 my-8">
        <div class="flex flex-col md:grid md:grid-cols-2">
            <div class="flex items-center content-start">
                <span class="uppercase font-semibold tracking-widest">position</span>
            </div>
            <div class="relative bg-transparent flex items-center content-start">
                <select bind:value={$settings.selectedStyle} class="text-gray-200 uppercase font-bold tracking-widest outline-none">
                    {#each statsState as state}
                        <option value={state.style} >{state.text}</option>
                    {/each}
                </select>
            </div>
        </div>

        <div class="flex flex-col md:grid md:grid-cols-2">
            {#each $settings.indicators as sw}
                <div class="flex items-center content-start">
                    <span class="uppercase font-semibold tracking-widest">{sw.desc}</span>
                </div>
                <div class="flex items-center content-start">
                    <ToggleSwitch bind:checkedVal={sw.visible} />
                </div>
            {/each}
        </div>
    </div>
</div>

<style>
    select {
        color: #3366cc;
        border-radius: 0.25rem;
        background: transparent;
    }

    select:after {
        position: absolute;
        content: "";
        top: 14px;
        right: 10px;
        width: 0;
        height: 0;
        border: 6px solid transparent;
        border-color: #fff transparent transparent transparent;
    }
</style>