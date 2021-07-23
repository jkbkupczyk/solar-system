<script>
    export let systemData;
    let imgTag;
</script>

<a
    href={systemData.tagged ? systemData.link : null}
    class="grid md:grid-cols-2 m-4 border select-none md:w-1/3"
    class:inactive={!systemData.tagged}
    class:has-tooltip={!systemData.tagged}
>
    <div class="grid place-content-center text-center p-2">
        <span class="m-0">
            <svg
                xmlns="http://www.w3.org/2000/svg"
                class="w-4 h-4 m-0 inline-block items-center"
                viewBox="0 0 20 20"
                fill="currentColor"
            >
                <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
                <path
                    fill-rule="evenodd"
                    d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z"
                    clip-rule="evenodd"
                />
            </svg>
            <p class="text-xl">View {systemData.name}</p>
        </span>
    </div>
    <div class="hidden md:flex">
        <img
            src={systemData.cardImg}
            alt={systemData.parentStar}
            class="min-h-full border-radius-right"
        />
    </div>
    <span class="tooltip font-extrabold uppercase text-xl md:text-2xl p-2">
        Currently Disabled
    </span>
</a>

<style>
    .border {
        border: 1px solid rgba(151, 152, 153, 0.4);
        border-radius: 0.5rem;
    }

    .inactive {
        filter: brightness(50%);
        cursor: default;
    }

    a:first-child {
        background: rgba(0, 0, 0, 0.7);
    }

    @media screen and (max-width: 1024px) {
        .text-xl {
            font-size: 0.75rem;
            line-height: 1rem;
        }
    }
</style>
