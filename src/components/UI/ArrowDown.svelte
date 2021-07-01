<script>
    export let target = "";
</script>

<a href={target} class="arrow w-min p-5">
    <svg xmlns="http://www.w3.org/2000/svg" class="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
    </svg>
</a>

<style>
    @-webkit-keyframes arrow-down {
        0%,
        50%,
        100% {
            -webkit-transform: translateY(0);
            transform: translateY(0);
        }
        25%,
        75% {
            -webkit-transform: translateY(8px);
            transform: translateY(8px);
        }
    }
    @keyframes arrow-down {
        0%,
        50%,
        100% {
            -webkit-transform: translateY(0);
            transform: translateY(0);
        }
        25%,
        75% {
            -webkit-transform: translateY(8px);
            transform: translateY(8px);
        }
    }

    .arrow {
        display: inline-block;
        vertical-align: middle;
        user-select: none;
    }

    .arrow:hover,
    .arrow:focus,
    .arrow:active {
        -webkit-animation-name: arrow-down;
        -webkit-animation-duration: 1s;
        -webkit-animation-timing-function: ease-in-out;
        -webkit-animation-iteration-count: 1;
        animation-name: arrow-down;
        animation-duration: 1s;
        animation-timing-function: ease-in-out;
        animation-iteration-count: 1;
    }
</style>
