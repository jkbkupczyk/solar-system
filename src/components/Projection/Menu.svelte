<script>
    export let data;
    export let projection;
</script>

<nav class="fixed top-0 text-gray-200 w-auto md:w-64 select-none">
    <ul class="list-none m-1">
        <input type="checkbox" class="hidden" id="dropdownStars" checked={window.innerWidth < 768}>

        <header class="flex text-base md:text-xl font-bold py-2 px-4">
            <label class="cursor-pointer flex items-start justify-between w-full" for="dropdownStars">
                <h1 class="mr-2">Stars</h1>
                <div class="">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                    </svg>
                </div>
            </label>
        </header>

        <div class="slide-in-top">
            {#each data.stars as d, i}
                <li class="text-xs md:text-base font-medium py-2 px-4 cursor-pointer hover:text-blue-600"
                    on:click={() => {
                        projection.threeData.camera.position.set(projection.stellarSystem.stars[i].threeStarGroup.position.x, 60, 365);
                    }}
                >{d.name}</li>
            {/each}
        </div>
    </ul>

    <ul class="list-none m-1">
        <input type="checkbox" class="hidden" id="dropdownPlanets" checked={window.innerWidth < 768}>

        <header class="flex text-base md:text-xl font-bold py-2 px-4">
            <label class="cursor-pointer flex items-start justify-between w-full" for="dropdownPlanets">
                <h1 class="mr-2">Planets</h1>
                <div class="planetsRotate">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                </div>
            </label>
        </header>

        <div class="slide-in-top">
            {#each data.planets as d, i}
                <li class="text-xs md:text-base font-medium py-2 px-4 cursor-pointer hover:text-blue-600"
                    on:click={() => {
                        projection.threeData.camera.position.set(projection.stellarSystem.planets[i].threePlanetObject.position.x, 0, 100);
                    }}
                    on:mouseenter={() => projection.stellarSystem.planets[i].threeOrbitObject.orbit.setColor(0x3366cc)}
                    on:mouseleave={() => projection.stellarSystem.planets[i].threeOrbitObject.orbit.setColor(0x505050)}
                    >{d.name}</li>
            {/each}
        </div>
    </ul>
</nav>

<style>
    #dropdownStars:checked ~ div,
    #dropdownPlanets:checked ~ div {
        display: none;
    }

    #dropdownStars ~ header label div {
        -webkit-transition: -webkit-transform 750ms;
        -moz-transition: -moz-transform 750ms;
        transition: transform 750ms;
    }

    #dropdownStars:checked ~ header label div {
        -webkit-transform: rotate(45deg);
        -moz-transform: rotate(45deg);
        transform: rotate(45deg);
    }

    #dropdownPlanets ~ header label div {
        -webkit-transition: -webkit-transform 750ms;
        -moz-transition: -moz-transform 750ms;
        transition: transform 750ms;
    }

    #dropdownPlanets:checked ~ header label div {
        -webkit-transform: rotateY(180deg);
        -moz-transform: rotateY(180deg);
        transform: rotateY(180deg);
    }

    .slide-in-top {
        -webkit-animation: slide-in-top 0.5s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;
        animation: slide-in-top 0.5s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;
    }

    nav {
        z-index: 1;
    }

    ul {
        background: rgba(32, 32, 32, 0.25);
        border: 1px solid rgba(45, 45, 45, 0.85);
    }

    header, li {
        border-bottom: 1px solid rgba(45, 45, 45, 0.85);
    }

    li:hover {
        background: rgba(32, 32, 32, 0.75);
    }
</style>
