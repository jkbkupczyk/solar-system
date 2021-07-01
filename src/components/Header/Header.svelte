<script>
    import { fade, fly } from "svelte/transition";
    import ArrowDown from "../UI/ArrowDown.svelte";
    import HeaderBackground from "./HeaderBackground.svelte";
</script>

<HeaderBackground />

<header in:fade={{ duration: 2048 }} class="w-full h-screen grid place-content-center m-0 p-0 text-gray-200 header uppercase">
    <p>Solar System</p>
    <div class="flex justify-center">
        <ArrowDown target="#about" />
    </div>
</header>

<style>
    .header {
        font-family: Helvetica, sans-serif;
        font-weight: 300;
        font-size: 2.5rem;
        letter-spacing: 0.25rem;
    }
</style>
