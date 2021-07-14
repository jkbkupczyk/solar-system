<script>
    import Divider from "../UI/Divider.svelte";
</script>

<article>
    <Divider text="about" />
    <div class="grid md:grid-cols-2 p-3 md:p-8">
        <p class="text-center text-base tracking-wide sm:text-lg md:text-xl md:tracking-wider p-0 md:p-6">
            SpaceEngine is a realistic virtual Universe you can explore on your
            computer. You can travel from star to star, from galaxy to galaxy,
            landing on any planet, moon, or asteroid with the ability to explore its
            alien landscape. You can alter the speed of time and observe any
            celestial phenomena you please. All transitions are completely seamless,
            and this virtual universe has a size of billions of light-years across
            and contains trillions upon trillions of planetary systems.
        </p>
        <div class="video-container relative h-0 overflow-hidden flex justify-center">
            <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/p8u_k2LIZyo"
            title="YouTube video player"
            class="absolute inset-0 w-full h-full p-2 md:p-6"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
            />
        </div>
    </div>
</article>

<style>
    .video-container {
        padding-bottom: 56.25%;
        padding-top: 30px;
    }
</style>
