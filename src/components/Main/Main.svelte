<script>
    import { onMount } from "svelte";
    import About from "./About.svelte";
    import SystemList from "./System/SystemList.svelte";
    import Gallery from "./Gallery.svelte";
</script>

<main class="bg flex justify-center p-2 md:px-11 md:py-0 text-center text-gray-200">
    <div class="container py-0 md:p-8">
        <About />

        <SystemList />

        <!-- <Gallery /> -->
    </div>
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