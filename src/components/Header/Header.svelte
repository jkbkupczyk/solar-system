<script>
    import { fade, fly } from "svelte/transition";
    import ArrowDown from "../UI/ArrowDown.svelte";
    import HeaderBackground from "./HeaderBackground.svelte";
    import TextState from "../UI/TextState.svelte";
</script>

<header class="w-full h-screen grid place-content-center select-none m-0 p-0 text-2xl text-center sm:text-3xl md:text-4xl text-gray-200 header uppercase">
    <HeaderBackground />
    <p in:fade={{ duration: 2048 }}>Solar System</p>
    <div class="arrow-container flex justify-center" in:fly={{ y: window.innerHeight, duration: 3072 }}>
        <ArrowDown />
    </div>
</header>

<style>
    .header {
        font-family: Helvetica, sans-serif;
        font-weight: 300;
        letter-spacing: 0.25rem;
    }

    @media screen and (max-width: 200px) {
        .header {
            font-size: 1.25rem;
            line-height: 1.5rem;
        }
    }
</style>