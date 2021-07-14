<script>
    import { slideTransition } from "./slide";

    let slides = [
        { src: "https://source.unsplash.com/random", alt: "a" },
        { src: "https://source.unsplash.com/random", alt: "aa" },
        { src: "https://source.unsplash.com/random", alt: "aaa" },
        { src: "https://source.unsplash.com/random", alt: "aaaa" },
        { src: "https://source.unsplash.com/random", alt: "aaaaa" },
    ];

    let currentSlide = 0;

    const changeSlide = (slide) => {
        currentSlide = slide;
    }

    const map = (number, min, max) => Math.min(Math.max(number, min), max);

    const prev = (e) => {
        currentSlide = map(--currentSlide, 0, slides.length - 1);
    }

    const next = (e) => {
        currentSlide = map(++currentSlide, 0, slides.length - 1);
    }

    const handleShortcut = (e) => {
        if (e.keyCode === 37) prev(); // Arrow LEFT
        if (e.keyCode === 39) next(); // Arrow RIGHT
    }
</script>

<svelte:window on:keyup={handleShortcut} />

<div class="w-4/5 my-0 mx-auto select-none">
    <div class="relative w-full wrapper">
        <div class="absolute flex h-full w-full">
            {#each slides as slide, id}
                {#if id === currentSlide}
                    <img
                        src={slide.src}
                        alt={slide.alt}
                        class="flex flex-init w-full h-full items-center justify-center text-center"
                        in:slideTransition={{ duration: 400 }}
                        out:slideTransition={{ duration: 400 }}
                    />
                {/if}
            {/each}
            <div class="bttns block w-full text-center">
                <button class="absolute left-0 top-0 h-full" on:click={() => prev()}>
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
                    </svg>
                </button>

                <button class="absolute right-0 top-0 h-full" on:click={() => next()}>
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
                    </svg>
                </button>
            </div>
        </div>
    </div>
</div>

<div class="flex items-center justify-center mt-2 mx-2">
    {#each slides as slide, i}
        <button
            on:click={() => changeSlide(i)}
            class="dot opacity-30 p-2 mx-auto mt-6 md:p-3 md:mx-12"
            class:selected={currentSlide == i}>{i + 1}</button
        >
    {/each}
</div>

<style>
    .wrapper {
		padding: 0 0 56.25%;
    }

    .dot {
        background: rgba(229, 231, 235, 1);
        font-size: 0;
        border-radius: 100%;
    }

    .dot.selected {
        opacity: 1;
    }

    .dot:hover,
    .dot:focus {
        background: rgba(255, 255, 255, .7);
    }

    .bttns button:focus,
    .bttns button:hover {
        background: rgba(192, 192, 192, .5);
    }

    .flex-init {
        flex: 1 0 auto;
    }
</style>
