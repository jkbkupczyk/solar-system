<script>
    export let text = "";
</script>

<div
    class="flex text-center items-center text-xl md:text-3xl tracking-widest uppercase"
>
    {text}
</div>

<style>
    div::before,
    div::after {
        content: "";
        flex: 1;
        height: 2px;
        width: 80%;
        border-bottom: 2px solid transparent
            linear-gradient(
                120deg,
                hsl(0, 0%, 20%),
                hsl(0, 0%, 70%),
                hsl(0, 0%, 20%)
            );
        background: linear-gradient(
            120deg,
            hsl(0, 0%, 20%),
            hsl(0, 0%, 70%),
            hsl(0, 0%, 20%)
        );
    }

    div:not(:empty)::before {
        margin-right: 2rem;
    }

    div:not(:empty)::after {
        margin-left: 2rem;
    }

    @media screen and (max-width: 767px) {
        div:not(:empty)::before {
            margin: 0 .75rem;
        }

        div:not(:empty)::after {
            margin: 0 .75rem;
        }
    }
</style>
